module.exports.config = {
  name: "gái",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "Xem ảnh",
  commandCategory: "Random-img",
  usages: "",
  cooldowns: 2
};

module.exports.run = async ({ api, event ,Users}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  const girl = require('./../../includes/girl.json');
  var image1 = girl[Math.floor(Math.random() * girl.length)].trim();
  var image2 = girl[Math.floor(Math.random() * girl.length)].trim();

  function downloadAndSendImage(image,fileName,callback){
    request(image).pipe(fs.createWriteStream(__dirname + `/`+fileName)).on("close", callback);
  }

  let callback = function () {
    return api.sendMessage({
      body: '',
      attachment: [fs.createReadStream(__dirname + `/1.png`), fs.createReadStream(__dirname + `/2.png`)]
    }, event.threadID, () => {
      fs.unlinkSync(__dirname + `/1.png`);
      fs.unlinkSync(__dirname + `/2.png`);
    }, event.messageID);
  };

  downloadAndSendImage(image1,'1.png',()=>{
    downloadAndSendImage(image2,'2.png',callback)
  })

}