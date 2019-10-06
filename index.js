const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.on('message', msg => {
  if (msg.content === 'i miss you') {
    msg.reply('i miss you too my love')
  }
})

client.on('message', msg => {
  if (msg.content === 'i am alone') {
    msg.reply('oh shit, I am sorry, I wish i am with you right now :( miss you and love you :(')
  }
})

client.on('guildMemberAdd', member => {
    member.send(
      `Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun 😀`
    )
  })

  client.on('message', message => {
    if (message.content.startsWith('!kick')) {
      const member = message.mentions.members.first()
  
      if (!member) {
        return message.reply(
          `Who are you trying to kick? You must mention a user.`
        )
      }
  
      if (!member.kickable) {
        return message.reply(`I can't kick this user. Sorry!`)
      }
  
      return member
        .kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
    }
  })

client.login('NjE2ODg0NTkzMjg2NDQ3MTE0.XWjFHw.MVMl-CoXEcStBtQbkjpkeS5FuvU')