const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Vtuan",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "Hệ Thống",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {

  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
    if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
    if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
    if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
    if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
    if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
    if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
    
  const a = process.uptime();
  var b = Math.floor(a / (60 * 60));
  var c = Math.floor((a % (60 * 60)) / 60);
  var d = Math.floor(a % 60);  
    const axios = require('axios')
    
    var array = [];
  const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/anime`);
  const res2 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/anime`);  
  var data1 = res1.data.data;
  var data2 = res2.data.data; 
  var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
  var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
  array.push(downloadfile1);
  array.push(downloadfile2);    
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = '𝐶ℎ𝑢̉ 𝑁ℎ𝑎̣̂𝑡'
    if (thu == 'Monday') thu = '𝑇ℎ𝑢̛́ 𝐻𝑎𝑖 '
    if (thu == 'Tuesday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎'
    if (thu == 'Wednesday') thu = '𝑇ℎ𝑢̛́ 𝑇𝑢̛'
    if (thu == "Thursday") thu = '𝑇ℎ𝑢̛́ 𝑁𝑎̆𝑚'
    if (thu == 'Friday') thu = '𝑇ℎ𝑢̛́ 𝑆𝑎́𝑢'
    if (thu == 'Saturday') thu = '𝑇ℎ𝑢̛́ 𝐵𝑎̉𝑦'
    
  
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage({body:`『 ${global.config.ICON} 』====『 𝐀𝐔𝐓𝐎𝐒𝐄𝐄𝐍 』====『 ${global.config.ICON} 』\n◆━━━━━━━━━━━━━◆\n𝐇𝐞̣̂ 𝐭𝐡𝐨̂́𝐧𝐠 Đ𝐚̃ 𝐛𝐚̣̂𝐭 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐭𝐮̛̣ đ𝐨̣̂𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜𝐨́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐦𝐨̛́𝐢\n${global.config.BOTNAME} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${b} 𝐆𝐢𝐨̛̀ ${c} 𝐏𝐡𝐮́𝐭 ${d} 𝐆𝐢𝐚̂𝐲\n${thu}\n『 ${gio} 』\n━━━━━━━━━━━━━━━━━━\n`,attachment: array}, event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage({body:`『 ${global.config.ICON} 』====『 𝐀𝐔𝐓𝐎𝐒𝐄𝐄𝐍 』====『 ${global.config.ICON} 』\n◆━━━━━━━━━━━━━◆\nĐã 𝐭ắ𝐭 𝐜𝐡ế độ 𝐭ự độ𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜ó 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐦ớ𝐢\n${global.config.BOTNAME} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${b} 𝐆𝐢𝐨̛̀ ${c} 𝐏𝐡𝐮́𝐭 ${d} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: array}, event.threadID, event.messageID);
	}
	else {
	  return api.sendMessage({body:`『 ${global.config.ICON} 』====『 𝐇𝐃𝐒𝐃 』====『 ${global.config.ICON} 』\n◆━━━━━━━━━━━━━◆\n𝐁ạ𝐧 𝐜ó 𝐭𝐡ể 𝐝ù𝐧𝐠 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐨𝐧 𝐡𝐨ặ𝐜 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐨𝐟𝐟\n${global.config.BOTNAME} đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${b} 𝐆𝐢𝐨̛̀ ${c} 𝐏𝐡𝐮́𝐭 ${d} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]\n━━━━━━━━━━━━━━━━━━\n`,attachment: array}, event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};