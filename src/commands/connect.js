const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
// const wait = require('node:timers/promises').setTimeout

module.exports = {
  data: new SlashCommandBuilder()
    .setName("connect")
    .setDescription("Conectar ao servidor")
    .addSubcommand((subCommand) =>
      subCommand
        .setName("user")
        .setDescription("Selecione o seu usuário")
        .addUserOption((option) =>
          option.setName("target").setDescription("Usuário")
        )
    ),
  async execute(interaction) {
    const selectUser = interaction.options.getUser("target");
    const yourUser = interaction.user.id;

    const row = new MessageActionRow().addComponents(new MessageButton()
      .setCustomId('primary')
      .setLabel('Link')
      .setStyle('PRIMARY'),
    );

    const row2 = new MessageActionRow().addComponents(new MessageButton()
      .setCustomId('primary-2')
      .setLabel('Botão2')
      .setStyle('PRIMARY'),
    );

    const embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Conectar ao servidor")
      .setDescription("Aperte um dos botões ae meu fi");

    if (selectUser.id === yourUser) {
      await interaction.reply("O seu id foi validado! Bem vindo ao servidor!");
      await interaction.followUp({
        content: "Tá ae",
        ephemeral: false,
        embeds: [embed],
        components: [row, row2],
      });
    } else {
      await interaction.reply("O seu id não bate com o usuário selecionado!");
    }
  },
};
