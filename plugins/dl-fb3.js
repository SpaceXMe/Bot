var api = require('api-dylux')

let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) return conn.fakeReply(m.chat, 'Linknya mana?', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://www.facebook.com*`)
    m.react(rwait)
   try {
    let result = await api.fbdl(args[0]);
    conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', result.title, m);
  } catch (error) {
    console.error(error)
 	  m.reply('Error: internal server down')
 	}
}
handler.help = ['facebook3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?3)$/i
handler.limit = true

module.exports = handler
