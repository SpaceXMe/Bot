let handler = async (m, { conn, text }) => {
  let randUmur = Math.floor(Math.random() * 120) + 1
  let user = global.db.data.users
  let who = m.quoted && m.quoted.sender ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let umur
  if (text && !(m.quoted || m.mentionedJid[0])) {
    umur = randUmur
  } else {
    umur = (user[who].age == -1) ? randUmur : user[who].age
  }

  if (text) {
  m.reply(`
Nama: *${text}*
Umur: *${umur} tahun*
`)
  } else if (m.quoted && m.quoted.sender || m.mentionedJid[0]) {
    m.reply(`Umur beliau *${umur} tahun*`)
  } else {
    m.reply(`Umur kamu *${umur} tahun*`)
  }
}
handler.help = ['tebakumur']
handler.tags = ['game']
handler.command = /^(tebakumur|umur)$/i

handler.limit = true

module.exports = handler