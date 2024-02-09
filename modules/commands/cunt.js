module.exports.config = {
	name: "cunt",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Vtuan",
	description: "Random ảnh",
	commandCategory: "Random-img",
	usages: "",
	cooldowns: 2
};
module.exports.run = async ({ api, event ,Users}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
    var array = [];
    const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/lon`);
    const res2 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/lon`);
    var data1 = res1.data.data;
    var data2 = res2.data.data; 
    var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
    var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
    array.push(downloadfile1);
    array.push(downloadfile2);    
    
  
					api.sendMessage({
						body: ``,
						attachment: array}, event.threadID, event.messageID);
				
			
}