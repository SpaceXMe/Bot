var fetch = require('node-fetch')
let timeout = 80000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = m.chat
    if (id in conn.tebaklogo) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebaklogo[id][0])
        throw false
    }
    let res = await fetch(`https://api.akuari.my.id/games/tebakapp`)
    let json = await res.json()
    let caption = `*${command.toUpperCase()}*
Logo apakah ini?

Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hlog Untuk Bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebaklogo[id] = [
        await conn.sendFile(m.chat, json.hasil.data.image, 'image.jpg', `${caption}`, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.hasil.data.jawaban}*`, conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo$/i

module.exports = handler
