const fs = require("node:fs");
const { resolve } = require("path");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { token } = require("./config.json");

const commands = [];
const commandFiles = fs
  .readdirSync(resolve(__dirname, "commands"))
  .filter((file) => file.endsWith(".js"));

const clientId = "958544251719933982";
const guildId = "957350983720112128";

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: 9 }).setToken(token);

// Os comandos estão somente dentro da guilda => Guild Commands
(async () => {
  try {
    console.log("Iniciando a atualização dos Slash Commands (/).");

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Sucesso em atualizar os Slash Commands (/).");
  } catch (err) {
    console.error(err);
  }
})();
