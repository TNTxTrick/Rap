const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopvu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MAVERICK",
  description: "Bóp vú người bạn tag",
  commandCategory: "Tạo ảnh",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.postimg.cc/tC2BTrmF/3.gif",
"https://i.postimg.cc/pLrqnDg4/78d07b6be53bea612b6891724c1a23660102a7c4.gif",
"https://i.postimg.cc/gJFD51nb/detail.gif",
"https://i.postimg.cc/xjPRxxQB/GiC86RK.gif",
"https://i.postimg.cc/L8J3smPM/tumblr-myzq44-Hv7-G1rat3p6o1-500.gif",
   ];
  
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗔𝗻𝗵 𝗕𝗼́𝗽 vú 𝗦𝘂̛𝗼̛́𝗻𝗴 𝗖𝗵𝘂̛𝗮 𝗘𝗺 🍑`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bopmong.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bopmong.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bopmong.gif")).on("close",() => callback());
   }