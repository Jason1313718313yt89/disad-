const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));

exports.run = async (bot, message, args) => {
    const cookies = require("cookiesdb")
  const moment = require('moment')
    require('moment-duration-format')
        const ms = require("parse-ms")
         let cooldown = 8.64e+7
  
  const user = message.mentions.users.first() || bot.users.get(args[0])
     cookies.fetchCookies(`lastRep1_${message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`Command Ratelimited! \n *Available in ${timeObj.hours}h ${timeObj.seconds}h ${timeObj.seconds}s* `)   .then(message => {
                message.delete(8000);
            })

        }else{
           if (!user) {
        message.channel.send('Please Mention a user to rep\n*Your rep is available!*')
            .then(message => {
                message.delete(15000);
            })
        return;
    };
  
if (message.author.id === user.id) {
        message.channel.send('You Cannont Rep Yourself!\n*Your rep is available!*')
            .then(message => {
                message.delete(15000);
            })
        return;
  };

  
   

  
  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
 


  warns[user.id].warns++;

  fs.writeFile("./rep.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });


message.channel.send(`Success You have repped <@${user.id}>, come back in 24hrs to giveaway another rep!`)
                             cookies.updateText(`lastRep1_${message.author.id}`, Date.now()).then(() => {

                             })
        }
    })
}
exports.config = {
    command: 'rep',
    aliases: ['reputation'],
    plevel: "User",
    description: "Rep a user",
    usage: "rep",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};