let { tmpFile } = require('../lib/scrape')

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!(/image/.test(mime) || mime)) throw 'Hanya suport image!'
    m.reply(wait)
    try {
        let media = await q.download()
        media = await tmpFile(media)
        let img = await conn.getBuffer(global.API('lolhuman', '/api/upscale', { img: media.data.url.replace(/org/, 'org/dl') }, 'apikey'))
        conn.sendFile(m.chat, img, 'remini.jpg', 'Here is your remini image')
    } catch (e) {
        console.error(e)
        m.reply(e?.message)
    }
}

handler.help = ['remini', 'upscale']
handler.tags = ['tools']
handler.command = /^(remini|upscale)$/i

handler.premium = true

module.exports = handler