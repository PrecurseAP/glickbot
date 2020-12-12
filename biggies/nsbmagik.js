module.exports = {
    name: ".magik",
    description: "bang",
    execute(msg, args) {
        const reactionEmoji = msg.guild.emojis.cache.find(emoji => emoji.name === 'believe');
        msg.react(reactionEmoji);
    },
};