module.exports.config = {
    name: "box",
    version: "2.1.1",
    hasPermssion: 0,
    credits: "Hung Cho",
    description: "Các cài đặt của nhóm",
    commandCategory: "Quản Lí Box",
    usages: "[id/name/setnamebox/emoji/me setqtv/setqtv/image/info/new/taobinhchon/setname/setnameall/rdcolor]",
    cooldowns: 0,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "request": ""
    }
};

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
const request = require("request");
const axios = require("axios");

module.exports.handleEvent = async ({ api, event, args }) => {
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    if (!totalChat[event.threadID]) return;
    if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
        let sl = (await api.getThreadInfo(event.threadID)).messageCount;
        totalChat[event.threadID] = {
            time: Date.now() - _24hours,
            count: sl,
            ytd: sl - totalChat[event.threadID].count
        }
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }
}
module.exports.handleReply = function({ api, event, handleReply }) {
    const { threadID, senderID, body } = event;
    if(senderID != handleReply.author) return;
    return api.createPoll(body, event.threadID, handleReply.obj, (err, info) => {
        if(err) return console.log(err);
        else {
            api.sendMessage(`『 ${global.config.ICON} 』 ➜ Bình chọn ${body} đã được tạo`, threadID);
            api.unsendMessage(handleReply.messageID);
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        }
    });
}
module.exports.run = async function({ api, event, args, Users, Threads }) {
    const { threadID, messageID, senderID, type, mentions, messageReply } = event;
  var fullTime = global.client.getTime("fullTime");
    const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
    if (args.length == 0) {
      return api.sendMessage(`==== 『 𝐁𝐎𝐗 𝐂𝐎𝐍𝐅𝐈𝐆 』 ==== \n━━━━━━━━━━━━━━━\n➜ ${global.config.PREFIX}${this.config.name} id \n𝙼𝚘̂ 𝚝𝚊̉: Lấy ID của nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} name \n𝙼𝚘̂ 𝚝𝚊̉: Lấy tên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} boxname < tên > \n𝙼𝚘̂ 𝚝𝚊̉: Đổi tên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} emoji < icon > \n𝙼𝚘̂ 𝚝𝚊̉: Đổi icon nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} info \n𝙼𝚘̂ 𝚝𝚊̉: Xem thông tin nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} me setqtv \n𝙼𝚘̂ 𝚝𝚊̉: Bot sẽ thêm bạn làm Quản trị viên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} setqtv < tag > \n𝙼𝚘̂ 𝚝𝚊̉: Thêm người dùng làm Quản trị viên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} image < phản hồi ảnh > \n𝙼𝚘̂ 𝚝𝚊̉: Đổi ảnh bìa nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} new < tag > \n𝙼𝚘̂ 𝚝𝚊̉: Tạo 1 nhóm mới với những người được tag!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} info < tag > \n𝙼𝚘̂ 𝚝𝚊̉: Xem thông tin người dùng facebook\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} taobinhchon \n𝙼𝚘̂ 𝚝𝚊̉: Tạo bình chọn trong nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} setname < tag/phản hồi > < biệt danh > → Đặt biệt danh thành viên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} setnameall < biệt danh > \n𝙼𝚘̂ 𝚝𝚊̉: Đặt biệt danh đồng bộ tất cả thành viên nhóm\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n➜ ${global.config.PREFIX}${this.config.name} rdcolor \n𝙼𝚘̂ 𝚝𝚊̉: Thiết lập chủ đề nhóm ngẫu nhiên\n\n━━━━━━━━━━━━━━━\n『 ${global.config.ICON} 』=== 『 ${global.config.BOTNAME}  』 ===『 ${global.config.ICON} 』\n\n===「${timeNow}」===`, threadID);
    }
    var id = [event.senderID] || [];
  var main = event.body;
  var groupTitle = main.slice(main.indexOf("|") +2)
  if (args[0] == "new") {
   for (var i = 0; i < Object.keys(event.mentions).length; i++) 
id.push(Object.keys(event.mentions)[i]);
  api.createNewGroup(id, groupTitle,() => {
    api.sendMessage(`『 ${global.config.ICON} 』 ➜ Đã tạo nhóm ${groupTitle}`, event.threadID)
  })
}

  if (args[0] == "image") {
    if (event.type !== "message_reply") return api.sendMessage("『 "+ global.config.ICON +"  』 ➜ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("『 "+ global.config.ICON +"  』 ➜ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(`『 `+ global.config.ICON +` 』 ➜ Bạn phải reply một audio, video, ảnh nào đó`, event.threadID, event.messageID);
    var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  };
  

 }
