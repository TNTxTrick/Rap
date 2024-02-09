module.exports.config = {
	name: "boy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh trai",
	commandCategory: "Random-img",
	usages: "boy",
	cooldowns: 2
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://kz-api.ngojchaan.repl.co/trai').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `『 🌸 』 ➜𝐀𝐧𝐡 𝐭𝐫𝐚𝐢 𝐧𝐞̀ 𝐦𝐚̂́𝐲 𝐜𝐨𝐧 𝐪𝐮𝐲̉ 𝐦𝐞̂ 𝐭𝐫𝐚𝐢 𝐜𝐡𝐮́𝐚 😤`,
						attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback);
			})
}