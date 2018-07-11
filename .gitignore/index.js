const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Rôles, z!help");
    console.log("Le bot à bien était connnecté");
});

bot.login("NDY2NTcwMzQwMjYxNDI5MjQ5.Did_BA.NxcD9ozJLMNuH4M3b5IWJ5NwjX0")
