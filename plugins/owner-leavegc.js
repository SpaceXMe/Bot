let fs = require('fs')

let handler = async (m, { isGroup, usedPrefix, conn, args, command }) => {
	let group = args[0] ? (args[0].replace(/[^0-9]/g, '') + '@g.us') : m.chat
  
	if (!m.isGroup && !args[0]) return conn.fakeReply(m.chat, `Kamu harus berada di group atau masukkan ID group tersebut agar bisa mengeluarkan ${namebot}`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} 19374729*`)
	try {
        await conn.reply(group, 'Byee👋, Bot akan keluar dari group karena telah dikeluarkan owner dari group ini', m)
        await conn.delay(1000)
        await conn.groupLeave(group)
        m.reply(`Bot berhasil keluar dari group *${await conn.getName(group)}*`)
  } catch (e) {
    m.reply('ID group yang kamu masukkan salah!')
  }
}
handler.help = ['gc', 'group']
handler.tags = ['group', 'owner']
handler.command = /^(leavegroup|out|leavegc|leave)$/i

handler.owner = true

module.exports = handler