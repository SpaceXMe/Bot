let handler = async (m, { conn, usedPrefix }) => {
	let user = global.db.data.users[m.sender]
	let cap = `
*━━━ ❨ Kandang Buruan ❩ ━━┄┈*

=> *Berikut Isi Kandang :* @${m.sender.split`@`[0]}

*🐂 = [ ${user.banteng || 0} ] Banteng*
*🐅 = [ ${user.harimau || 0} ] Harimau*
*🐘 = [ ${user.gajah || 0} ] Gajah*
*🐐 = [ ${user.kambing || 0} ] Kambing*
*🐼 = [ ${user.panda || 0} ] Panda*
*🐊 = [ ${user.buaya || 0} ] Buaya*
*🐃 = [ ${user.kerbau || 0} ] Kerbau*
*🐮 = [ ${user.sapi || 0} ] Sapi*
*🐒 = [ ${user.monyet || 0} ] Monyet*
*🐗 = [ ${user.babihutan || 0} ] Babi Hutan*
*🐖 = [ ${user.babi || 0} ] Babi*
*🐓 = [ ${user.ayam || 0} ] Ayam*

Gunakan:
*${usedPrefix}pasar* untuk dijual
*${usedPrefix}cook* untuk dimasak
`

	conn.reply(m.chat, cap, m, { mentions: await conn.parseMention(cap) } )
}

handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i

module.exports = handler