let handler = async (m, { text, usedPrefix, command }) => {

    if (!text) throw `Where is the path?\n\nExample:\n*${usedPrefix + command} plugins/menu.js*`
    if (!(m.quoted && m.quoted.text)) throw `Reply the code!`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
  var name = m.sender
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283137550315@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  conn.reply(m.chat, `Successfully saving file to\n*${path}*`, fkonn)
}

handler.help = ['savefile', 'sf'].map(v => v + ' <path>')
handler.tags = ['owner']
handler.command = ['savefile', 'sf']

handler.owner = true
module.exports = handler