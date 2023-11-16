async function handler(m, { conn, text, isAdmin, isOwner, args, usedPrefix, command, groupMetadata }) {
 conn.ot = conn.ot ? conn.ot : {}
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
  
  conn.reply(m.chat, `_Group akan dibuka dalam *${text}*_`, m)
  conn.ot[m.chat] = [
    setTimeout(async () => {
      var nomor = m.participant
      const open = `Waktu habis! grup telah dibuka oleh Admin!\nSekarang semua member dapat mengirim pesan`
      await conn.groupSettingUpdate(m.chat, 'not_announcement')
      return conn.reply(m.chat, open, null)
      delete conn.ot[m.chat]
    }, timer)
  ]
}

handler.before = async (m) => {
  conn.ot = conn.ot ? conn.ot : {}
  if (m.chat in conn.ot) {
    clearTimeout(conn.ot[m.chat][0])
    delete conn.ot[m.chat]
  }
}

handler.help = ['opentime <waktu>']
handler.tags = ['group']
handler.command = /^(grouptimeopen|gctimeopen|opentime|gopen)$/i
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
