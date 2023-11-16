let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu sebentar, proses getting file *database.json*')
    const success = {
      "key": {
        "remoteJid": "status@broadcast",
        "participant": "0@s.whatsapp.net",
        "fromMe": false,
        "id": "Haloo"
      },
      "message": {
        "conversation": "Successfully backup *database.json*"
      }
    }
    let sesi = await fs.readFileSync('./database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: success })
}
handler.help = ['getdatabase']
handler.tags = ['owner']
handler.command = /^(get(database|db))$/i

handler.rowner = true

module.exports = handler
