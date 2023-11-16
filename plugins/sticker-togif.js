let { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.quoted) throw `balas stiker dengan perintah *${usedPrefix + command}*`
    let mime = m.quoted.mimetype || ''
    if (!mime) throw `Balas stiker/video dengan perintah *${usedPrefix + command}*`
    m.react(wmoji)
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
      out = await webp2mp4(media)
    } else if (/video/.test(mime)) {
      out = media
    } else throw `Conversion failed with status 403`
    conn.sendFile(m.chat, out, 'out.mp4', wm, m, true, { gifPlayback: true, gifAttribution: 2 })
}
handler.help = ['togif']
handler.tags = ['sticker']
handler.command = ['togif']

module.exports = handler