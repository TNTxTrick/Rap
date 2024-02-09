const fs = require("fs");
const path = __dirname + "/cache/imagebox.json";
const axios = require('axios');

module.exports.config = {
  name: "antimagebox",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Your name",
  description: "Cấm đổi ảnh nhóm khi bật",
  commandCategory: "group",
  usages: "",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  let data = (fs.existsSync(path)) ? JSON.parse(fs.readFileSync(path)) : {};
  const { threadID, messageID } = event;
  const threadData = await api.getThreadInfo(threadID);

  if (!data[threadID] || !data[threadID].status) {
    data[threadID] = {
      imageURL: threadData.imageSrc,
      status: true
    };
  } else {
    data[threadID].status = !data[threadID].status;
  }

  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  api.sendMessage(`Đã ${data[threadID].status ? "bật" : "tắt"} chế độ cấm đổi ảnh box`, threadID, messageID);
};

module.exports.handleEvent = ({ api, event }) => {
  let data = (fs.existsSync(path)) ? JSON.parse(fs.readFileSync(path)) : {};

  const { threadID } = event;
  if (!data[threadID] || !data[threadID].status) return;

  api.getThreadInfo(threadID, (err, info) => {
    if (err) throw err;

    if (info.imageSrc !== data[threadID].imageURL) {

      // Replace the API call with appropriate function once implemented in the active API
      // Here api.changeGroupImage doesn't exist in fbkt
      api.changeGroupImage(
        data[threadID].imageURL,
        threadID, () => {
          api.sendMessage(
            "Hiện tại đang cấm đổi ảnh nhóm, đã hoàn tác hình ảnh", threadID);
        }
      );
    }
  });
};