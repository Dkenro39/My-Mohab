const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`I 'Love You mosalah.  💘`,'https://www.twitch.tv/MeeRcY')

});

 

 

 

 

 

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('وعليكم السلام ولكم يلبي 🌚.');

  }

});

 






client.on('message', msg => {

  if (msg.content === 'ضحكني') {

    msg.reply('    **ضحكني للنكت التحشيشة \n\n\n نكت سعودية الضغط عل رقم [ 1 ] \n\n نكت مصرية الضغط عل رقم [ 2 ] \n\n نكت محششين الضغط عل رقم [ 3 ] \n\n نكت متزوجين الضغط عل رقم [ 4 ] \n\nنكت تحشيشة الضغط عل رقم [ 5 ] \n\n\n\n جميع الحقوق محفوظة لدي @ᎷᏫᎻᎯᏰ 🕊 …#1010**');

  }

});













 

 

 

 

client.on('message', msg => {

  if (msg.content === '1') {

    msg.reply('**                            وحده غبيه آتصلت بالخطوط قالت كم تستغرق رحله الريآض بانكوك قال لها لحظه ... قالت شكرا                     \n\n\n للمزيد الرجاء كتآبه الآتي \``تاني 1\``  **');
  }

});











client.on('message', msg => {

  if (msg.content === 'تاني 1') {

    msg.reply('             **قولك في محشش سأل محشش ثاني قاله تخيل نفسك تقوم من النوم و تلقى نفسك ميت قال والله لانتحر.         **');

  }

});



client.login(process.env.BOT_TOKEN);

