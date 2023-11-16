let { currency, pickRandom, numberFormat } = require('../lib/myfunc')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let health = global.db.data.users[m.sender].health
    let armor = global.db.data.users[m.sender].armor 
   // let warn = global.db.data.users[m.sender].warn
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let diamond = global.db.data.users[m.sender].diamond
    let coal = global.db.data.users[m.sender].coal
    let potion = global.db.data.users[m.sender].potion
    let ramuan = global.db.data.users[m.sender].ramuan
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga
    let makananphonix = global.db.data.users[m.sender].makananphonix
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let apel = global.db.data.users[m.sender].apel
    let mangga = global.db.data.users[m.sender].mangga
    let pisang = global.db.data.users[m.sender].pisang
    let bibitanggur = global.db.data.users[m.sender].bibitanggur
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga
    let bibitpisang = global.db.data.users[m.sender].bibitpisang 
    let gardenboxs = global.db.data.users[m.sender].gardenboxs
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank
    let limit = global.db.data.users[m.sender].limit
    let cupon = global.db.data.users[m.sender].cupon
    let tiketcoin = global.db.data.users[m.sender].tiketcoin
    let tiketm = global.db.data.users[m.sender].healtmonster
    let aqua = global.db.data.users[m.sender].aqua
    let expg = global.db.data.users[m.sender].expg
    let boxs = global.db.data.users[m.sender].boxs
    let botol = global.db.data.users[m.sender].botol
    let kayu = global.db.data.users[m.sender].kayu 
    let batu = global.db.data.users[m.sender].batu
    let iron = global.db.data.users[m.sender].iron
    let sword = global.db.data.users[m.sender].sword
    let string = global.db.data.users[m.sender].string
    let kaleng = global.db.data.users[m.sender].kaleng
    let kardus = global.db.data.users[m.sender].kardus
    let berlian = global.db.data.users[m.sender].berlian
    let balance = global.db.data.users[m.sender].balance
    let emas = global.db.data.users[m.sender].emas
    let emaspro = global.db.data.users[m.sender].emasbatang
    let hero = global.db.data.users[m.sender].hero
    let exphero = global.db.data.users[m.sender].exphero
    let { max } = levelling.xpRange(level, exp, global.multiplier)
   // let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let name = m.sender
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersbalance = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
*「 🎒 ${await conn.getName(name)} 」*

*TOTAL ITEM: ${numberFormat(diamond + potion + ramuan + sampah + kayu + sword + iron + string + makananpet + makananphonix + makanannaga + makanangriffin + makanankyubi + makanancentaur)}*

╭╾────┄━━━───┈┈╼╀
│🤎 ʜᴇᴀʟᴛʜ: *${health}*
│🛡️ ᴀʀᴍᴏʀ: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
│💵 ᴍᴏɴᴇʏ: *${currency(money)}*
│🏧 ʙᴀɴᴋ: *${currency(bank)}*
│🌌 ʟɪᴍɪᴛ: *${numberFormat(limit)}*
│📧 ʟᴇᴠᴇʟ: *${numberFormat(level)}*
│✨ ᴇxᴘ: *${numberFormat(exp)}*
│⚖️ ᴄʀᴇᴅɪᴛ: *${numberFormat(balance)}*
│🎫 ᴄᴏᴜᴘᴏɴ: *${numberFormat(cupon)}*
│🪙 ᴇxᴘɢ: *${numberFormat(expg)}*
│🎴 ᴛɪᴄᴋᴇᴛᴍ: *${numberFormat(tiketm)}*
│🎟️ ᴛɪᴄᴋᴇᴛ ᴄᴏɪɴ: *${numberFormat(tiketcoin)}*
╰───────────────────㊒

❒───「 *INVENTORY* 」───❒
🧃 ʜᴇᴀʟᴇʀ: *${numberFormat(potion)}*
🧪 ᴘᴏᴛɪᴏɴ: *${numberFormat(ramuan)}*
⛓️ ɪʀᴏɴ: *${numberFormat(iron)}*
🕸️ sᴛʀɪɴɢ: *${numberFormat(string)}*
🗑️ ᴛʀᴀsʜ: *${numberFormat(sampah)}*
🪵 ᴡᴏᴏᴅ: *${numberFormat(kayu)}*
🪨 ʀᴏᴄᴋ: *${numberFormat(batu)}*
🍶 ᴀǫᴜᴀ: *${numberFormat(aqua)}*
🍖 ᴘᴇᴛ ғᴏᴏᴅ: *${numberFormat(makananpet)}*
🍱 ᴘʜᴏɴɪx ғᴏᴏᴅ: *${numberFormat(makananphonix)}*
🍱 ᴅʀᴀɢᴏɴ ғᴏᴏᴅ: *${numberFormat(makanannaga)}*
🍱 ɢʀɪғғɪɴ ғᴏᴏᴅ: *${numberFormat(makanangriffin)}*
🍱 ᴋʏᴜʙɪ ғᴏᴏᴅ: *${numberFormat(makanankyubi)}*
🍱 ᴄᴇɴᴛᴀᴜʀ ғᴏᴏᴅ: *${numberFormat(makanancentaur)}*

❒───「 *CRATE BOX* 」───❒
🗄️ ʙᴏxs: *${numberFormat(boxs)}*
📦 ᴄᴏᴍᴍᴏɴ: *${numberFormat(common)}*
🎁 ᴜɴᴄᴏᴍᴍᴏɴ: *${numberFormat(uncommon)}*
🗳️ ᴍʏᴛʜɪᴄ: *${numberFormat(mythic)}*
🗃️ ʟᴇɢᴇɴᴅᴀʀʏ: *${numberFormat(legendary)}*
🐹 ᴘᴇᴛ: *${numberFormat(pet)}*
🎍 ɢᴀʀᴅᴇɴ ʙᴏxs: *${numberFormat(gardenboxs)}*

❒───「 *FRUITS* 」───❒
🥭 ᴍᴀɴɢɢᴀ: *${numberFormat(mangga)}*
🍇 ᴀɴɢɢᴜʀ: *${numberFormat(anggur)}*
🍌 ᴘɪsᴀɴɢ: *${numberFormat(pisang)}*
🍊 ᴊᴇʀᴜᴋ: *${numberFormat(jeruk)}*
🍎 ᴀᴘᴇʟ: *${numberFormat(apel)}*

❒───「 *SEEDS* 」───❒
🌱🥭 ʙɪʙɪᴛ ᴍᴀɴɢɢᴀ: *${numberFormat(bibitmangga)}*
🌱🍇 ʙɪʙɪᴛ ᴀɴɢɢᴜʀ: *${numberFormat(bibitanggur)}*
🌱🍌 ʙɪʙɪᴛ ᴘɪsᴀɴɢ: *${numberFormat(bibitpisang)}*
🌱🍊 ʙɪʙɪᴛ ᴊᴇʀᴜᴋ: *${numberFormat(bibitjeruk)}*
🌱🍎 ʙɪʙɪᴛ ᴀᴘᴇʟ: *${numberFormat(bibitapel)}*

❒───「 *TRASH MAN* 」───❒
📦 ᴋᴀʀᴅᴜs: *${numberFormat(kardus)}*
🥫 ᴋᴀʟᴇɴɢ: *${numberFormat(kaleng)}*
🍼 ʙᴏᴛᴏʟ: *${numberFormat(botol)}*

❒───「 *MINING CHEST* 」───❒
💎 ᴅɪᴀᴍᴏɴᴅ: *${numberFormat(berlian)}*
🏅 ɢᴏʟᴅ: *${numberFormat(emas)}*
💍 ʙᴇʀʟɪᴀɴ: *${numberFormat(diamond)}*
🕳️ ᴄᴏᴀʟ: *${numberFormat(coal)}*

❒───「 *HERO* 」───❒
ᴍʏ ʜᴇʀᴏ: *${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}*

❒───「 *PET* 」───❒
ᴄᴀᴛ: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
ʜᴏʀsᴇ: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
ᴅʀᴀɢᴏɴ: *${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level 5' : '' || naga == 6 ? 'Level 6' : '' || naga == 7 ? 'Level 7' : '' || naga == 8 ? 'Level 8' : '' || naga == 9 ? 'Level 9' : '' || naga == 10 ? 'Level 10' : '' || naga == 11 ? 'Level 11' : '' || naga == 12 ? 'Level 12' : '' || naga == 13 ? 'Level 13' : '' || naga == 14 ? 'Level 14' : '' || naga == 15 ? 'Level 15' : '' || naga == 16 ? 'Level 16' : '' || naga == 17 ? 'Level 17' : '' || naga == 18 ? 'Level 18' : '' || naga == 19 ? 'Level 19' : '' || naga == 20 ? 'Level MAX' : ''}*
ᴋʏᴜʙɪ: *${kyubi == 0 ? 'Tidak Punya' : '' || kyubi == 1 ? 'Level 1' : '' || kyubi == 2 ? 'Level 2' : '' || kyubi == 3 ? 'Level 3' : '' || kyubi == 4 ? 'Level 4' : '' || kyubi == 5 ? 'Level 5' : '' || kyubi == 6 ? 'Level 6' : '' || kyubi == 7 ? 'Level 7' : '' || kyubi == 8 ? 'Level 8' : '' || kyubi == 9 ? 'Level 9' : '' || kyubi == 10 ? 'Level 10' : '' || kyubi == 11 ? 'Level 11' : '' || kyubi == 12 ? 'Level 12' : '' || kyubi == 13 ? 'Level 13' : '' || kyubi == 14 ? 'Level 14' : '' || kyubi == 15 ? 'Level 15' : '' || kyubi == 16 ? 'Level 16' : '' || kyubi == 17 ? 'Level 17' : '' || kyubi == 18 ? 'Level 18' : '' || kyubi == 19 ? 'Level 19' : '' || kyubi == 20 ? 'Level MAX' : ''}*
ᴄᴇɴᴛᴀᴜʀ: *${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level 5' : '' || centaur == 6 ? 'Level 6' : '' || centaur == 7 ? 'Level 7' : '' || centaur == 8 ? 'Level 8' : '' || centaur == 9 ? 'Level 9' : '' || centaur == 10 ? 'Level 10' : '' || centaur == 11 ? 'Level 11' : '' || centaur == 12 ? 'Level 12' : '' || centaur == 13 ? 'Level 13' : '' || centaur == 14 ? 'Level 14' : '' || centaur == 15 ? 'Level 15' : '' || centaur == 16 ? 'Level 16' : '' || centaur == 17 ? 'Level 17' : '' || centaur == 18 ? 'Level 18' : '' || centaur == 19 ? 'Level 19' : '' || centaur == 20 ? 'Level MAX' : ''}*
ғᴏx: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*  
ᴘʜᴏɴɪx: *${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level 5' : '' || phonix == 6 ? 'Level 6' : '' || phonix == 7 ? 'Level 7' : '' || phonix == 8 ? 'Level 8' : '' || phonix == 9 ? 'Level 9' : '' || phonix == 10 ? 'Level 10' : '' || phonix == 11 ? 'Level 11' : '' || phonix == 12 ? 'Level 12' : '' || phonix == 13 ? 'Level 13' : '' || phonix == 14 ? 'Level 14' : '' || phonix == 15 ? 'Level MAX' : ''}*
ɢʀɪғғɪɴ: *${griffin == 0 ? 'Tidak Punya' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level 5' : '' || griffin == 6 ? 'Level 6' : '' || griffin == 7 ? 'Level 7' : '' || griffin == 8 ? 'Level 8' : '' || griffin == 9 ? 'Level 9' : '' || griffin == 10 ? 'Level 10' : '' || griffin == 11 ? 'Level 11' : '' || griffin == 12 ? 'Level 12' : '' || griffin == 13 ? 'Level 13' : '' || griffin == 14 ? 'Level 14' : '' || griffin == 15 ? 'Level MAX' : ''}*
ᴡᴏʟғ: *${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || serigala == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level 5' : '' || serigala == 6 ? 'Level 6' : '' || serigala == 7 ? 'Level 7' : '' || serigala == 8 ? 'Level 8' : '' || serigala == 9 ? 'Level 9' : '' || serigala == 10 ? 'Level 10' : '' || serigala == 11 ? 'Level 11' : '' || serigala == 12 ? 'Level 12' : '' || serigala == 13 ? 'Level 13' : '' || serigala == 14 ? 'Level 14' : '' || serigala == 15 ? 'Level MAX' : ''}*\n
❒───「 *PROGRESS* 」───❒
╭────────────────
│ʟᴇᴠᴇʟ *${level}* ᴛᴏ ʟᴇᴠᴇʟ *${level}*
│ᴇxᴘ *${exp}* -> *${max}*
│
│ʜᴇʀᴏ ${hero == 0 ? 'Tidak Punya' : '' || hero > 0 && hero < 40 ? `Level *${hero}* ᴛᴏ ʟᴇᴠᴇʟ *${hero + 1}*\n│ᴇxᴘ *${exphero}* -> *${hero *500}*` : '' || hero == 40 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ғᴏx: ${rubah == 0 ? '-' : '' || rubah > 0 && rubah < 5 ? `ʟᴇᴠᴇʟ *${rubah}* ᴛᴏ ʟᴇᴠᴇʟ *${rubah + 1}*\n│ᴇxᴘ *${_rubah}* -> *${rubah *1000}*` : '' || rubah == 5 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴄᴀᴛ: ${kucing == 0 ? '-' : '' || kucing > 0 && kucing < 5 ? `ʟᴇᴠᴇʟ *${kucing}* ᴛᴏ ʟᴇᴠᴇʟ *${kucing + 1}*\n│𝙴𝚡𝚙 *${_kucing}* -> *${kucing *1000}*` : '' || kucing == 5 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ʜᴏʀsᴇ: ${kuda == 0 ? '-' : '' || kuda > 0 && kuda < 5 ? `ʟᴇᴠᴇʟ *${kuda}* ᴛᴏ ʟᴇᴠᴇʟ *${kuda + 1}*\n│𝙴𝚡𝚙 *${_kuda}* -> *${kuda *1000}*` : '' || kuda == 5 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴅʀᴀɢᴏɴ: ${naga == 0 ? '-' : '' || naga > 0 && naga < 20 ? `ʟᴇᴠᴇʟ *${naga}* ᴛᴏ ʟᴇᴠᴇʟ *${naga + 1}*\n│𝙴𝚡𝚙 *${_naga}* -> *${naga *10000}*` : '' || naga == 20 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴘʜᴏɴɪx: ${phonix == 0 ? '-' : '' || phonix > 0 && phonix < 15 ? `ʟᴇᴠᴇʟ *${phonix}* ᴛᴏ ʟᴇᴠᴇʟ *${phonix + 1}*\n│𝙴𝚡𝚙 *${_phonix}* -> *${phonix *10000}*` : '' || phonix == 15 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴋʏᴜʙɪ: ${kyubi == 0 ? '-' : '' || kyubi > 0 && kyubi < 20 ? `ʟᴇᴠᴇʟ *${kyubi}* ᴛᴏ ʟᴇᴠᴇʟ *${kyubi + 1}*\n│𝙴𝚡𝚙 *${_kyubi}* -> *${kyubi *10000}*` : '' || kyubi == 20 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴄᴇɴᴛᴀᴜʀ: ${centaur == 0 ? '-' : '' || centaur > 0 && centaur < 20 ? `ʟᴇᴠᴇʟ *${centaur}* ᴛᴏ ʟᴇᴠᴇʟ *${centaur + 1}*\n│𝙴𝚡𝚙 *${_centaur}* -> *${centaur *10000}*` : '' || centaur == 20 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ɢʀɪғғɪɴ: ${griffin == 0 ? '-' : '' || griffin > 0 && griffin < 15 ? `ʟᴇᴠᴇʟ *${griffin}* ᴛᴏ ʟᴇᴠᴇʟ *${griffin + 1}*\n│𝙴𝚡𝚙 *${_griffin}* -> *${griffin *10000}*` : '' || griffin == 15 ? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
╭────────────────
│ᴡᴏʟғ: ${serigala == 0 ? '-' : '' || serigala > 0 && serigala < 15 ? `ʟᴇᴠᴇʟ *${serigala}* ᴛᴏ ʟᴇᴠᴇʟ *${serigala + 1}*\n│𝙴𝚡𝚙 *${_serigala}* -> *${serigala *10000}*` : '' || serigala == 15? '*ᴍᴀx ʟᴇᴠᴇʟ*' : ''}
╰────────────────
${readMore}
❒───「 *ACHIEVEMENT* 」───❒
1. ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${userslevel.length}*
2. ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
3. ᴛᴏᴘ ᴄʀᴇᴅɪᴛ *${usersbalance.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${usersbalance.length}*
4. ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
5. ᴛᴏᴘ ᴘᴏᴛɪᴏɴ *${userspotion.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${userspotion.length}*
6. ᴛᴏᴘ ᴄᴏᴍᴍᴏɴ *${userscommon.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${userscommon.length}*
7. ᴛᴏᴘ ᴜɴᴄᴏᴍᴍᴏɴ *${usersuncommon.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${usersuncommon.length}*
8. ᴛᴏᴘ ᴍʏᴛʜɪᴄ *${usersmythic.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${usersmythic.length}*
9. ᴛᴏᴘ ʟᴇɢᴇɴᴅᴀʀʏ *${userslegendary.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${userslegendary.length}*
10. ᴛᴏᴘ ᴛʀᴀsʜ *${userssampah.indexOf(m.sender) + 1}* ᴅᴀʀɪ *${userssampah.length}*
`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
mentions: [m.sender],
externalAdReply: {
showAdAttribution: true,
title: 'INVENTORY',
body: pickRandom(bodi),
sourceUrl: sig,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory|my)$/i
handler.limit = true
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)