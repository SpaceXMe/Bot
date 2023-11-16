let handler = async (m, { conn, text }) => {
  if (!text) throw `Masukan text!`
  try {
	  await conn.updateProfileStatus(text).catch(_ => _)
	  conn.reply(m.chat, 'Done kang 😁', m)
  } catch {
    throw 'Error njir'
  }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^(setbio(bot)?|setbotbio)$/i
handler.rowner = true

module.exports = handler