const { SlashCommandBuilder } = require("@discordjs/builders");
const pong = require("../service/createUrl");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    const userId = interaction.user.id;
    const pongResponse = await pong(userId);
    await interaction.reply({
      content: `${pongResponse}, seu ID: ${userId}`,
      ephemeral: true,
    });
  },
};
