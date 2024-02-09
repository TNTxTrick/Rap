module.exports.config = {
	name: "\n",
	version: "2.0.5",
	hasPermssion: 0,
	credits: "Vtuan",
	description: "sailenh",
	commandCategory: "Hệ Thống",
	usages: "Công cụ",
	cooldowns: 0
};

module.exports.run = async ({ api, models, Users, Threads, Currencies, event }) => {
    const axios = require('axios');
    const request = require('request');
    const fs = require("fs");
    const moment = require("moment-timezone");
    const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    const timeStart = Date.now();
    var { threadID, messageID, body } = event,{ PREFIX } = global.config;
    let threadSetting = global.data.threadData.get(threadID) || {};
    let prefix = threadSetting.PREFIX || PREFIX;  
    const res1 = await axios.get(`https://webapi.chaocacbannhe.repl.co/gura`); 
    const res2 = await axios.get(`https://webapi.chaocacbannhe.repl.co/gura`); 
    var array = [];
    array.push((await axios.get(res1.data.data, {responseType: 'stream'})).data);
    array.push((await axios.get(res2.data.data, {responseType: 'stream'})).data);
  			api.sendMessage({
                        body: `====『 ${global.config.BOTNAME} 』====\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n『 ${gio} 』\n➜𝑇𝑖𝑚𝑒 𝑜𝑛𝑙: ${hours} : ${minutes} : ${seconds}\n➜𝑃𝑟𝑒𝑓𝑖𝑥: ${global.config.PREFIX}\n➜𝑃𝑖𝑛𝑔: ${Date.now() - timeStart}ms\n➜𝐵𝑜𝑡 𝑐𝑜́: ${client.commands.size} 𝑙𝑒̣̂𝑛ℎ\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n𝐿𝑒̣̂𝑛ℎ 𝑏𝑎̣𝑛 đ𝑎𝑛𝑔 𝑑𝑢̀𝑛𝑔 𝑐𝑜́ 𝑝ℎ𝑎̉𝑖 𝑙𝑒̣̂𝑛ℎ 2fa ℎ𝑎𝑦 𝑘ℎ𝑜̂𝑛𝑔?`, attachment: array},event.threadID,event.messageID);
}

