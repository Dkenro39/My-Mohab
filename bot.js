const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {

 client.user.setActivity("سبام كل يوم 350 آلف كريديت",{type: 'PLAYING'});
    
 console.log(`Logged in as [ Pharaohs]`);

});









client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('**وعليكم السلام ولكم يلبي 🌚.**');

  }

});








client.on('message', msg => {

  if (msg.content === 'برب') {

    msg.reply('**طيط يلبي آتمني متيجي تآني نقط وتعرف السبب. 💃**');

  }

});












client.on('message', msg => {

  if (msg.content === '.') {

    msg.reply('**لانك حمآر ليش تنقط. 😂**');

  }

});










client.on('message', msg => {

  if (msg.content === 'مهاب') {

    msg.reply('**وش تبي مني كلزق ومشي انقلع. 🗿**');

  }

});









client.login(process.env.BOT_TOKEN);
