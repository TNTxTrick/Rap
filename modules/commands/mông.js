module.exports.config = {
	name: "mông",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Vtuan",
	description: "Xem ảnh 18+",
	commandCategory: "Random-img",
	usages: "",
	cooldowns: 2
};
module.exports.run = async ({ api, event ,Users}) => {
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗡𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗛𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝗧𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗡𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗕𝗮̉𝘆'
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
  let name = await Users.getNameUser(event.senderID);
	axios.get('https://api-anh.chaocacbannhe.repl.co/mong').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `🌸𝗧𝗶𝗺𝗲: ${gio}\n◆━━━◆\n◆━━━◆  『 𝐌𝐚𝐫𝐢𝐬 🌸 』  ◆━━━◆\n\n『 🌸 』 ➜『 𝑀𝑜̂𝑛𝑔 𝑐𝑢̉𝑎 ${name} đ𝑎̂𝑦, 𝑑𝑎̂𝑚 𝑣𝑐𝑙 』\n『 🌸 』 ➜𝐗𝐞𝐦 𝐱𝐨𝐧𝐠 𝘁𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 " 😠 " 𝐯𝐚̀𝐨 𝐚̉𝐧𝐡 𝐧𝐮𝐝𝐞 đ𝐞̂̉ 𝐠𝐨̛̃ 𝐚̉𝐧𝐡 𝐝𝐮̀𝐦 𝐚𝐝𝐦𝐢𝐧,𝐚𝐝𝐦𝐢𝐧 𝐜𝐚̉𝐦 𝐨̛𝐧=))  \n━━━━━━━━━━━━━\n\n『 🌱 』 ➜𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}`,
						attachment: fs.createReadStream(__dirname + `/cache/mong.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/mong.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/mong.${ext}`)).on("close", callback);
			})
}