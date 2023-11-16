let handler = async (m, { conn, command, args, usedPrefix }) => { 
    try { 
        let user = global.db.data.users[m.sender]
        let kayu = user.kayu * 1
        let batu = user.batu * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.pancingan * 1
        let armor = user.armor * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let type = (args[0] || '').toLowerCase()
        let prefix = usedPrefix
        
        let cap = `
List untuk bisa di *Upgrade*!
${rpg.emoticon('fishingrod')} FishingRod
${rpg.emoticon('pickaxe')} Pickaxe
${rpg.emoticon('sword')} Sword
${rpg.emoticon('armor')} Armor

Gunakan Format *${usedPrefix}${command} [type]*
contoh *${usedPrefix}${command} fishingrod*
`.trim()

        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    let lmao = `Anda belum memiliki *🎣FishingRod*
untuk mendapatkannya ketik *${usedPrefix}craft fishingrod*`
                    return conn.reply(m.chat, lmao, m)
                }
                if (fishingrod > 4) return conn.reply(m.chat, `*${rpg.emoticon('fishingrod')}FishingRod* kamu sudah level max`, m)
                let _kayu = fishingrod * 25
                let _string = fishingrod * 15
                let _money = fishingrod * 10
                if (kayu < _kayu || string < _string || money < _money) return conn.reply(m.chat, `Material kamu kurang!!${kayu < _kayu ? `\n${rpg.emoticon('wood')}Kayu Kamu Kurang *${_kayu - kayu}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *$${_money - money}*` : ''}`, m)
                user.pancingan += 1
                user.kayu -= _kayu * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.anakpancingan = 0 
                user.anakpancingan += fishingrod * 50
                conn.reply(m.chat, `Succes mengupgrade *${rpg.emoticon('fishingrod')}FishingRod*`, m)
                break
            case 'armor':
                if (armor == 0) {
                    let lmao = `Anda belum memiliki *🥼Armor*
untuk mendapatkannya ketik *${usedPrefix}craft armor*`
                    return conn.reply(m.chat, lmao, m)
                }
                if (armor > 4) return conn.reply(m.chat, `*${rpg.emoticon('rock')}Armor* kamu sudah level max`, m)
                let ikayu = armor * 25
                let iiron = armor * 15
                let imoney = armor * 80
                if (kayu < ikayu || iron < iiron || money < imoney) return conn.reply(m.chat, `Material kamu kurang!!${kayu < ikayu ? `\n${rpg.emoticon('wood')}Kayu Kamu Kurang *${ikayu - kayu}*` : ''}${iron < iiron ? `\n${rpg.emoticon('iron')}Iron Kamu Kurang *${iiron - iron}*` : ''}${user.money < imoney ? `\n${rpg.emoticon('money')}Uang Kamu Kurang *$${imoney - money}*` : ''}`, m)
                user.armor += 1
                user.kayu -= ikayu * 1
                user.iron -= iiron * 1
                user.money -= imoney * 1
                user.armordurability = 0 
                user.armordurability += armor * 50
                conn.reply(m.chat, `Succes mengupgrade *${rpg.emoticon('armor')}Armor*`, m)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('pickaxe')}Pickaxe*
untuk memilikinya ketik *${usedPrefix}craft Pickaxe*`
                    return conn.reply(m.chat, lmao, m)
                }
                if (pickaxe > 4) return conn.reply(m.chat, `*${rpg.emoticon('pickaxe')}Pickaxe* kamu sudah level max!!`, m)
                let __batu = pickaxe * 25
                let __kayu = pickaxe * 15
                let __money = pickaxe * 30
                if (batu < __batu || kayu < __kayu || money < __money) return conn.reply(m.chat, `
Material Anda Kurang!!
${batu < __batu ? `\n${rpg.emoticon('rock')}Batu kamu kurang *${__batu - batu}*` : ''}${kayu < __kayu ? `\n${rpg.emoticon('wood')}Kayu kamu kurang *${__kayu - kayu}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Uang kamu kurang *$${__money - money}*` : ''}`, m)
                user.pickaxe += 1
                user.kayu -= __kayu * 1
                user.batu -= __batu * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                conn.reply(m.chat, `Succes mengupgrade *${rpg.emoticon('pickaxe')}Pickaxe*`, m)
                break
            case 'sword':
                if (sword == 0) {
                    let lmao = `anda belum memiliki *${rpg.emoticon('sword')}Sword*
untuk memilikinya ketik *${usedPrefix}craft sword*`
                    return conn.reply(m.chat, lmao, m)
                }
                if (sword > 4) return conn.reply(m.chat, `*${rpg.emoticon('sword')}Sword* kamu sudah level max!!`, m)
                let _iron = sword * 25
                let ___kayu = sword * 15
                let ___money = sword * 25
                if (iron < _iron || kayu < ___kayu || money < ___money) return conn.reply(m.chat, `
Material Anda Kurang!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Iron kamu kurang *${_iron - iron}*` : ''}${kayu < ___kayu ? `\n${rpg.emoticon('wood')}Kayu kamu kurang *${___kayu - kayu}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Uang kamu kurang *$${___money - money}*` : ''}`, m)
                user.sword += 1
                user.iron -= _iron * 1
                user.kayu -= ___kayu * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                conn.reply(m.chat, `Succes mengupgrade *${rpg.emoticon('sword')}Sword*`, m)
                break
            default :
                return conn.reply(m.chat, cap, m)
        }
    } catch (e) {
        console.log(e)
        throw e
    }
}
handler.help = ['enchant <tools>']
handler.tags = ['rpg']
handler.command = /^(up|enchant)$/i

handler.limit = true
handler.fail = null

module.exports = handler
