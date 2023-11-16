const fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
	conn.chatRead(m.chat)
	await m.react('🗿')
  let files = fs.readdirSync('./mp3')
  if (!files.length) {
    m.reply('Tidak ada audio/vn di dalam folder.')
    return
  }
  let vnList = files.filter(file => file.endsWith('.opus')).map(file => `◦ ${file.replace('.opus', '')}`).join('\n')
  let caption = '*Audio/Voice Note List:*\n\n' + vnList
  conn.fakeReply(m.chat, caption, '0@s.whatsapp.net', `*${usedPrefix}send <nama audio>* untuk mengirimkan audio. Contoh: *${usedPrefix}send kuru*`, m.sender)
}

handler.help = ['listvn']
handler.tags = ['tools']

handler.command = /^(listvn|vnlist)$/i

module.exports = handler