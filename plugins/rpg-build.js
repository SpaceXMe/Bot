let { MessageType } = require('@adiwajshing/baileys')
let { clockString, pickRandom, currency } = require('../lib/myfunc')

const waktu = 36000000
//Harga Build
let rumahsakit = 2000
let benteng = 2500
let camptroops = 3000
let pertanian = 2000
let pertambangan = 3500

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

let __timer = (new Date - global.db.data.users[m.sender].lastbuild)
let _timer = (waktu - __timer)
let timer = clockString(_timer)

let type = (args[0] || '').toLowerCase()
let upgrade = (args[0] || '').toLowerCase()

let user = global.db.data.users[m.sender]
//Harga Upgrade
const _rumahsakitu = user.rumahsakitlv
const rumahsakitu = (_rumahsakitu == 0 ? 1000 : '' || _rumahsakitu == 1 ? 2000 : '' || _rumahsakitu == 0 ? 2500 : '' || _rumahsakitu == 2 ? 3000 : '' || _rumahsakitu == 3 ? 3500 : '' || _rumahsakitu == 4 ? 5000 : '' || _rumahsakitu > 4 ? 'Rumah Sakit sudah level max!' : '')
const _bentengu = user.fortresslv
const bentengu = (_bentengu == 0 ? 1000 : '' || _bentengu == 1 ? 2000 : '' || _bentengu == 0 ? 3000 : '' || _bentengu == 2 ? 5000 : '' || _bentengu == 3 ? 7000 : '' || _bentengu == 4 ? 10000 : '' || _bentengu > 4 ? 'Benteng* sudah level max!' : '')
const _camptroopsu = user.camptroopslv
const camptroopsu = (_camptroopsu == 0 ? 1000 : '' || _camptroopsu == 1 ? 2000 : '' || _camptroopsu == 0 ? 3000 : '' || _camptroopsu == 2 ? 5000 : '' || _camptroopsu == 3 ? 7000 : '' || _camptroopsu == 4 ? 10000 : '' || _camptroopsu > 4 ? 'Kamp Pasukan* sudah level max!' : '')
const _pertanianu = user.camptroopslv
const pertanianu = (_pertanianu == 0 ? 500 : '' || _pertanianu == 1 ? 1000 : '' || _pertanianu == 0 ? 1500 : '' || _pertanianu == 2 ? 3000 : '' || _pertanianu == 3 ? 4000 : '' || _pertanianu == 4 ? 5000 : '' || _pertanianu > 4 ? 'Pertanian* sudah level max!' : '')
const _pertambanganu = user.tambanglv
const pertambanganu = (_pertambanganu == 0 ? 2000 : '' || _pertambanganu == 1 ? 4000 : '' || _pertambanganu == 0 ? 5000 : '' || _pertambanganu == 2 ? 8000 : '' || _pertambanganu == 3 ? 10000 : '' || _pertambanganu == 4 ? 15000 : '' || _pertambanganu > 4 ? '*Pertambangan* sudah level max!' : '')

let caption = `
*🚜 List Contruction For Your City Facility*

*List facility | 🛒Harga pembangunan*
1. 🏥 Hospital :    ${currency(rumahsakit)}
2. 🌾 Pertanian:    ${currency(pertanian)}
3. 🏕️ Camptroop:    ${currency(camptroops)}
4. ⚒️ Pertambangan: ${currency(pertambangan)}
5. 🏯 Benteng: ${currency(benteng)}

*List facility | 🛒Harga Upgrade*
1. 🏥 Hospital :    ${(user.rumahsakitlv < 5) ? currency(rumahsakitu) : rumahsakitu}
2. 🌾 Pertanian:    ${(user.pertanianlv < 5) ? currency(pertanianu) : pertanianu}
3. 🏕️ Camptroop:    ${(user.camptroopslv < 5) ? currency(camptroopsu) : camptroopsu}
4. ⚒️ Pertambangan: ${(user.tambanglv < 5) ? currency(pertambanganu) : pertambanganu}
5. 🏯 Benteng: ${(user.fortresslv < 5) ? currency(bentengu) : bentengu}

Contoh penggunaan:
*${usedPrefix + command} 1*
`
//
        try {
               if (/build|bangun/i.test(command)) {
               	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
          switch (type) {
                	       case 'benteng': case 'fortress': case '5':
                if ( global.db.data.users[m.sender].batu > 5000 * count ) {
                
               	global.db.data.users[m.sender].batu >= 5000 * count
                	global.db.data.users[m.sender].fortress += count * 1
                    global.db.data.users[m.sender].kayu -= 5000 * count
                    global.db.data.users[m.sender].batu -= 5000 * count
                    global.db.data.users[m.sender].money -= benteng * count
                       m.reply(`Berhasil membangun *Benteng*`)
                       } else m.reply(`Sda Kamu tidak cukup untuk membangun benteng yg senilai ${5000 * count } Kayu ${5000 * count} Batu dan ${currency(benteng)} Money`)
                          break
                           case 'pertanian':
                           case 'farm':
                           case '2':
                           if ( user.batu > pertanian * count ) {
                	user.batu >= 5000 * count
                	user.pertanian += count * 1
                    user.kayu -= 5000 * count
                    user.batu -= 5000 * count
                      m.reply(`Berhasil membangun *Pertanian*`)
                       } else m.reply(`Sda Kamu tidak cukup untuk membangun pertanian yg senilai ${5000 * count } Kayu ${5000 * count} Batu dan ${currency(pertanian)} Money`)
                      break
                        case 'camptroops':
                        case 'camptroop':
                        case '3':
                        case 'militer':
                        case 'markasmiliter':
                   if ( user.batu > camptroops * count ) {
                    user.batu >= 5000 * count
                    user.camptroops += count * 1
                    user.kayu -= 5000 * count
                    user.batu -= 5000 * count
                    user.money -= camptroops * count
                    m.reply(`Berhasil membangun *Camptroops*`)
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun kamp pasukan yg senilai ${5000 * count} Kayu ${5000 * count} Batu dan ${currency(camptroops)} Money`)
                      
                      break
                    case 'pertambangan':
                    case '4':
                    if ( user.tambang > pertambangan * count ) {
                   user.batu >= 5000 * count
                    user.tambang += count * 1
                    user.kayu -= 5000 * count
                    user.batu -= 5000 * count
                    user.money -= pertambangan * count
                    m.reply(`Berhasil membangun *Pertambangan*`)
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun pertambangan yg senilai ${5000 * count} Kayu ${5000 * count} Batu dan ${currency(pertambangan)} Money`)
                      
                       break
                    case 'rumahsakit': 
                    case 'hospital':
                    case '1':
                    if ( user.rumahsakit > rumahsakit * count ) {
                    user.rumahsakit += count * 1
                    user.kayu -= 5000 * count
                    user.batu -= 5000 * count
                    user.money -= rumahsakit * count
                    m.reply(`Berhasil membangun *Rumah Sakit*`)
                    } else m.reply(`Sda Kamu tidak cukup untuk membangun rumah sakit yg senilai ${5000 * count} Kayu ${5000 * count} Batu dan ${currency(rumahsakit)} Money`)
                       break

                       default:
                        return conn.reply(m.chat, caption, m)
                }
        }
        if (/upgd|upgrade/i.test(command)) {
  switch (upgrade) {
    case 'benteng': case 'fortress': case '5':
      if (global.db.data.users[m.sender].fortress > 0) {
        if (user.fortresslv > 4) return m.reply(`*Benteng* kamu sudah level max!`)
        if (user.money < bentengu) return m.reply(`Uang kamu tidak cukup untuk mengupgrade *Benteng* seharga ${currency(bentengu)} Money`)
       if (new Date - user.lastbuild > waktu) {
        if (user.batu && user.kayu < 4999) {
        if (user.batu > 4999) {
          if (user.kayu > 4999) {
            user.money -= bentengu * 1
            user.batu -= 5000
            user.kayu -= 5000
            user.fortresslv += 1
            setTimeout(() => {
            m.reply(`Sukses mengupgrade *Benteng!* dengan biaya\n\n${currency(bentengu)}\n5000 Kayu\n5000 Batu`)
            }, waktu)
            setTimeout(() => {
            m.reply(`Sedang mengupgrade *Benteng* silahkan tunggu selama\n\n${timer}`)
            }, 0)
            user.lastbuild += new Date * 1
          } else m.reply (`Membutuhkan:\n*${5000 - user.kayu} Kayu*`)
        } else m.reply(`Membutuhkan:\n*${5000 - user.batu} Batu*`)
        } else m.reply(`Membutuhkan:\n*${user.batu} / 5000 Batu*\n*${user.kayu} / 5000 Kayu*`)
       } else m.reply(`Kuli kamu sedang mengupgrade bangunan\nSilahkan tunggu selama\n\n${timer}`)
      } else m.reply(`Kamu belum membangun *Benteng*\nKetik *${usedPrefix}build benteng* untuk membangun benteng`)
      break
    case 'rumahsakit': case 'hospital': case '1':
      if (global.db.data.users[m.sender].rumahsakit > 0) {
        if (user.rumahsakitlv > 4) return m.reply(`*Hospital* kamu sudah level max!`)
        if (user.money < rumahsakitu) return m.reply(`Uang kamu tidak cukup untuk mengupgrade *Hospital* seharga ${currency(rumahsakitu)} Money`)
       if (new Date - user.lastbuild > waktu) {
        if (user.batu && user.kayu < 4999) {
        if (user.batu > 4999) {
          if (user.kayu > 4999) {
            user.money -= rumahsakitu * 1
            user.batu -= 5000
            user.kayu -= 5000
            user.rumahsakitlv += 1
            setTimeout(() => {
            m.reply(`Sukses mengupgrade *Rumah Sakit!* dengan biaya\n\n${currency(rumahsakitu)}\n5000 Kayu\n5000 Batu`)
            }, waktu)
            setTimeout(() => {
            m.reply(`Sedang mengupgrade *Rumah Sakit* silahkan tunggu selama\n\n${timer}`)
            }, 0)
          } else m.reply (`Membutuhkan:\n*${5000 - user.kayu} Kayu*`)
        } else m.reply(`Membutuhkan:\n*${5000 - user.batu} Batu*`)
        } else m.reply(`Membutuhkan:\n*${user.batu} / 5000 Batu*\n*${user.kayu} / 5000 Kayu*`)
       } else m.reply(`Kuli kamu sedang mengupgrade bangunan\nSilahkan tunggu selama\n\n${timer}`)
      } else m.reply(`Kamu belum membangun *Rumah Sakit!*\nKetik *${usedPrefix}build hospital* untuk membangun rumah sakit`)
      break
    case 'pertanian': case 'farm': case '2':
      if (global.db.data.users[m.sender].pertanian > 0) {
        if (user.pertanianlv > 4) return m.reply(`*Farm* kamu sudah level max!`)
        if (user.money < pertanianu) return m.reply(`Uang kamu tidak cukup untuk mengupgrade *Farm* seharga ${currency(pertanianu)} Money`)
       if (new Date - user.lastbuild > waktu) {
        if (user.batu && user.kayu < 4999) {
        if (user.batu > 4999) {
          if (user.kayu > 4999) {
            user.money -= pertanianu * 1
            user.batu -= 5000
            user.kayu -= 5000
            user.pertanianlv += 1
            setTimeout(() => {
            m.reply(`Sukses mengupgrade *Pertanian!* dengan biaya\n\n${currency(pertanianu)}\n5000 Kayu\n5000 Batu`)
            }, waktu)
            setTimeout(() => {
            m.reply(`Sedang mengupgrade *Pertanian* silahkan tunggu selama\n\n${timer}`)
            }, 0)
          } else m.reply (`Membutuhkan:\n*${5000 - user.kayu} Kayu*`)
        } else m.reply(`Membutuhkan:\n*${5000 - user.batu} Batu*`)
        } else m.reply(`Membutuhkan:\n*${user.batu} / 5000 Batu*\n*${user.kayu} / 5000 Kayu*`)
       } else m.reply(`Kuli kamu sedang mengupgrade bangunan\nSilahkan tunggu selama\n\n${timer}`)
      } else m.reply(`Kamu belum membangun *Pertanian*\nKetik *${usedPrefix}build pertanian* untuk membangun pertanian`)
      break
    case 'camptroop': case 'camptroops': case 'kampmiliter': case '3':
      if (global.db.data.users[m.sender].camptroops > 0) {
        if (user.camptroopslv > 4) return m.reply(`*Kamp Militer* kamu sudah level max!`)
        if (user.money < camptroopsu) return m.reply(`Uang kamu tidak cukup untuk mengupgrade *Kamp Militer* seharga ${currency(camptroopsu)} Money`)
       if (new Date - user.lastbuild > waktu) {
        if (user.batu && user.kayu < 4999) {
        if (user.batu > 4999) {
        if (user.iron > 4999) {
          if (user.kayu > 4999) {
            user.money -= camptroopsu * 1
            user.batu -= 5000
            user.kayu -= 5000
            user.iron -= 5000
            user.camptroopslv += 1
            setTimeout(() => {
            m.reply(`Sukses mengupgrade *Kamp Militer!* dengan biaya\n\n${currency(camptroopsu)}\n5000 Kayu\n5000 Batu\n5000 Iron`)
            }, waktu)
            setTimeout(() => {
            m.reply(`Sedang mengupgrade *Kamp Militer* silahkan tunggu selama\n\n${timer}`)
            }, 0)
          } else m.reply (`Membutuhkan:\n*${5000 - user.kayu} Kayu*`)
        } else m.reply(`Membutuhkan:\n*${5000 - user.iron} Iron*`)
        } else m.reply(`Membutuhkan:\n*${5000 - user.batu} Batu*`)
        } else m.reply(`Membutuhkan:\n*${user.batu} / 5000 Batu*\n*${user.kayu} / 5000 Kayu*\n*${user.iron} / 5000 Iron*`)
       } else m.reply(`Kuli kamu sedang mengupgrade bangunan\nSilahkan tunggu selama\n\n${timer}`)
      } else m.reply(`Kamu belum membangun *Kamp Militer*\nKetik *${usedPrefix}build camptroop* untuk membangun kamp militer`)
      break
        default:
          return conn.reply(m.chat, caption, m)
  }
}
    } catch (e) {
        conn.reply(m.chat, danied, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['build <bangunan>', 'upgrade <bangunan>']
handler.tags = ['rpg']
handler.owner = false
handler.command = /^(build|bangun|upgd|upgrade)$/i
module.exports = handler