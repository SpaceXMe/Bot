

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `Silahkan masukan laporan kamu\n\nContoh: ${usedPrefix + command} Lapor ada fitur yang error`, m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ REPORT ]*\nNomor : https://wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.reply('6282225201437@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, 'Masalah berhasil dikirimkan ke Owner', m)
}
handler.help = ['report <fitur>']
handler.tags = ['info']
handler.command = /^(report|lpr|lapor)$/i

module.exports = handler
