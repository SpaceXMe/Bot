let handler = async function (m, { conn }) {
    if (!m.quoted) throw false
    let { chat, fromMe, id } = m.quoted
    conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
    m.react(done)
}
handler.help = ['del', 'delete']
handler.tags = ['group']
handler.command = /^(del(ete)?)$/i

handler.limit = false
handler.botAdmin = true
handler.admin = true
handler.group = true

module.exports = handler