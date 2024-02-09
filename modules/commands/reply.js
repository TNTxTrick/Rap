var traloi1 = [
  'Có tôi đây, bạn cần giúp gì?',
  'Tôi đang lắng nghe!',
  'Chào bạn, bạn cần tôi giúp gì?',
  'Rất vui khi được gọi, bạn cần gì?'
  //trả lời bằng tag bằng cái gì thì tùy thuộc vào bạn
];

var traloi2 = [
  'Cảm ơn bạn đã gửi tin nhắn',
  'Rất vui khi nhận được tin nhắn của bạn',
  'Chào bạn, bạn cần tôi giúp gì',
  'Cảm ơn bạn đã liên hệ, tôi sẽ phản hồi sớm nhất có thể'
  //trả lời bằng reply bằng cái gì thì tùy thuộc vào bạn
];

var traloi3 = [
  'abc',
  'xyz'
  //trả lời bằng reply bằng cái gì thì tùy thuộc vào bạn
];

var phrases = [
  'hello bot',
  'hi bot',
  'hey bot'
  // nội dung đầu vào bằng cái gì thì tùy thuộc vào bạn
];

var phrases1 = [
  'jqk'
  //nếu nội dung đầu vào bằng cái gì thì tùy thuộc vào bạn
];
// đã phân làm 5 khu. trong đó traloi1 để trả lời cái tag,traloi2 để trả lời cái reply tin nhắn bot, trả lời 3 là tùy thuộc vào độ sáng tạo của bạn . phrases và phrases1 là nội dung nhận dạng tin nhắn. nếu nội dung tin nhắn trùng 1 trong các cái trên thì sẽ trả ra cái traloi3 or traloi2
//đừng thắc mắc tại sao lại có cái phrases1 =))
// tùy thuộc vào sự sáng tạo của bạn!
function checkForSpecificPhrases(message, phrases) {
  for (let phrase of phrases) {
    if (message.toLowerCase().includes(phrase)) {
      return true; 
    }
  }
  return false;
}

function tagg() {
  var index = Math.floor(Math.random() * traloi1.length);
  return traloi1[index];
}

function replyy() {
  var index = Math.floor(Math.random() * traloi2.length);
  return traloi2[index];
}

function replyy3() {
  var index = Math.floor(Math.random() * traloi3.length);
  return traloi3[index];
}

const fs = require('fs');
const path = './commandStatus.json';

module.exports.config = {
  name: "gotbot",
  version: "4.0.0",
  hasPermssion: 3,
  credits: "Vtuan",//thay cre edit t đút cu vào họng
  description: "Cấu hình câu trả lời tự động",
  commandCategory: "Hệ Thống",
  usages: "[on/off]",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event }) {
  if (event.senderID == api.getCurrentUserID()) return;
  const cmdStatus = JSON.parse(fs.readFileSync(path));
  const mentionedUserIds = Object.keys(event.mentions);
  const isBotMentioned = mentionedUserIds.includes(String(api.getCurrentUserID()));
  const isBotReplied = event.messageReply && event.messageReply.senderID == api.getCurrentUserID();
  const isSpecificPhrase = checkForSpecificPhrases(event.body, phrases);
  const isSpecificPhrase1 = checkForSpecificPhrases(event.body, phrases1);

  if(cmdStatus[this.config.name]) {
    if(isBotMentioned || isSpecificPhrase) {
      api.sendMessage(tagg(), event.threadID, event.messageID);
    }
    if(isSpecificPhrase1) {
      api.sendMessage(replyy3(), event.threadID, event.messageID);
    }
    if(isBotReplied) {
      api.sendMessage(replyy(), event.threadID, event.messageID);
    }
  }
};

module.exports.run = async function ({api, event, args}) {
  if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
  const commandStatus = JSON.parse(fs.readFileSync(path, 'utf-8'));
  switch (args[0]) {
    case "on":
      commandStatus[this.config.name] = true;
      api.sendMessage("Đã bật chức năng!", event.threadID);
      break;
    case "off":
      commandStatus[this.config.name] = false;
      api.sendMessage("Đã tắt chức năng!", event.threadID);
      break;
    default:
      api.sendMessage("Bạn cần thêm 'on' hoặc 'off' sau lệnh.", event.threadID, event.messageID);
  }
  fs.writeFileSync(path, JSON.stringify(commandStatus, null, 2));
};
