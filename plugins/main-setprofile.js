let handler = async (m, { conn, args, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  var __unreg = (new Date() - user.unreglast)
  var _unreg = (86400000 - __unreg)
  var unreg = clockString(_unreg)
  if (new Date - user.unreglast < 86400000) return m.reply(`Kamu sudah setting status hari ini\nSilahkan tunggu selama\n\n🕐 *${unreg}*`)
  var prefi = pickRandom(preff)
  let type = (args[0] || '').toLowerCase()
  let str = `
*LIST SET*

*${prefi} umur*
*${prefi} bio*

Penggunaan: *${usedPrefix + command} <type> <args>*
Contoh: *${usedPrefix + command} umur 17*
`.trim()

  switch (type) {
    case 'umur':
      let angka = /([1-9][0-9]|100)$/i
      if (!angka.test(args[1])) throw 'Masukkan umur yang sesuai!\nHanya untuk 10 tahun ke atas!'
      user.age = args[1]
      m.reply(`Umur berhasil di set ke *${args[1]}*`)
      user.unreglast = new Date() * 1
      break
      case 'bio': case 'status':
        user.bio = args.slice(1).join(' ')
        m.reply(`Bio berhasil di set menjadi\n*${args.slice(1).join(' ')}*`)
        user.unreglast = new Date() * 1
        break
        default:
        return m.reply(str)
  }
}

handler.help = ['setprofile']
handler.tags = ['main']
handler.command = /^(set(profile?)?)$/i

handler.exp = 0
handler.register = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  console.log({ms, h, m, s})
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}