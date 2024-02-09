module.exports.config = {
  name: "list",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Vtuan",
  description: "lặp lại nội dung",
  commandCategory: "Hệ thống",
  usages: "HDSD: !list + số lần|nội dung",
  cooldowns: 1,
}

module.exports.run = async function ({ api, event, args }) { 
  const { sendMessage: tdung } = api;
  const { threadID, messageID } = event;
  if(args.length == 0) {
    return tdung(`${this.config.usages}`, threadID);
  }

  let [ count, message ] = args.join(' ').split('|');

  let sltn = parseInt(count);
  let ndd = '';

  for(let a = 1; a <= sltn; a++) {
    ndd += a + '. ' + message.trim() + '\n';
  }

  tdung(`${ndd}`, threadID);
}