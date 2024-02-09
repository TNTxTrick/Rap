module.exports.config = {
	name: "vdgai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Vtuan",
	description: "Xem ảnh dú",
	commandCategory: "Random-img",
	usages: "",
	cooldowns: 2
};
module.exports.run = async ({ api, event ,Users}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var array = [];
    const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/videogai`);
    var data1 = res1.data.data; 
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    array.push(downloadfile1); 
					api.sendMessage({
						body: `Gái của bbi đây:3`,
						attachment: array}, event.threadID, event.messageID);
				
			
}