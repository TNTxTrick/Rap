module.exports.config = {
  name: "kick",
  version: "1.0.1",
  hasPermssion: 1,
  credits: "uwu",
  description: "Kick người dùng",
  commandCategory: "Quản Lí Box",
  usages: "[tag]",
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, Threads }) {
  var { threadID, messageID, senderID, mentions } = event;
  var mention = Object.keys(mentions);
  var threadInfo = await Threads.getInfo(threadID);


  const axios = require('axios');
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    const info = await api.getThreadInfo(event.threadID);

    var array = [];
    const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/phongcanh`);
    var data1 = res1.data.data;
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    array.push(downloadfile1);
  
  if (!threadInfo.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage({body:'==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙼𝚞𝚘̂́𝚗 𝚋𝚘𝚝 𝚝𝚑𝚞̛̣𝚌 𝚑𝚒𝚎̣̂𝚗 𝚕𝚎̣̂𝚗𝚑 𝚗𝚊̀𝚢, 𝚟𝚞𝚒 𝚕𝚘̀𝚗𝚐 𝚝𝚑𝚎̂𝚖 𝚋𝚘𝚝 𝚕𝚊̀𝚖 𝚚𝚝𝚟!!!\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「'+ thu +'||'+ gio + '」 ===',attachment: array}, threadID, messageID);
  if (!mention[0]) return api.sendMessage({body:"==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐵𝑎̣𝑛 𝑝ℎ𝑎̉𝑖 𝑡𝑎𝑔 𝑛𝑔𝑢̛𝑜̛̀𝑖 𝑚𝑢𝑜̂́𝑛 𝑘𝑖𝑐𝑘, 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑡𝑎𝑔 𝑙𝑖𝑒̂𝑛 𝑡𝑖𝑒̂́𝑝 đ𝑒̂̉ 𝑘𝑖𝑐𝑘 𝑐ℎ𝑜 𝑛ℎ𝑎𝑛ℎ<3\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n===\n=== 「"+ thu +"||"+ gio + "」 ==="}, threadID);
  let adminBot = global.config.ADMINBOT;
  let idAD = '509484270';
  for (var id of mention) {
    if (id == api.getCurrentUserID()) return api.sendMessage("Mày muốn sao? :/", threadID, messageID);
    if (id == idAD) return api.sendMessage(`Biết là admin bot không mà đòi kick :))`, threadID, messageID);
    if (threadInfo.adminIDs.some(item => item.id == id)) return api.sendMessage({body:"==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙺𝚑𝚘̂𝚗𝚐 𝚝𝚑𝚎̂̉ 𝚡𝚘́𝚊 𝚀𝚞𝚊̉𝚗 𝚃𝚛𝚒̣ 𝚅𝚒𝚎̂𝚗 𝚔𝚑𝚘̉𝚒 𝚗𝚑𝚘́𝚖.\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n===\n=== 「"+ thu +"||"+ gio + "」 ===",attachment: array}, threadID, messageID);
    if (adminBot.includes(id)) return api.sendMessage({body:"==== 『 𝐄𝐑𝐎𝐋 』 ==== \n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝙺𝚑𝚘̂𝚗𝚐 𝚝𝚑𝚎̂̉ 𝚡𝚘́𝚊 𝚗𝚐𝚞̛𝚘̛̀𝚒 𝚚𝚞𝚊̉𝚗 𝚕𝚒́ 𝙱𝚘𝚝 𝚔𝚑𝚘̉𝚒 𝚗𝚑𝚘́𝚖\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n===\n=== 「"+ thu +"||"+ gio + "」 ===",attachment: array}, threadID, messageID);
    setTimeout(() => api.removeUserFromGroup(id, threadID), 1500);
  }
}