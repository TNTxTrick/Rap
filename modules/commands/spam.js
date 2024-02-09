module.exports.config = {
  name: "spam",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Vtuan", // tôn trọng nhau tí đê, hở tí là thay cre edit thay cc
  description: "spam đến chết 1 nội dung",
  commandCategory: "War",
  usages: "",
  cooldowns: 1,
}

module.exports.run = async function ({ api, event, args }) { 
  const { sendMessage: tdung } = api;
  const { threadID, messageID, senderID } = event;
  var timedelay = 2 //thời gian gửi 1 tin nhắn
  let slsp= 10000000000000000000000000000 /// số lần spam
  var nd = (args.length != 0) ? args.join(" ") : "tddzs1tg06",mentions = [], index = 0;
  for(let i = 1; i < slsp; i++){
    tdung(`${nd}`, threadID)
      await new Promise(resolve => setTimeout(resolve, timedelay * 1000))
  } 
} 







