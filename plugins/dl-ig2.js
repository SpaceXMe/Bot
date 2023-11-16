var axios = require('axios')
var { shortNumber } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan URL!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} ${sig}*`)
  m.react('⬇️')
  try {
    var me = await axios.get(`https://api.akuari.my.id/downloader/igdl2?link=${text}`)
  //  if (!me.ok) throw 'Terjadi error saat melakukan request'
    let ig3 = me.data.respon[0]
    conn.sendFile(m.chat, ig3.url, 'instagram2', 'Nih', m)
  } catch (e) {
    console.log(e)
    m.reply('Terjadi error saat melakukan request')
  }
}

handler.help = ['instagram2']
handler.tags = ['downloader']
handler.command = /^((ig|instagram)(dl)?2)$/i

handler.limit = true

module.exports = handler