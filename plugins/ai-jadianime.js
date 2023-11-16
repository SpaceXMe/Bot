let fetch = require('node-fetch')
let uploadImg = require('../lib/uploadImage')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadianime'
  m.reply('_Tunggu Sebentar..._')
  try {
    let media = await q.download()
    let url = await uploadImg(media)
    let hasil = await (await fetch(`https://vihangayt.me/tools/toanime?url=${url}`)).buffer()
    await conn.sendFile(m.chat, hasil, '', wm, m)
  } catch (error) {
    console.log(error)
    m.reply(error?.message)
  }
}
handler.help = ['jadianime']
handler.tags = ['ai', 'maker']
handler.command = /^(jadianime)$/i
handler.limit = true

module.exports = handler