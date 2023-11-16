let handler = async (m, { conn, text }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    if (!who) throw `tag orangnya!`
    if (global.owner.includes(who.split`@`[0])) throw 'Dia udah jadi owner!'
    global.owner.push([`${who.split`@`[0]}`])
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang adalah owner!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
}
handler.help = ['addowner <@user>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.rowner = true

module.exports = handler