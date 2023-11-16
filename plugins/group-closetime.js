async function handler(m, { conn, text, isAdmin, isOwner, args, usedPrefix, command, groupMetadata }) {
  conn.ct = conn.ct ? conn.ct : {}
  let timer
  if (args[1] == 'detik') {
  timer = args[0] * 1000
  } else if (args[1] == 'menit') {
    timer = args[0] * 60000
  } else if (args[1] == 'jam') {
    timer = args[0] * 3600000
  } else if (args[1] == 'hari') {
    timer = args[0] * 86400000
  } else {
    return m.reply(`Silahkan Pilih:\n*detik, menit, jam*\n\nContoh:\n*${usedPrefix + command} 1 jam*`)
  }
  conn.reply(m.chat, `_Group akan ditutup dalam *${text}*_`, m)

  conn.ct[m.chat] = [
  setTimeout(async () => {
    var nomor = m.participant
    const close = `Waktu habis! grup telah ditutup oleh Admin!\nSekarang hanya admin yang dapat mengirim pesan`
    await conn.groupSettingUpdate(m.chat, 'announcement')
    return conn.reply(m.chat, close, null)
    delete conn.ct[m.chat]
  }, timer)
  ]
}

handler.before = async (m) => {
  conn.ct = conn.ct ? conn.ct : {}
  if (m.chat in conn.ct) {
    clearTimeout(conn.ct[m.chat][0])
    delete conn.ct[m.chat]
  }
}

handler.help = ['closetime <waktu>']
handler.tags = ['group']
handler.command = /^(grouptimeclose|gctimeclose|closetime|gclose)$/i
handler.botAdmin = true
handler.group = true
handler.admin = true

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
