const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const express = require('express');
const path = require('path');
const chalk = require('chalkercli');
const chalk1 = require('chalk');
const CFonts = require('cfonts');
const app = express();
const port = process.env.PORT || 2006;
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(port);
console.log('𝑀𝑎́𝑦 𝑐ℎ𝑢̉ 𝑏𝑎̆́𝑡 đ𝑎̂̀𝑢 𝑡𝑎̣𝑖 http://localhost:' + port,"𝑉𝑎̀𝑜 𝑙𝑢́𝑐:" + gio,"\n\n");


function startBot(message) {
    (message) ? logger(message, "BOT STARTING") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

   child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("BOT RESTARTING!!!");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Bot has been activated please wait a moment!!!");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {})
setTimeout(async function () {
console.log(`┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n`)
CFonts.say(`Bot Messenger Created By Vtuan`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
    })
console.log(`\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`)
  startBot()
}, 70)