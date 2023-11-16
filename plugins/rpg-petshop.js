let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let tiket = global.db.data.users[m.sender].tiketcoin
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  
  let hcentaur = 50
  let hkyubi = 40
  let hgriffin = 30
  let hphonix = 30
  let hwolf = 25

let logo = `— *P E T   S T O R E* —

๛➣ 𝚃𝚒𝚔𝚎𝚝 𝙲𝚘𝚒𝚗 𝙺𝚊𝚖𝚞 : ${tiket}

▮▧▧▧▧▧▧▧▧▧▧▧▧▮
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖

*S P E C I A L*
*Centaur:* ${hcentaur} 🔖
*Kyubi:* ${hkyubi} 🔖
*Griffin:* ${hgriffin} 🔖
*Phonix:* ${hphonix} 🔖
*Wolf:* ${hwolf} 🔖

〉 *ABILITY*
Cooming Soon...

Contoh cara membeli:
*${usedPrefix}petshop kuda*`

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat': case 'kucing':
          if (user.cat > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hcat) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hcat
            global.db.data.users[m.sender].kucing += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'dog': case 'anjing': case 'asu':
          if (user.dog > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hdog) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hdog
            global.db.data.users[m.sender].anjing += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'fox': case 'rubah':
          if (user.fox > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hfox) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hfox
            global.db.data.users[m.sender].rubah += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
          case 'horse': case 'kuda':
          if (user.horse > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hhorse) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hhorse
            global.db.data.users[m.sender].kuda += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hcentaur) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hcentaur
            global.db.data.users[m.sender].centaur += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hkyubi) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hkyubi
            global.db.data.users[m.sender].kyubi += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hgriffin) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hgriffin
            global.db.data.users[m.sender].griffin += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hphonix) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hphonix
            global.db.data.users[m.sender].phonix += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            case 'wolf': case 'serigala':
          if (user.wolf > 0) return m.reply('Kamu sudah memilik ini')
            if(user.tiketcoin < hwolf) return m.reply(`Tiket Coin anda kurang`)
            global.db.data.users[m.sender].tiketcoin -= hwolf
            global.db.data.users[m.sender].serigala += 1
            m.reply("Selamat anda mempunyai pet Baru ! 🎉")
            break
            
          default:
            return await conn.sendMessage(m.chat, { text: logo }, { quoted: m })
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.reply( m.chat, `${logo}`, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['petshop']
handler.tags = ['rpg']
handler.command = /^(petshop)/i

module.exports = handler