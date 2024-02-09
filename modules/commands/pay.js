module.exports.config = {
  name: "pay",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Chuyển tiền của bản thân cho ai đó",
  commandCategory: "Economy",
  usages: "pay [Tag | Reply] [Coins]",
  cooldowns: 5,
};

module.exports.run = async ({ event, api, Currencies, args, Users }) => {
  let { threadID, messageID, senderID, messageReply, mentions } = event;
  let receiveID;
  let amount;

  if (messageReply) {
    // Trường hợp reply (phản hồi)
    receiveID = messageReply.senderID;
    amount = parseInt(args[0]);
  } else if (Object.keys(mentions).length > 0) {
    // Trường hợp tag
    receiveID = Object.keys(mentions)[0];
    const nameLength = mentions[receiveID].trim().split(/\s+/).length;
    amount = parseInt(args[nameLength]);
  } else {
    // Không có reply hoặc tag
    return api.sendMessage('Bạn phải reply (phản hồi) hoặc tag (@tag) một người để thực hiện chuyển tiền.', threadID, messageID);
  }

  if (isNaN(amount) || amount <= 0) {
    return api.sendMessage(`Số lượng coins phải là một số và lớn hơn 0.`, threadID, messageID);
  }

  const senderBalance = (await Currencies.getData(senderID)).money || 0;
  if (amount > senderBalance) {
    return api.sendMessage(`Số coins bạn muốn chuyển (${amount} coins) lớn hơn số dư của bạn (${senderBalance} coins).`, threadID, messageID);
  }

  await Currencies.decreaseMoney(senderID, amount);
  await Currencies.increaseMoney(receiveID, amount);

  const namePay = await Users.getNameUser(receiveID);
  return api.sendMessage(`Bạn đã chuyển thành công ${amount} coins cho ${namePay}.`, threadID, messageID);
}