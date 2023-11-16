const fs = require('fs')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan kata kunci!', '0@s.whatsapp.net', `Ketik: *${usedPrefix}listvn* untuk melihat list vn`)
  let files = fs.readdirSync('./mp3')
  if (!files.length) return m.mediaReply('Tidak ada audio/vn di dalam folder.')
  if (!files.includes(text + '.opus')) return m.reply(`Audio dengan kata kunci *${text}* tidak terdapat dalam database`)
  fs.unlinkSync(`./mp3/${text}.opus`)
  let caption = 'Done kang'
  m.reply(caption)
}

handler.help = ['delvn']
handler.tags = ['tools']
handler.command = /^((del(ete)?)vn|vn(del(ete)?))$/i
handler.owner = true
handler.premium = true
handler.limit = false

module.exports = handler