exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const moment = require('moment');
   const ms = require('parse-ms')
  var p = require('../storages/p.json');
    const config = require('../storages/config.json');
const db = require("quick.db")
let servers = config.servers
let s =  servers.length;
  if(message.guild.id !== '476143756064587776' && message.guild.id !== "381939115458822147") return message.channel.send(`Access Denied: Premium is not found on this server!`)

   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
        }
   
    
  
const fs = require("fs")            
                       const { Discord , RichEmbed} = require("discord.js")
  
       
  let warns = JSON.parse(fs.readFileSync("./register.json", "utf8"));
        

  
  if(!warns[message.author.id]) warns[message.author.id] = {
    warns: 0
  };
             if( warns[message.author.id].warns == 0){
      var embed = new RichEmbed()
           .setColor('RANDOM')
           .setDescription(`You are not registered yet please register before using any economy commands!\nUsage: \`${prefix}register\`!`)
                  message.channel.send(embed)
                     .then(message => {
                message.delete(30000);
            })
        return;
    };  
   
   let cooldown = 8.64e+7
   
    cookies.fetchCookies(`lastDaily123_${message.guild.id + message.author.id}`).then(i => {

        if (i.text !== null && cooldown - (Date.now() - i.text) > 0) {
          let timeObj = ms(cooldown - (Date.now() - i.text));
          
          return message.channel.send(`Command Ratelimited! \n Available in ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s `)   .then(message => {
                message.delete(8000);
            })
                

        }else{
                        cookies.updateText(`lastDaily123_${message.guild.id + message.author.id}`, Date.now()).then(() => {

          
          var {
        RichEmbed
    } = require('discord.js');
          const fs = require("fs")
          let key = JSON.parse(fs.readFileSync("./key.json", "utf8"));
   let userK = message.mentions.users.first();
        if (!userK) {
            userK = message.author;
        }
  if(!key[userK.id]) key[userK.id] = {
    key: 0
  };
 
  fs.writeFile("./key.json", JSON.stringify(key), (err) => {
    if (err) console.log(err)
  })
    message.author.send(`:tada: | You claimed 100 free Coins in ${message.guild.name}!`)
            cookies.updateCookies(`globalCredits_${message.author.id}`, 100)
                console.log(`Added 100 Coins to Username : ${message.author.tag}`)
  

              
                        })
        }
    })
   })

}                                                                       

exports.config = {
    command: 'pcollect',
    aliases: [],
    plevel: "User",
    description: "Collect Daily coins every day  ",
    usage: "daily",
    category: "Currency"
};

exports.extra = {
    hidden: false
};
