module.exports.config = {
  name: "alime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "",
  commandCategory: "Random-img",
  usages: "alime + args",
  cooldowns: 2,
 
};
module.exports.run = async({api, event, args}) => {
	const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  
	if (args[0] == "waifu") {
		axios.get('https://api.waifu.pics/sfw/waifu').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/waifu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/waifu.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/waifu.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "neko") {
		axios.get('https://api.waifu.pics/sfw/neko').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/waifu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/waifu.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/waifu.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "shinobu") {
		axios.get('https://api.waifu.pics/sfw/shinobu').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/shinobu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/shinobu.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/shinobu.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "megumin") {
		axios.get('https://api.waifu.pics/sfw/megumin').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/megumin.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/megumin.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/megumin.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "bully") {
		axios.get('https://api.waifu.pics/sfw/bully').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/bully.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/bully.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/bully.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "cuddle") {
		axios.get('https://api.waifu.pics/sfw/cuddle').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/cuddle.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/cuddle.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/cuddle.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "cry") {
		axios.get('https://api.waifu.pics/sfw/cry').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/cry.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/cry.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/cry.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "hug") {
		axios.get('https://api.waifu.pics/sfw/hug').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/hug.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/hug.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/hug.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "awoo") {
		axios.get('https://api.waifu.pics/sfw/awoo').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/awoo.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/awoo.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/awoo.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "smile") {
		axios.get('https://api.waifu.pics/sfw/smile').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/smile.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/smile.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/smile.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "wfnsfw") {
		axios.get('https://api.waifu.pics/nsfw/ảnh/waifu').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/waifu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/waifu.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/waifu.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "nekonsfw") {
		axios.get('https://api.waifu.pics/nsfw/neko').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/nsfw.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/nsfw.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/nsfw.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "trapnsfw") {
		axios.get('https://api.waifu.pics/nsfw/trap').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/nsfw.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/nsfw.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/nsfw.${ext}`)).on("close", callback);
      })
}
else if (args[0] == "blowjobnsfw") {
		axios.get('https://api.waifu.pics/nsfw/blowjob').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);

  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/ảnh/nsfw.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ảnh/nsfw.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/ảnh/nsfw.${ext}`)).on("close", callback);
      })
}
else if (args.join() == "") { return api.sendMessage({
    body: `===『 𝑇𝑎̂́𝑡 𝑐𝑎̉ 𝑎𝑙𝑖𝑚𝑒 』===\n━━━━━━━━━━━━━━━━\n➜ 𝐵𝑎̣𝑛 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑑𝑢̀𝑛𝑔:\n➜ ${global.config.PREFIX}${this.config.name} waifu\n ➜ ${global.config.PREFIX}${this.config.name} neko\n➜ ${global.config.PREFIX}${this.config.name} shinobu\n ➜ ${global.config.PREFIX}${this.config.name} megumin\n ➜ ${global.config.PREFIX}${this.config.name} bully\n➜ ${global.config.PREFIX}${this.config.name} cuddle\n➜ ${global.config.PREFIX}${this.config.name} cry\n ➜ ${global.config.PREFIX}${this.config.name} hug\n『 ➜ ${global.config.PREFIX}${this.config.name} awoo\n ➜ ${global.config.PREFIX}${this.config.name} smile\n➜ ${global.config.PREFIX}${this.config.name} wfnsfw\n➜ ${global.config.PREFIX}${this.config.name} nekonsfw\n➜ ${global.config.PREFIX}${this.config.name} trapnsfw\n➜${global.config.PREFIX}${this.config.name} blowjobnsfw`, attachment: (await axios.get((await axios.get(`https://api-anh.chaocacbannhe.repl.co/gaicute`)).data.data, {
                    responseType: 'stream'
                })).data
}, event.threadID);
  }
}