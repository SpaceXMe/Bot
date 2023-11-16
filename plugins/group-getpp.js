let handler = async (m, { conn, text }) => {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let pp = 'https://telegra.ph/file/b44bbc4b101769de812c4.jpg'
  try {
     pp = await conn.profilePictureUrl(who, 'image')
  } catch {
  
  } finally {
    let username = conn.getName(who)
    let str = `Nih Profilenya @${who.replace(/@.+/, '')}`
    let mentionedJid = [who]

    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['getpp <@user>']
handler.tags = ['group']
handler.command = /^getpp$/i
handler.premium = true
handler.group = true

module.exports = handler