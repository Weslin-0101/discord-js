const fs = require("node:fs");
const { resolve } = require("path");
const { Client, Collection, Intents } = require("discord.js");
const { token } = require("./config.json");

const cliente = new Client({ intents: [Intents.FLAGS.GUILDS] });

cliente.commands = new Collection();
const commandFiles = fs
  .readdirSync(resolve(__dirname, "commands"))
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  cliente.commands.set(command.data.name, command);
}

cliente.once("ready", () => {
  console.log(`Pronto! Bot ${cliente.user.tag} logado no server`);
});

cliente.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = cliente.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({
      content: "Ocorreu um erro durante a ocorrência do comando",
      ephemeral: true,
    });
  }
});

cliente.login(token);
