const { fetchJson } = require('../lib/myfunc')
let moment = require('moment-timezone')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Input query!', '0@s.whatsapp.net', `Example: *${usedPrefix + command} how to make a rocket*`, 'status@broadcast')
  var time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  m.react('🔍')
  try {
    let system = "You are a chat ai robot created by openai company, your name is ChatGpt. Your personality traits (helpful, cool, friendly). You speak multiple languages, but you prefer Indonesian. And now is the hour" + time + " WIB"
    await fetchJson(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${global.lolhuman}&text=${encodeURIComponent(text)}&system=${system}`)
    .then((a) => {
      let ai = a.result
      conn.sendMessage(m.chat, {
        text: `\n${text.replace(/^\w/, (c) => c.toUpperCase())}\n\n\n` + ai + '\n',
        contextInfo: {
          mentionedJid: conn.parseMention(text), externalAdReply: {
            title: 'GPT Turbo',
            body: 'Powered By Openai',
            sourceUrl: 'https://chat.openai.com',
            thumbnailUrl: 'https://telegra.ph/file/42b6d34e066764e190023.jpg',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    })
  } catch (e) {
    console.log(e)
    m.reply('An error occurred while processing the request')
  }
}

handler.help = ['turbo']
handler.tags = ['ai', 'premium']
handler.command = /^(openaiturbo|(ai|openai)2|(chat)?(gpt|ai)?turbo(ai)?)$/i

handler.premium = true

module.exports = handler