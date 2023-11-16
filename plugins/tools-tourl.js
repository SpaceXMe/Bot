let uploadFile = require('../lib/uploadFile')
let uploadImage = require('../lib/uploadImage')

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  await conn.sendMessage(m.chat, { react: { text: wmoji, key: m.key }})
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  m.reply(`🖇️ *Link:* ${link}

📂 *Size:* ${media.length} Byte's
📆 ${isTele ? 'Tidak ada kadaluarsa' : 'Unknown'}`)
}
handler.help = ['upload <reply|media>', 'tourl <reply|media>']
handler.tags = ['tools']
handler.command = /^(tourl|upload)$/i

module.exports = handler