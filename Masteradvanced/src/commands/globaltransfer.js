exports.run = async (client, message ,args) => {
  const ms = require("ms");
   
  
    const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');

    let increase = args[1];
     let reason = args.slice(1).join(' ');
if (reason.length < 2)  return message.reply('You must transfer 10+ coins!');

  const user = message.mentions.users.first() || client.users.get(args[0]);
    let sender = message.author;
          const cookies = require('cookiesdb');
            const db = require('quick.db');

const fs = require("fs")
  db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
       
    }
       
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
 if (!user) {
        message.channel.send('Please Mention a user or return a users client id')
            .then(message => {
                message.delete(15000);
            })
        return;
    };
 
    if (!increase) {
        message.channel.send('Please Enter an Amount! *Example: 100 | Note: Tax is 10%*')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
  if (increase.startsWith('-')) {
        message.channel.send('You cannot send a negative number to a user.')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
     if (increase.startsWith('0')) {
        message.channel.send('The first number cannot contain 0!')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
   if (user.bot) {
        message.channel.send('You cannot transfer money to a bot')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
    cookies.fetchCookies(`globalCredits_${message.author.id}`).then((d) => {
        if (increase > d.value) {
         message.channel.send('You do not have enough coins to send to that user')
      .then(message => {
                message.delete(5000);
            })
        return;
    };
   
if (isNaN(increase)) {
        message.channel.send('Please Enter a correct amount | *Example: 100 | Note: Tax is 10%*')
            .then(message => {
                message.delete(5000);
            })
        return;
    };
  if (message.author.id === user.id) {
        message.channel.send('Cannont send coins to yourself!')
            .then(message => {
                message.delete(5000);
            })
        return;
  }
      const fs = require("fs")
    let upgrades = JSON.parse(fs.readFileSync("./quests.json", "utf8"));
   let userUps = message.mentions.users.first();
        if (!userUps) {
            userUps = message.author;
        }
  if(!upgrades[message.author.id]) upgrades[message.author.id] = {
    upgrade: 0
  };
                                       upgrades[message.author.id].upgrades++;

  fs.writeFile("./quests.json", JSON.stringify(upgrades), (err) => {
    if (err) console.log(err)
  })
                
								return  cookies.updateCookies(`globalCredits_${message.author.id}`, parseInt('-' + increase)).then((pb) => {
                  return cookies.updateCookies(`globalCredits_${user.id}`, parseInt(increase / 1.1111111111)).then((pbs) => {
                    								let newbal = cookies.fetchCookies(`globalCredits_${message.author.id}`)


      
 let mute = "3s";
increase = parseInt(increase)
    message.channel.send(`<a:tickg:473984512708050945> Success, please wait while we are transfering coins to ${user.username}'s account <a:tickg:473984512708050945>`)
    var embed = new RichEmbed()
    .setColor("RANDOM")
    .setAuthor(user.username , user.avatarURL)
    .addField('<a:tickg:473984512708050945> Transfer Sent' , `Your new balance ${parseInt(pb.value + '-' + increase)} (-**${parseInt(increase)}**) Coins <:descrease:487773204253900818>\n${user.username}'s New Balance ${pbs.value}(+**${parseInt(increase / 1.1111111111)}**) Coins <:increase:487773169692704778> `)

      console.log(`You have sent <:penguboat:468566426605715483> **$${increase}** Credits to ${user} ( ${user.username}#${user.discriminator} `)
setTimeout(function(){
      message.channel.send({embed})
                                      
    }, ms(mute))
                                    return cookies.updateCookies(`globalCredits_${message.guild.owner.id}`, parseInt(increase /10.1111111111111))

                          let key = JSON.parse(fs.readFileSync("./key.json", "utf8"));
   let userK = message.mentions.users.first();
        if (!userK) {
            userK = message.author;
        }
                                                key[message.author.id].key++;

  if(!key[userK.id]) key[userK.id] = {
    key: 0
  };
        fs.writeFile("./key.json", JSON.stringify(key), (error) => {
                if (error) console.log(error)
               if(key[message.author.id].key  == 1){
           message.channel.send('Weekly quest complete!')
               }
        })
                   
                })
              })
              })
  })
}
     
                    
   
    
exports.config = {
    command: 'transfer',
    aliases: ['send'],
    plevel: "User",
    description: "Sends Coins to Users! [Global]",
    usage: "transfer <@user> <amount>",
    category: "Currency"
};

exports.extra = {
    hidden: false
};