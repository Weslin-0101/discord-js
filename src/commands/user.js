const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Informações do seu usuário"),
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("primary")
        .setLabel("Teste")
        .setStyle("PRIMARY")
    );

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Testando o botão")
      .setURL(
        "https://pbs.twimg.com/media/FOpjTS2XwAYgQTG?format=jpg&name=360x360"
      )
      .setDescription("Tamo aqui para testar o botão");
    await interaction.reply({
      content: `Tag do Usuário: ${interaction.user.tag}\n ID do Usuário: ${interaction.user.id}`,
      embeds: [embed],
      components: [row],
    });
  },
};
