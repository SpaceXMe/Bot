let handler = async (m, { conn, args, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  if (/makanan|food|stock|persediaan/i.test(command)) {
let str = `
        ${kki} *Stock Makanan* ${kka}
        
• *Stamina:* ${(user.stamina <= 5) ? user.stamina + ' 😴' : user.stamina + ' ⚡'}

*🍖 Ayam Bakar:* ${user.ayambakar}
*🍗 Ayam Goreng:* ${user.ayamgoreng}
*🍵 Opor Ayam:* ${user.oporayam}
*🥩 Steak:* ${user.steak}
*🥘 Rendang:* ${user.rendang}
*🍲 Gulai Ayam:* ${user.gulai}
*🥓 Babi Panggang:* ${user.babipanggang}
*🐟 Ikan Bakar:* ${user.ikanbakar}
*🐟 Lele Bakar:* ${user.lelebakar}
*🐟 Nila Bakar:* ${user.nilabakar}
*🐟 Bawal Bakar:* ${user.bawalbakar}
*🍤 Udang Bakar:* ${user.udangbakar}
*🐋 Paus Bakar:* ${user.pausbakar}
*🦀 Kepiting Bakar:* ${user.kepitingbakar}

Ketik:
*${usedPrefix}makan* untuk memulihkan stamina
`
conn.reply(m.chat, str, m)
  }
  if (/makan|eat/i.test(command)) {
let mess = `
*List Makanan Yang Tersedia*

1. ${user.ayambakar == 0 ? 'Persediaan habis' : '🍖 Ayam Bakar'}
2. ${user.ayamgoreng == 0 ? 'Persediaan habis' : '🍗 Ayam Goreng'}
3. ${user.oporayam == 0 ? 'Persediaan habis' : '🍵 Opor Ayam'}
4. ${user.steak == 0 ? 'Persediaan habis' : '🥩 Steak'}
5. ${user.rendang == 0 ? 'Persediaan habis' : '🥘 Rendang'}
6. ${user.gulai == 0 ? 'Persediaan habis' : '🍲 Gulai Ayam'}
7. ${user.babipanggang == 0 ? 'Persediaan habis' : '🥓 Babi Panggang'}
8. ${user.ikanbakar == 0 ? 'Persediaan habis' : '🐟 Ikan Bakar'}
9. ${user.lelebakar == 0 ? 'Persediaan habis' : '🐟 Lele Bakar'}
10. ${user.nilabakar == 0 ? 'Persediaan habis' : '🐟 Nila Bakar'}
11. ${user.bawalbakar == 0 ? 'Persediaan habis' : '🐟 Bawal Bakar'}
12. ${user.udangbakar == 0 ? 'Persediaan habis' : '🍤 Udang Bakar'}
13. ${user.pausbakar == 0 ? 'Persediaan habis' : '🐋 Paus Bakar'}
14. ${user.kepitingbakar == 0 ? 'Persediaan habis' : '🦀 Kepiting Bakar'}

Penggunaan:
*#makan <nomor>*

Jika persediaan habis ketik:
*#cook*
`
    switch (type) {
      case '1':
      case 'ayambakar':
        if (user.ayambakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 10
            user.ayambakar -= 1
            m.reply('+ 10 Stamina\n- 1 Ayam Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Ayam Bakar*\nKetik *${usedPrefix}cook ayambakar*`, m)
        break
      case '2':
      case 'ayamgoreng':
        if (user.ayamgoreng > 0) {
          if (user.stamina < 100) {
            user.stamina += 10
            user.ayamgoreng -= 1
            m.reply('+ 10 Stamina\n- 1 Ayam Goreng')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Ayam Goreng*\nKetik *${usedPrefix}cook ayamgoreng*`, m)
        break
            case '3':
      case 'oporayam':
        if (user.oporayam > 0) {
          if (user.stamina < 100) {
            user.stamina += 10
            user.oporayam -= 1
            m.reply('+ 10 Stamina\n- 1 Opor Ayam')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Opor Ayam*\nKetik *${usedPrefix}cook oporayam*`, m)
        break
            case '4':
      case 'steak':
        if (user.steak > 0) {
          if (user.stamina < 100) {
            user.stamina += 20
            user.steak -= 1
            m.reply('+ 20 Stamina\n- 1 Steak')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Steak*\nKetik *${usedPrefix}cook steak*`, m)
        break
      case '5':
      case 'rendang':
        if (user.rendang > 0) {
          if (user.stamina < 100) {
            user.stamina += 20
            user.rendang -= 1
            m.reply('+ 20 Stamina\n- 1 Rendang')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Rendang*\nKetik *${usedPrefix}cook rendang*`, m)
        break
            case '6':
      case 'gulai':
      case 'gulaiayam':
        if (user.gulai > 0) {
          if (user.stamina < 100) {
            user.stamina += 15
            user.gulai -= 1
            m.reply('+ 15 Stamina\n- 1 Gulai Ayam')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Gulai Ayam*\nKetik *${usedPrefix}cook gulaiayam*`, m)
        break
      case '7':
      case 'babipanggang':
        if (user.babipanggang > 0) {
          if (user.stamina < 100) {
            user.stamina += 25
            user.babipanggang -= 1
            m.reply('+ 25 Stamina\n- 1 Babi Panggang')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Babi Panggang*\nKetik *${usedPrefix}cook babipanggang*\n\nTidak halal:v*`, m)
        break
      case '8':
      case 'ikanbakar':
        if (user.ikanbakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 15
            user.ikanbakar -= 1
            m.reply('+ 15 Stamina\n- 1 Ikan Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Ikan Bakar*\nKetik *${usedPrefix}cook ikanbakar*`, m)
        break
            case '9':
      case 'lele':
      case 'lelebakar':
        if (user.lelebakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 15
            user.lelebakar -= 1
            m.reply('+ 15 Stamina\n- 1 Lele Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Lele Bakar*\nKetik *${usedPrefix}cook lelebakar*`, m)
        break
      case '10':
      case 'nila':
      case 'nilabakar':
        if (user.nilabakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 15
            user.nilabakar -= 1
            m.reply('+ 15 Stamina\n- 1 Nila Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Nila Bakar*\nKetik *${usedPrefix}cook nilabakar*`, m)
        break
      case '11':
      case 'bawal':
      case 'bawalbakar':
        if (user.bawalbakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 15
            user.bawalbakar -= 1
            m.reply('+ 15 Stamina\n- 1 Bawal Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Bawal Bakar*\nKetik *${usedPrefix}cook bawalbakar*`, m)
        break
            case '12':
      case 'udang':
      case 'udangbakar':
        if (user.udangbakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 10
            user.udangbakar -= 1
            m.reply('+ 10 Stamina\n- 1 Udang Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Udang Bakar*\nKetik *${usedPrefix}cook udangbakar*`, m)
        break
      case '13':
      case 'paus':
      case 'pausbakar':
        if (user.pausbakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 50
            user.pausbakar -= 1
            m.reply('+ 50 Stamina\n- 1 Paus Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Paus Bakar*\nKetik *${usedPrefix}cook pausbakar*`, m)
        break
      case '14':
      case 'kepiting':
      case 'kepitingbakar':
        if (user.kepitingbakar > 0) {
          if (user.stamina < 100) {
            user.stamina += 25
            user.kepitingbakar -= 1
            m.reply('+ 25 Stamina\n- 1 Kepiting Bakar')
          } else conn.reply(m.chat, 'Stamina kamu masih penuh!', m)
        } else conn.reply(m.chat, `Kamu belum cook *Kepiting Bakar*\nKetik *${usedPrefix}cook kepitingbakar*`, m)
        break
          default:
            m.reply(mess)
    }
  }
}
handler.help = ['persediaan', 'eat <type>']
handler.tags = ['rpg']
handler.command = /^(makan|eat|food|makanan|persediaan|stock)$/i

module.exports = handler