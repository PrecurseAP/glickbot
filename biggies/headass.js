module.exports = {
    name: '__headass',
    description: 'fuck it',
    execute(msg, args) {
        msg.channel.send('go away');
        const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'con');
        msg.react(reactionEmoji);
    },
};