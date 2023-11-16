let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, args, usedPrefix }) => {
  let user = global.db.data.users
  function no(number) {
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  var args1 = args[1] ? args[1] : ''
  var args2 = args[2] ? args[2] : ''
  var nomor = '6282225201437'
  let str =  `*❏ GET NUMBER*\n\n• ${usedPrefix}ban number\n*Example:* ${usedPrefix}ban 6283137550315\n\n• ${usedPrefix}ban @tag\n*Example:* ${usedPrefix}ban @${nomor.split('@')[0]}`
  if (!text) return conn.reply(m.chat, str, m, { contextInfo: { mentionedJid: conn.parseMention(str) }})
  let now = new Date() * 1
  let jumlahHari
    if (args2 == 'detik') {
    jumlahHari = args1 * 1000
  } else if (args2 == 'menit') {
    jumlahHari = args1 * 60000
  } else if (args2 == 'jam') {
    jumlahHari = args1 * 3600000
  } else if (args2 == 'hari') {
    jumlahHari = args1 * 86400000
  } else {
    jumlahHari = 0
  }
  try {
    text = no(args[0]) + "@s.whatsapp.net"
    let me = await conn.onWhatsApp(text)
    if (!me) return m.reply('Nomor tidak terdaftar di WhatsApp!')
    if (user[text].banned == true && user[text].warn == 5) return m.reply('User telah dibanned sebelumnya')
    global.db.data.users[text].banned = true
    global.db.data.users[text].warn = 5
    if (now < global.db.data.users[text].bannedDate) global.db.data.users[text].bannedDate += jumlahHari
    else global.db.data.users[text].bannedDate = now + jumlahHari
    conn.reply(m.chat, `*Berhasil banned user @${text.split('@')[0]}.*`, m, { contextInfo: { mentionedJid: [text] }})
    conn.reply(text, `*Kamu telah dibanned!\nUntuk membuka banned, silahkan hubungi owner*`, m, { contextInfo: { mentionedJid: [text] }})
  } catch (e) {
    console.log(e)
    m.reply(danied)
  }
}
handler.help = ['banned']
handler.tags = ['owner']
handler.command = /^(ban(ned)?(user)?)$/i
handler.rowner = true
handler.prem = false
handler.fail = null
module.exports = handler