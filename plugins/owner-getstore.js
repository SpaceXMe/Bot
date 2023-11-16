let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File *store.json*')
    let sesi = await fs.readFileSync('./database/store.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'store.json' }, { quoted: m })
}
handler.help = ['getstore']
handler.tags = ['owner']
handler.command = /^(getstore)$/i

handler.owner = true

module.exports = handler