var fetch = require('node-fetch')
var fs = require('fs')

let handler = async (m, { conn, command }) => {
  const fcon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `` } : {}) }, message: { 'contactMessage': { 'displayName': await conn.getName(m.sender), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true }}}
  if (/creator|developer/i.test(command)) {
   const tag_own = await conn.sendContact(m.chat, [[global.owner[0] + '@s.whatsapp.net', 'Why Me?']], fcon)
   await conn.delay(1000)
   conn.reply(m.chat, `Halo kak @${(m.sender).split`@`[0]} itu nomor owner utama ku, jangan di spam yah ≧﹏≦`, m, { quoted: tag_own })
  }
  if (/owner/i.test(command)) {
    var contact = [`${nomorown}`, 'Bagzz', 'Masih Pemula ↘️🌏', 'Contact SpaceTeam', 'itzspaceblitz@gmail.com', '🇫🇮 Finland\'s', `${sig}`, '🔲 Im Not Robot']
    var contact2 = [`${conn.user.jid.split('@')[0]}`, 'Space Blitz', 'What Happened?', '🗣️ Contact Me?', 'itzspaceblitz@gmail.com', 'Jawa Tengah - Indonesia 🇮🇩', `${sgc}`, 'No Info']
    const me = await conn.sendContactArray(m.chat, [contact, contact2], m)
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator|developer)$/i

module.exports = handler