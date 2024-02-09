module.exports.config = {
	name: "setprefix",
	version: "2.0.0",
	hasPermssion: 1,
	credits: "Vtuan",
	description: "Đặt lại prefix của nhóm",
	commandCategory: "Nhóm",
	usages: "[prefix/reset]",
	cooldowns: 5
};

module.exports.handleReaction = async function({ api, event, Threads, handleReaction, getText }) {
	try {
		if (event.userID != handleReaction.author) return;
		const { threadID, messageID } = event;
		var data = (await Threads.getData(String(threadID))).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(String(threadID), data);
		api.unsendMessage(handleReaction.messageID);

    api.changeNickname(`『 ${handleReaction.PREFIX} 』 ⪼ ${global.config.BOTNAME}`, event.threadID, event.senderID);
    
		return api.sendMessage({body:`[ 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐍𝐇𝐎́𝐌 ]\n→ Đ𝐚̃ đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: ${handleReaction.PREFIX}`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.chaocacbannhe.repl.co/mong')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
    
	} catch (e) { return console.log(e) }
}

module.exports.run = async ({ api, event, args, Threads }) => {
	if (typeof args[0] == "undefined") return api.sendMessage({body:"====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n𝐁𝐚̣𝐧 𝐩𝐡𝐚̉𝐢 𝐧𝐡𝐚̣̂𝐩 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐚̂̀𝐧 𝐭𝐡𝐚𝐲 đ𝐨̂̉𝐢",attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.chaocacbannhe.repl.co/mong')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
  
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage({body:"====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n→ 𝐁𝐚̣𝐧 𝐩𝐡𝐚̉𝐢 𝐧𝐡𝐚̣̂𝐩 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐚̂̀𝐧 𝐭𝐡𝐚𝐲 đ𝐨̂̉𝐢", attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.chaocacbannhe.repl.co/mong')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
  
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
		await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(String(event.threadID), data);
		return api.sendMessage({body:`====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n→ Đ𝐚̃ 𝐫𝐞𝐬𝐞𝐭 𝐩𝐫𝐞𝐟𝐢𝐱 𝐭𝐡𝐚̀𝐧𝐡: ${global.config.PREFIX}`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.chaocacbannhe.repl.co/mong')).data.data,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
    
	} else return api.sendMessage({body:`====『𝐃𝐀̂́𝐔 𝐋𝐄̣̂𝐍𝐇』====\n→ 𝐁𝐚̣𝐧 𝐜𝐨́ 𝐜𝐡𝐚̆́𝐜 𝐦𝐮𝐨̂́𝐧 đ𝐨̂̉𝐢 𝐩𝐫𝐞𝐟𝐢𝐱 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦 𝐭𝐡𝐚̀𝐧𝐡: ${prefix}\n→ 𝐓𝐡𝐚̉ 𝐜𝐚̉𝐦 𝐱𝐮́𝐜 𝐛𝐚̂́𝐭 𝐤𝐢̀ 𝐯𝐚̀𝐨 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 đ𝐞̂̉ 𝐱𝐚́𝐜 𝐧𝐡𝐚̣̂𝐧`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-anh.chaocacbannhe.repl.co/mong')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: this.config.name,
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
                          }
 
                    
                          