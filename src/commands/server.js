const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    await interaction.reply(`Nome do Server: ${interaction.guild.name}\n
        Total de membros: ${interaction.guild.memberCount}\n 
        Data de criação: ${interaction.guild.createdAt}\n 
        Nível de verificação: ${interaction.guild.verificationLevel}`);
  },
};
