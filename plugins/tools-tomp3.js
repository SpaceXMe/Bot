const { toAudio, toPTT } = require('../lib/converter')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!mime) return conn.reply(m.chat, `Balas video/audio dengan perintah *${usedPrefix + command}*`, m)
  try {
    if (/mp3|a(udio)?$/i.test(command)) {
      if (!/video|audio/.test(mime)) throw `Balas video/audio dengan perintah *${usedPrefix + command}*`
      let media = await q.download()
      if (!media) throw 'Media tidak dapat diunduh'
      let audio = await toAudio(media, 'mp4')
      if (!audio.data) throw 'Gagal melakukan konversi.'
      conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mpeg', asDocument: global.db.data.chats[m.chat].useDocument })
    }
    if (/vn|ptt$/i.test(command)) {
      if (!/video|audio/.test(mime)) throw `Balas video/audio dengan perintah *${usedPrefix + command}*`
      let media = await q.download()
      if (!media) throw 'Media tidak dapat diunduh'
      let audio = await toPTT(media, 'mp4')
      if (!audio.data) throw 'Gagal melakukan konversi.'
      conn.sendFile(m.chat, audio, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
    }
  } catch (e) {
    console.log(e)
    m.reply('Terjadi error')
  }
}
handler.help = ['tomp3', 'tovn']
handler.tags = ['audio']
handler.command = /^((to)?(mp3|a(udio)?|vn|ptt))$/i

module.exports = handler