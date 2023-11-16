let handler = async (m, { conn, args, text, command }) => {
let who = m.quoted && m.quoted.sender ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = args[1] ? args.slice(1).join(' ') : args[0] ? text : await conn.getName(who)

if (/saveme|mycontact|me/i.test(command)) {
  who = m.sender;
}

conn.sendContact(m.chat, [[`${who.split`@`[0]}@s.whatsapp.net`, `${username}`]], m)
}

handler.help = ['mycontact', 'savekontak *@tag*']
handler.tags = ['tools']
handler.command = /^(save(contact|kontak)?|saveme|mycontact|me)$/i

handler.limit = true
handler.fail = null
module.exports = handler