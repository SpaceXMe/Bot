let { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  let pickaxe = global.db.data.users[m.sender].pickaxe || 0
  let sword = global.db.data.users[m.sender].sword || 0
  let fishingrod = global.db.data.users[m.sender].pancingan || 0
  let botol = global.wm

let lgocraft = `
*${htki} Repair ${htka}*

▧ Pickaxe 
▧ Sword 
▧ Fishingrod 

${htki} *Pickaxe* ${htka}
〉 50 Kayu
〉 30 Batu
〉 30 Iron
〉 1 Diamond

${htki} *Sword* ${htka}
〉 50 Kayu
〉 90 Iron
〉 1 Diamond

${htki} *Armor* ${htka}
〉 150 Iron
〉 5 Diamond

╭━╼──『 *REPAIR A TOOLS* 』
│🗡️ 𝚂𝚠𝚘𝚛𝚍
│⛏️ 𝙿𝚒𝚌𝚔𝚊𝚡𝚎
│🛡️ 𝙰𝚛𝚖𝚘𝚛
╰━━━━━━┄┄┄┄┄┄┄┄♷

Contoh:
➣ *${usedPrefix}repair sword*
`.trim()

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.pickaxe == 0) return m.reply(`Kamu belum memiliki Pickaxe!\nKetik *${usedPrefix}craft pickaxe* untuk membuat *Pickaxe*`)
            if(user.diamond < 1 || user.batu < 30 || user.kayu < 50 || user.iron < 30 ) return m.reply(`Bahan tidak cukup! Membutuhkan setidaknya\n\n*50 Kayu*\n*30 Batu*\n*30 Iron*\n*1 Diamond*`)
            let _repair1 = `${Math.floor(Math.random() * 100)}`.trim()
            let repair1 = (_repair1 * 1)
             user.batu -= 30
             user.kayu -= 50
             user.iron -= 30
             user.diamond -= 1
             user.pickaxedurability += repair1 * 1
            m.reply(`Sukses memperbaiki Pickaxe!\n\n*+${repair1} Durability*`)
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.sword == 0) return m.reply(`Kamu belum memiliki Sword!\nKetik *${usedPrefix}craft sword* untuk membuat *Sword*`)
            if(user.diamond < 1 || user.kayu < 50 || user.iron < 90 ) return m.reply(`Bahan tidak cukup! Membutuhkan setidaknya\n\nKayu ${user.kayu}/50\nIron ${user.iron}/90\nDiamon ${user.diamond}/1`)
            let _repair2 = `${Math.floor(Math.random() * 100)}`.trim()
            let repair2 = (_repair2 * 1)
             user.kayu -= 50
             user.iron -= 90
             user.diamond -= 1
             user.sworddurability += repair2 * 1
            m.reply(`Sukses memperbaiki Sword!\n\n*+${repair2} Durability*`)
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply(`Kamu belum memiliki Armor!\nKetik *${usedPrefix}craft armor* untuk membuat *Armor*`)
            if(user.diamond < 5 || user.iron < 150 ) return m.reply(`Barang tidak cukup! Membutuhkan setidaknya\n\n150 Iron\n5 Diamond`)
            let _repair3 = `${Math.floor(Math.random() * 100)}`.trim()
            let repair3 = (_repair3 *1)
             user.iron -= 150
             user.diamond -= 5
             user.armordurability += repair3 * 1
            m.reply(`Sukses memperbaiki Armor!\n\n*+${repair3} Durability*`)
            break
          default:
            return await conn.reply(m.chat, lgocraft, 0)
        }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)$/i

module.exports = handler