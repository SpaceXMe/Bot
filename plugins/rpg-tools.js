let handler = async (m, { conn, usedPrefix }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let nama = await conn.getName(who)
    let user = global.db.data.users[who]
    
    let armor = global.db.data.users[m.sender].armor
    let _armor = global.db.data.users[m.sender].armordurability
    let sword = global.db.data.users[m.sender].sword
    let _sword = global.db.data.users[m.sender].sworddurability
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let _pickaxe = global.db.data.users[m.sender].pickaxedurability
    let fishingrod = global.db.data.users[m.sender]. pancingan
    let _fishingrod = global.db.data.users[m.sender].anakpancingan

let goo = `
${htki} *TOOLS* ${htka}

${zc} *Armor :* ${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
${zc} *Sword :* ${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Wood Sword' : '' || sword == 2 ? 'Stone Sword' : '' || sword == 3 ? 'Iron Sword' : '' || sword == 4 ? 'Gold Sword' : '' || sword == 5 ? 'Diamond Sword' : '' || sword == 6 ? 'Netherite Sword' : ''}
${zc} *Pickaxe :* ${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'Wood Pickaxe' : '' || pickaxe == 2 ? 'Stone Pickaxe' : '' || pickaxe == 3 ? 'Iron Pickaxe' : '' || pickaxe == 4 ? 'Gold Pickaxe' : '' || pickaxe == 5 ? 'Diamond Pickaxe' : '' || pickaxe == 6 ? 'Netherite Pickaxe' : ''}
${zc} *Fishingrod :* ${fishingrod == 0 ? 'Tidak Punya' : '' || fishingrod == 1 ? 'Normal Fishingrod' : '' || fishingrod == 2 ? 'Enchanted Fishingrod' : '' || fishingrod == 3 ? 'Lure Fishingrod' : '' || fishingrod == 4 ? 'Luck Of The Sea Fishingrod' : '' || fishingrod == 5 ? 'Legendary Fishingrod' : ''}

${htki} *DURABILITY* ${htka}

${htjava} *Armor:* ${user.armordurability}
${htjava} *Sword:* ${user.sworddurability}
${htjava} *Pickaxe:* ${user.pickaxedurability}
${htjava} *Fishingrod:* ${user.anakpancingan}

*Skill:* ${user.skill.replace(/^\w/, (c) => c.toUpperCase())}
*Umpan:* ${user.umpan}

${wm}
`.trim()
await conn.fakeReply(m.chat, goo, '0@s.whatsapp.net', `${user.registered ? user.name : nama}`, 'status@broadcast')
}
handler.help = ['tools']
handler.tags = ['rpg']
handler.command = /^(tools|tool)$/i

handler.register = true
handler.limit = true

module.exports = handler