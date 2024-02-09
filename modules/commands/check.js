module.exports.config = {
    name: "TN", 
    version: "1.0.1", 
    hasPermssion: 2, 
    credits: "DungUwU && Nghĩa", 
    description: "Không dùng đc đâu:c", 
    commandCategory: "Hệ thống", 
    usages: "[all/week/day]", 
    cooldowns: 5, 
    dependencies: {
        "fs": " ",
        "moment-timezone": " "
    }
};

const path = __dirname + '/tuongtac/checktt/';
const moment = require('moment-timezone');

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
  setInterval(() => {
    const today = moment.tz("Asia/Ho_Chi_Minh").day();
    const checkttData = fs.readdirSync(path);
    checkttData.forEach(file => {
      let fileData = JSON.parse(fs.readFileSync(path + file));
      if (fileData.time != today) {
        setTimeout(() => {
          fileData = JSON.parse(fs.readFileSync(path + file));
          if (fileData.time != today) {
            fileData.time = today;
            fs.writeFileSync(path + file, JSON.stringify(fileData, null, 4));
          }
        }, 60 * 1000);
      }
    })
  }, 60 * 1000);
}

module.exports.handleEvent = async function ({ api, event, Threads }) {
    if (!event.isGroup) return;
    if (global.client.sending_top == true) return;
    const fs = global.nodemodule['fs'];
    const { threadID, senderID } = event;
    const today = moment.tz("Asia/Ho_Chi_Minh").day();

    if (!fs.existsSync(path + threadID + '.json')) {
        const newObj = {
            total: [],
            week: [],
            day: [],
            time: today
        };
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
        const threadInfo = await Threads.getInfo(threadID) || {};
        if (threadInfo.hasOwnProperty('isGroup') && threadInfo.isGroup) {
            const UserIDs = threadInfo.participantIDs;
            for (user of UserIDs) {
                if (!newObj.total.find(item => item.id == user)) {
                    newObj.total.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.week.find(item => item.id == user)) {
                    newObj.week.push({
                        id: user,
                        count: 0
                    });
                }
                if (!newObj.day.find(item => item.id == user)) {
                    newObj.day.push({
                        id: user,
                        count: 0
                    });
                }
            }
        }
        fs.writeFileSync(path + threadID + '.json', JSON.stringify(newObj, null, 4));
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    if (threadData.time != today) {
      global.client.sending_top = true;
      setTimeout(() => global.client.sending_top = false, 5 * 60 * 1000);
    }
    const userData_week_index = threadData.week.findIndex(e => e.id == senderID);
    const userData_day_index = threadData.day.findIndex(e => e.id == senderID);
    const userData_total_index = threadData.total.findIndex(e => e.id == senderID);
    if (userData_total_index == -1) {
        threadData.total.push({
            id: senderID,
            count: 1,
        });
    } else threadData.total[userData_total_index].count++;
    if (userData_week_index == -1) {
        threadData.week.push({
            id: senderID,
            count: 1
        });
    } else threadData.week[userData_week_index].count++;
    if (userData_day_index == -1) {
        threadData.day.push({
            id: senderID,
            count: 1
        });
    } else threadData.day[userData_day_index].count++;

    fs.writeFileSync(path + threadID + '.json', JSON.stringify(threadData, null, 4));
}

module.exports.run = async function ({ api, event, args, Users, Threads }) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const fs = global.nodemodule['fs'];
    const { threadID, messageID, senderID, mentions } = event;
  const moment = require("moment-timezone");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Chủ Nhật'
  if (thu == 'Monday') thu = 'Thứ Hai'
  if (thu == 'Tuesday') thu = 'Thứ Ba'
  if (thu == 'Wednesday') thu = 'Thứ Tư'
  if (thu == "Thursday") thu = 'Thứ Năm'
  if (thu == 'Friday') thu = 'Thứ Sáu'
  if (thu == 'Saturday') thu = 'Thứ Bảy'
      const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s | DD/MM/YYYY");
    if (!fs.existsSync(path + threadID + '.json')) {
        return api.sendMessage("Chưa có dữ liệu", threadID);
    }
    const threadData = JSON.parse(fs.readFileSync(path + threadID + '.json'));
    const query = args[0] ? args[0].toLowerCase() : '';

    var header = '',
        body = '',
        footer = '',
        msg = '',
        count = 1,
        storage = [],
        data = 0;
    if (query == 'all' || query == '-a') {
        header = '『 🌸 』=== 『 CHECK - ALL 』 ===『 🌸 』\n◆━━━━━━━━━━━━━━━━◆\n\n';
        data = threadData.total;
    } else if (query == 'week' || query == '-w') {
        header = '『 🌸 』=== 『 CHECK - WEEK 』 ===『 🌸 』\n◆━━━━━━━━━━━━━━━━◆\n\n';
        data = threadData.week;
    } else if (query == 'day' || query == '-d') {
        header = '『 🌸 』=== 『 CHECK - DAY 』 ===『 🌸 』\n◆━━━━━━━━━━━━━━━━◆\n\n';
        data = threadData.day;
    } else {
        data = threadData.total;
    }
    for (const item of data) {
        const userName = await Users.getNameUser(item.id) || 'Facebook User';
        const itemToPush = item;
        itemToPush.name = userName;
        storage.push(itemToPush);
    };
    let check = ['all', '-a', 'week', '-w', 'day', '-d'].some(e => e == query);
    if (!check && Object.keys(mentions).length > 0) {
        storage = storage.filter(e => mentions.hasOwnProperty(e.id));
    }
    //sort by count from high to low if equal sort by name
    storage.sort((a, b) => {
        if (a.count > b.count) {
            return -1;
        }
        else if (a.count < b.count) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    if ((!check && Object.keys(mentions).length == 0) || (!check && Object.keys(mentions).length == 1) || (!check && event.type == 'message_reply')) {
        const UID = event.messageReply ? event.messageReply.senderID : Object.keys(mentions)[0] ? Object.keys(mentions)[0] : senderID;
        const userRank = storage.findIndex(e => e.id == UID);
        const userTotal = threadData.total.find(e => e.id == UID) ? threadData.total.find(e => e.id == UID).count : 0;      
        const userTotalWeek = threadData.week.find(e => e.id == UID) ? threadData.week.find(e => e.id == UID).count : 0;
        const userRankWeek = threadData.week.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
        const userTotalDay = threadData.day.find(e => e.id == UID) ? threadData.day.find(e => e.id == UID).count : 0;
        const userRankDay = threadData.week.sort((a, b) => b.count - a.count).findIndex(e => e.id == UID);
        const nameUID = storage[userRank].name || 'Facebook User';
       let threadInfo = await api.getThreadInfo(event.threadID);
  nameThread = threadInfo.threadName;
      var permission;
        if (global.config.ADMINBOT.includes(UID)) permission = `Admin Bot`;
else if
(global.config.NDH.includes(UID)) 
permission = `Người Hỗ Trợ`; else if (threadInfo.adminIDs.some(i => i.id == UID)) permission = `Quản Trị Viên`; else permission = `Thành Viên`;
        const target = UID == senderID ? 'Bạn' : nameUID;
        if (userRank == -1) {
            return api.sendMessage(`${target} chưa có dữ liệu`, threadID);
        }
        body += `『 🌸 』=== 『 CHECK - PERSONAL 』 ===『 🌸 』
        ◆━━━━━━━━━━━━━━━━◆
        === [ ${nameThread} ] ===
        ━━━━━━━━━━━━━━━━━━
        『 🌸 』 ➜ Tên: ${nameUID}
        『 🌸 』 ➜ ID: ${UID}
        『 🌸 』 ➜ Chức Vụ: ${permission}
        ━━━━━━━━━━━━━━━━━━
        『 🌸 』 ➜ Tin Nhắn Trong Ngày: ${userTotalDay}
        『 🌸 』 ➜ Hạng Trong Ngày: ${userRankDay + 1}
        ━━━━━━━━━━━━━━━━━━
        『 🌸 』 ➜ Tin Nhắn Trong Tuần: ${userTotalWeek}
        『 🌸 』 ➜ Hạng Trong Tuần: ${userRankWeek + 1}
        ━━━━━━━━━━━━━━━━━━
        『 🌸 』 ➜ Tổng Tin Nhắn: ${userTotal}
        『 🌸 』 ➜ Hạng Tổng: ${userRank + 1}
        ━━━━━━━━━━━━━━━━━━
        『 🌸 』 ➜ Hôm Nay Là: ${thu}
        『 🌸 』 ➜ Thời Gian Kiểm Tra: ${time}
        `.replace(/^ +/gm, '');
    } else {
        body = storage.map(item => {
            return `${count++}. ${item.name} với ${item.count} tin nhắn`;
        }).join('\n');
        footer = `『 🌸 』 ➜ Tổng Tin Nhắn: ${storage.reduce((a, b) => a + b.count, 0)}`;
    }

    msg = `${header}\n${body}\n${footer}`;
    return api.sendMessage(msg, threadID);
    threadData = storage = null;
}