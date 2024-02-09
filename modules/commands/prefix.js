module.exports.config = {
  name: "prefix",	
  version: "3.0.0", 
  hasPermssion: 0,
  credits: "Vtuan",
  description: "sos", 
  commandCategory: "Hệ Thống",
  usages: "¹",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads }) {
  const axios = require("axios")
  const picture = (await axios.get(`https://imgur.com/m4ruygS.jpg`, { responseType: "stream"})).data
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY")
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  var { threadID, messageID, body } = event,{ PREFIX } = global.config;
  let threadSetting = global.data.threadData.get(threadID) || {};
  let prefix = threadSetting.PREFIX || PREFIX;
  const icon = [""];
  if (body.toLowerCase() == "Prefix" || (body.toLowerCase() == "prefix")) {
       api.sendMessage({body: `====『 𝗣𝗥𝗘𝗙𝗜𝗫 』====\n━━━━━━━━━━━━━━\n𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗯𝗼𝘅\n${(await Threads.getInfo(threadID)).threadName || "Unknow"} 𝗹𝗮̀: ${prefix}\n→ 𝗣𝗿𝗲𝗳𝗶𝘅 𝗰𝘂̉𝗮 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗹𝗮̀: ${global.config.PREFIX}\n→ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${client.commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n『 ${global.config.ICON} 』→ 𝑇ℎ𝑎̉ ❤️ đ𝑒̂̉ 𝑥𝑒𝑚 𝑐𝑎́𝑐 𝑙𝑒̣̂𝑛ℎ 𝑡ℎ𝑢̛𝑜̛̀𝑛𝑔 𝑑𝑢̀𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡\n━━━━━━━━━━━━━━\n『 ${global.config.ICON} 』➜ 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐥𝐚̀: ${gio} 𝐧𝐠𝐚̀𝐲: ${thu} || ${ngay}`, attachment: (await axios.get((await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`)).data.data, {
                    responseType: 'stream'
                })).data}, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }

module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
  const time = process.uptime(),
    h = Math.floor(time / (60 * 60)),
    p = Math.floor((time % (60 * 60)) / 60),
    s = Math.floor(time % 60);
  const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `『 ${global.config.ICON} 』=== 『 𝐂𝐀́𝐂 𝐋𝐄̣̂𝐍𝐇 𝐓𝐇𝐔̛𝐎̛̀𝐍𝐆 𝐃𝐔̀𝐍𝐆 』 ===『 ${global.config.ICON} 』
◆━━━━━━━━━━━━━━◆
${global.config.PREFIX}𝐡𝐞𝐥𝐩 => 𝐗𝐞𝐦 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡 𝐜𝐚́𝐜 𝐥𝐞̣̂𝐧𝐡 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐦𝐞𝐧𝐮 => 𝐗𝐞𝐦 𝐜𝐚́𝐜 𝐦𝐞𝐧𝐮 đ𝐚̃ 𝐩𝐡𝐚̂𝐧 𝐜𝐡𝐢𝐚 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐭𝐭 => 𝐗𝐞𝐦 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 
${global.config.PREFIX}𝐜𝐡𝐞𝐜𝐤𝐫𝐚𝐧𝐤 => 𝐗𝐞𝐦 𝐜𝐡𝐢̉ 𝐬𝐨̂́ 𝐱𝐞̂́𝐩 𝐡𝐚̣𝐧𝐠 𝐫𝐚𝐧𝐤 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜
${global.config.PREFIX}𝐛𝐨𝐱 𝐢𝐧𝐟𝐨 => Đ𝐞̂̉ 𝐱𝐞𝐦 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐯𝐞̂̀ 𝐛𝐨𝐱
${global.config.PREFIX}𝐥𝐨̣𝐜 => 𝐋𝐨̣𝐜 𝐜𝐚́𝐜 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 = 𝟎 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧
${global.config.PREFIX}𝐠𝐡𝐞́𝐩 => 𝐆𝐡𝐞́𝐩 đ𝐨̂𝐢 𝐯𝐨̛́𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐧𝐠𝐚̂̃𝐮 𝐧𝐡𝐢𝐞̂𝐧
${global.config.PREFIX}𝐬𝐞𝐭𝐧𝐚𝐦𝐞 => 𝐓𝐡𝐚𝐲 đ𝐨̂̉𝐢 𝐛𝐢𝐞̣̂𝐭 𝐝𝐚𝐧𝐡 𝐜𝐮̉𝐚 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧
${global.config.PREFIX}𝐢𝐦𝐠𝐮𝐫 => 𝐋𝐚̂́𝐲 𝐥𝐢𝐧𝐤 𝐚̉𝐧𝐡 𝐢𝐦𝐠𝐮𝐫
${global.config.PREFIX}𝐬𝐢𝐧𝐠 => 𝐍𝐠𝐡𝐞 𝐧𝐡𝐚̣𝐜 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐭𝐫𝐞̂𝐧 𝐛𝐨𝐭
[🎀]➜ 𝗟𝘂̛𝘂 𝘆́ 𝗽𝗵𝗮̉𝗶 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 
━━━━━━━━━━━━━━━
===『 ĐIỀU HÀNH BỞI Vtuan 』===`
        return api.sendMessage({body: msg, attachment: (await axios.get((await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`)).data.data,  {
                    responseType: 'stream'
                })).data},event.threadID); 
}

