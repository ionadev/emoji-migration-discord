const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config');

async function validateConfig(file) {
    if (!file.token || file.token === "") throw new Error("No Token Specified");
    if (!file.prefix || file.prefix === "") throw new Error("No Prefix Specified");
    if (!file.main_guild_id || file.main_guild_id === "") throw new Error("No Main Guild ID Specified");
    if (!file.final_guild_id || file.final_guild_id === "") throw new Error("No New Guild ID Specified");
}

validateConfig(config);

client.on('ready', () => {
    console.log("[BOT] Connected To Discord.");
});

client.on('message', async msg => {
    if (msg.content.startsWith(config.prefix + "import")) {
        try {
            const oldGuild = await client.guilds.get(config.main_guild_id);
            const newGuild = await client.guilds.get(config.final_guild_id);
            console.log(oldGuild.name, newGuild.name);
            await oldGuild.emojis.map(async e => {
                await newGuild.emojis.create(e.url, e.name);
                await msg.channel.send(`Created **{e.name}** Emote`);
            })

            return msg.channel.send(`Created Emotes.`);
        } catch (err) {
            console.log(err);

            return msg.channel.send(`An Error Occured: \`\`\`${err.stack}\`\`\``);
        }
    }

    return null;
});

client.login(config.token);