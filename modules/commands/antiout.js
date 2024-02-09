module.exports.config = {
    name: "antiout",
    version: "1.0.0",
    credits: "DungUwU",
    hasPermssion: 1,
    description: "Bật tắt antiout",
    usages: "antiout on/off",
    commandCategory: "Quản Lí Box",
    cooldowns: 0
};
module.exports.run = async({ api, event, Threads, Users}) => {
    const axios = require('axios');
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    let name = await Users.getNameUser(event.senderID);
    var array = [];
  const res1 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/anime`);
  const res2 = await axios.get(`https://api-anh.chaocacbannhe.repl.co/anime`);  
  var data1 = res1.data.data;
  var data2 = res2.data.data; 
  var downloadfile1 = (await axios.get(data1, {responseType: 'stream'})).data;
  var downloadfile2 = (await axios.get(data2, {responseType: 'stream'})).data;
  array.push(downloadfile1);
  array.push(downloadfile2);    
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage({body:`=== 『 𝐒𝐮𝐜𝐜𝐞𝐬𝐬 』 ===\n▱▱▱▱▱▱▱▱▱▱▱▱▱\nNhận lệnh ${(data["antiout"] == true) ? "bật" : "tắt"} chức năng chống thành viên out chùa từ ${name} thành công\n▱▱▱▱▱▱▱▱▱▱▱▱▱\n=== 「`+ thu +` || `+ gio + `」 ===`,attachment: array} , event.threadID);

}