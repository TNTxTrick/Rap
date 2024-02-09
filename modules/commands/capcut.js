module.exports.config = {
    name: "capcut",
    version: "1.0.0",
    hasPermssion: 0,
    credits: 'ThanhAli',
    description: "Tải video trên capcut",
    commandCategory: "Hệ thống",
    usages: "",
    cooldowns: 0
    }

module.exports.run = async function ({ api, event, args, Users, Currencies, Threads }) {
  try {
const axios = require("axios");
const fs = require("fs-extra");
const {createReadStream, unlinkSync} = require("fs-extra");
const request = require('request');
const path = __dirname + "/cache/capcut.mp4"
const link = args.join(" ");
 if (args[0]) {
    api.sendMessage("Đang tải video, vui lòng đợi...", event.threadID)
let res = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/capcut?ids=${encodeURIComponent(link)}`)
await global.utils.downloadFile(res.data.data.video, path)
   var msg = `Tiêu đề: ${res.data.data.tieude}\nLượt xem: ${res.data.data.luotxem}\nMô tả: ${res.data.data.mota}`
api.sendMessage({body: msg, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    } 
  } catch(e) {
    console.log(e)
      api.sendMessage("Đã xảy ra lỗi, vui lòng thử lại sau", event.threadID)
  }
  }