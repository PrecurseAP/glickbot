require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./biggies');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login("NjgzNTgwNDY2NzAzNDk5Mjk3.Xltn6w.LJqzklcCOJQ4RCPEwOE7PdygdTs");

bot.once('ready', () => {
    console.info(`logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`called command: ${command}`);
    console.info(msg.author.id);

    if (msg.content === 'good bot') {
        msg.react('❤️');
        msg.channel.send('i love you');
    }
    if (msg.content.includes('trump')) {
        msg.react('🇲');
        msg.react('🇦');
        msg.react('🇬');
        msg.react('🅰️');
    }
    if (command === "__list") {
        msg.channel.send('wait a bit i gotta progrem that');
    }
    if (msg.mentions.everyone) {
        msg.channel.send(':flushed:');
    } else if (msg.mentions.has('683580466703499297')){ 
        msg.react('🤬');
        msg.react('💢');
        msg.react('‼️');
    }
    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.channel.send('ayyyyy big error something shittttter');
    }
});
