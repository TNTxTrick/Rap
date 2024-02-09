module.exports.config = {
  name: "boximg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Vtuan",
  description: "Đổi ảnh nhóm",
  commandCategory: "Nhóm",
  usages: "",
  cooldowns: 5,
  dependencies: {

  }
};

module.exports.run = async function({api, event, args, Users, Threads}) {
  const { threadID, messageID, senderID, type, mentions, messageReply } = event;
  if (event.type !== "message_reply") return api.sendMessage("『 "+ global.config.ICON +"  』 ➜ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
  if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("『 "+ global.config.ICON +"  』 ➜ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
  if (event.messageReply.attachments.length > 1) return api.sendMessage(`『 `+ global.config.ICON +` 』 ➜ Bạn phải reply một audio, video, ảnh nào đó`, event.threadID, event.messageID);
  var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  
};