const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {


     
});
  console.log(`Logged in as ${client.user.tag}!`);


 
});

 








 

 client.on('message', msg => {

  if (msg.content === 'مهاب') {

    msg.reply('**وش تبي منبي يزق 🗿**');

  }

});

 

 

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('**وعليكم السلام ولكم يلبي 🌚.**');

  }

});

 


client.on('message', msg => {

  if (msg.content === 'برب') {

    msg.reply('**طيط ولاترجع يلبي.💃**');

  }

});






client.on('message', msg => {

  if (msg.content === 'ضحكني') {

    msg.reply('    **ضحكني للنكت التحشيشة \n\n\n نكت سعودية الضغط عل رقم ❴ 1 ❵ \n\n نكت مصرية الضغط عل رقم ❴ 2 ❵ \n\n نكت محششين الضغط عل رقم ❴ 3 ❵ \n\n نكت متزوجين الضغط عل رقم ❴ 4 ❵ \n\nنكت تحشيشة الضغط عل رقم ❴ 5 ❵ \n\n\n\n جميع الحقوق محفوظة لدي \``@ᎷᏫᎻᎯᏰ 🕊 …#1010\``**');

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













client.on('message', msg => {

  if (msg.content === '2') {

    msg.reply('**           مره صرصار طلع من الخلاط قال يخرب بيت إللى يدخل الملاهى تانى       **      \n\n\n للمزيد الرجآء كتابه الآتي \``تاني 2\`` ');

  }

});














client.on('message', msg => {

  if (msg.content === 'تاني 2') {

    msg.reply('**           واحد سباك نفسه اتسدت غرقت الشقة           ** ');

  }

});




















client.on('message', msg => {

  if (msg.content === '3') {

    msg.reply('**              محشش قالو له ايه رأيك في الزواج المبكر قال يعني الساعة كام .**           \n\n\n  للمزيد الرجآء كتابه الآتي \``تاني 3\``');

  }

});




















client.on('message', msg => {

  if (msg.content === 'تاني 3') {

    msg.reply('**              سأل أعرابي أبو لهب ماسبب تسميتك بهذا الإسم ؟؟ فأبتسم أبو لهب وأخرج من جيبه ولاعه                 **');

  }

});























client.on('message', msg => {

  if (msg.content === '4') {

    msg.reply('**                 بنت تسأل حبيبها المحشش ...؟؟ بتضل تحبنى حتى بعد الجواز ؟؟؟ قالها: لو جوزك ما عندو مانع	 \n\n\n للمزيد الرجآء كتابه الآتي \``تاني 4\``               **');

  }

});




















client.on('message', msg => {

  if (msg.content === 'تاني 4') {

    msg.reply('**                            ‫دكتور بيطري اتزوج دكتورة بيطرية زفوهم كلاب الشوارع‬	                       **');

  }

});
















client.on('message', msg => {

  if (msg.content === '5') {

    msg.reply('**                    في دجاجه تبغى تنتحر كتبت في وصيتها خلي ماجي ينفعكم  \n\n\n للمزيد الرجآء كتابه الآتي \``تاني 5\``                      **');

  }

});














client.on('message', msg => {

  if (msg.content === 'تاني 5') {

    msg.reply('**              في بنت حرقت بيتهم ليش؟ صديقها يشتغل في المطافي               **');

  }

});

client.login(process.env.BOT_TOKEN);

