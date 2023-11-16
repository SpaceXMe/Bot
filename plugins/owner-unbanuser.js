let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  var nomor = '6282225201437'
  let str =  `*❏ GET NUMBER*\n\n• ${usedPrefix}unban number\n*Example:* ${usedPrefix}unban 6283137550315\n\n• ${usedPrefix}unban @tag\n*Example:* ${usedPrefix}unban @${nomor.split('@')[0]}`
  if (!text) return conn.reply(m.chat, str, m, { contextInfo: { mentionedJid: conn.parseMention(str) }})
  try {
    text = no(text) + "@s.whatsapp.net"
    let me = await conn.onWhatsApp(text)
    if (!me) return m.mediaReply('Nomor tidak terdaftar di WhatsApp!')
    if (user[text].banned == false && user.warn < 5) return m.reply('User tidak memiliki riwayat banned')
    global.db.data.users[text].banned = false
    global.db.data.users[text].warn = 0
    global.db.data.users[text].bannedDate = 0
    conn.reply(m.chat, `*Berhasil unbanned user @${text.split('@')[0]}.*`,m, { contextInfo: { mentionedJid: [text] }})
    conn.reply(text, `*Kamu telah di unbanned\nKamu dapat menggunakan fitur bot lagi!*`,m, { contextInfo: { mentionedJid: [text] }})
  } catch (e) {
    console.log(e)
    m.reply('Pastikan nomor yang anda masukkan sudah benar!')
  }
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^(unban(user)?)$/i
handler.rowner = false
handler.prem = true
handler.fail = null
module.exports = handler