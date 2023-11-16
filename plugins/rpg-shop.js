const { currency, numberFormat } = require('../lib/myfunc')

const potion = 200
const Spotion = 100
const Bdiamond = 500
const Sdiamond = 100
const Bcommon = 100
const Scommon = 10
const Suncommon = 10
const Buncommon = 250
const Bmythic = 1000
const Smythic = 100
const Blegendary = 2000
const Slegendary = 500
const Bsampah = 120
const Ssampah = 5
const Bkayu = 100
const Skayu = 40
const Bbotol = 30
const Sbotol = 50
const Bkaleng = 40
const Skaleng = 10
const Bkardus = 40
const Skardus = 50
const Bpisang = 30
const Spisang = 100
const Bmangga = 25
const Smangga = 15
const Bjeruk = 10
const Sjeruk = 5
const Banggur = 45
const Sanggur = 15
const Bapel = 40
const Sapel = 15
const Bbibitpisang = 55
const Sbibitpisang = 5
const Bbibitmangga = 55
const Sbibitmangga = 5
const Bbibitjeruk = 55
const Sbibitjeruk = 5
const Bbibitanggur = 55
const Sbibitanggur = 5
const Bbibitapel = 55
const Sbibitapel = 5
const Bgardenboxs = 6500
const Sgardenboc = 350
const Bberlian = 1500
const Sberlian = 100
const Bemasbatang = 2500
const Semasbatang = 100
const Bemasbiasa = 1500
const Semasbiasa = 150
const Bphonix = 1000
const Sphonix = 100
const Bgriffin = 1000
const Sgriffin = 100
const Bkyubi = 1000
const Skyubi = 100
const Bnaga = 1000
const Snaga = 100
const Bcentaur = 1000
const Scentaur = 100
const Bkuda = 500
const Skuda = 50
const Brubah = 100
const Srubah = 10
const Bkucing = 500
const Skucing = 50
const Bserigala = 500
const Sserigala = 50
const Bmakananpet = 500
const Smakananpet = 50
const Bmakananphonix = 80
const Smakananphonix = 30
const Bmakanangriffin = 80
const Smakanangriffin = 30
const Bmakanannaga = 90
const Smakanannaga = 45
const Bmakanankyubi = 90
const Smakanankyubi = 45
const Bmakanancentaur = 90
const Smakanancentaur = 45
const Bhealtmonster = 200
const Bpet = 150
const Spet = 10
const Blimit = 10
const Slimit = 5
const Bexp = 55
const Bnasgor = 5
const Bsoto = 6
const Besteh = 3
const Baqua = 5
const Saqua = 1
const Biron = 200
const Siron = 50
const Bstring = 50
const Sstring = 20
const Bsword = 250
const Ssword = 90
const Bumpan = 15
const Sumpan = 5
const Bpancingan = 500
const Spancingan = 50
const BBensin = 20
const BWeap = 300
const SWeap = 150
const SBensin = 5
const Bbatu = 50
const Sbatu = 10
const Bcoal = 25
const Scoal = 5
const Bketake = 15
const Btiketcoin = 50
const Bkoinexpg = 50
const Bcredit = 100
const BObat = 15
const ObatStock = 500
const Beleksirb = 500
const BnStock  = 9999
const WeapStock = 50
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 299999 : '' || _armor == 1 ? 589999 : '' || _armor == 2 ? 25099777 : '' || _armor == 3 ? 4999998 : '' || _armor == 4 ? 9999999 : '' || _armor > 4 ? 'Armor Sudah Max' : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `
➟ Penggunaan:
➟ *${usedPrefix}shop <buy|sell> <item> <jumlah>*

➫ Contoh penggunaan:
➫ *${usedPrefix}shop buy potion 1*

============================
*Kebutuhan   |  Harga Beli*
🌌 Limit:   *${currency(Blimit)}*
🎟️ TiketM:   *${currency(Bhealtmonster)}*
🎫 Cupon:   *${currency(Btiketcoin)}*
🪙 KoinExpg:  *${currency(Bkoinexpg)}*
💳 Credit:     *${currency(Bcredit)}*

*Kebutuhan   |  Harga Jual*
🌌 Limit:   *${currency(Slimit)}*
============================
*Bibit Buah   |  Harga Beli*
🍌 BibitPisang:     *${currency(Bbibitpisang)}*
🍇 BibitAnggur:    *${currency(Bbibitanggur)}*
🥭 BibitMangga:    *${currency(Bbibitmangga)}*
🍊 BibitJeruk:    *${currency(Bbibitjeruk)}*
🍎 BibitApel:    *${currency(Bbibitapel)}*
🎍Gardenboxs:  *${currency(Bgardenboxs)}*
============================
*Barang   |  Harga Beli*
🧃 Potion:       *${currency(potion)}*
💍 Diamond:    *${currency(Bdiamond)}*
📦 Common:   *${currency(Bcommon)}*
🎁 Uncommon: *${currency(Buncommon)}*
🗳️ Mythic:      *${currency(Bmythic)}*
🗃️ Legendary:  *${currency(Blegendary)}*
🗑️ Sampah:   *${currency(Bsampah)}*
🕸️ String:       *${currency(Bstring)}*
⛓️ Iron:       *${currency(Biron)}*
🗡️ Sword:     *${currency(Bsword)}*
🪨 Batu:       *${currency(Bbatu)}*
🕳️ Coal:       *${currency(Bcoal)}*
🍼 Botol:     *${currency(Bbotol)}*
🥫 Kaleng:    *${currency(Bkaleng)}*
📦 Kardus:    *${currency(Bkardus)}*
🪵 Kayu:      *${currency(Bkayu)}*
💎 Berlian:   *${currency(Bberlian)}*
🏅 Emas:    *${currency(Bemasbiasa)}*
⛽ Bensin:  *${currency(BBensin)} | Stock: ${numberFormat(BnStock)}*
🔫 Weapon: *${currency(BWeap)} | Stock: ${numberFormat(WeapStock)}*
💊 Obat:   *${currency(BObat)} | Stock: ${numberFormat(ObatStock)}*

*Barang   | Harga Jual*
🧃 Potion:     *${currency(Spotion)}*
💍 Diamond:   *${currency(Sdiamond)}*
📦 Common:   *${currency(Scommon)}*
🎁 Uncommon:  *${currency(Suncommon)}*
🗳️ Mythic:      *${currency(Smythic)}*
🗃️ Legendary:  *${currency(Slegendary)}*
🗑️ Sampah:    *${currency(Ssampah)}*
🕸️ String:      *${currency(Sstring)}*
⛓️ Iron:       *${currency(Siron)}*
🗡️ Sword:     *${currency(Ssword)}*
🪨 Batu:       *${currency(Sbatu)}*
🕳️ Coal:       *${currency(Scoal)}*
🍼 Botol:       *${currency(Sbotol)}*
🥫 Kaleng:       *${currency(Skaleng)}*
📦 Kardus:       *${currency(Skardus)}*
🪵 Kayu:        *${currency(Skayu)}*
💎 Berlian:       *${currency(Sberlian)}*
🏅 Emas:       *${currency(Semasbiasa)}*
⛽ Bensin: *${currency(SBensin)} | Stock: ${numberFormat(BnStock)}*
🔫 Weapon: *${currency(SWeap)} | Stock: ${numberFormat(WeapStock)}*
============================
*List Makanan:*

*Makanan | Harga Beli*
🍛 Nasi Goreng:   *${currency(Bnasgor)}*
🍌 Pisang:     *${currency(Bpisang)}*
🍇 Anggur:     *${currency(Banggur)}*
🥭 Mangga:    *${currency(Bmangga)}*
🍊 Jeruk:       *${currency(Bjeruk)}*
🍎 Apel:        *${currency(Bapel)}*
🍖 MakananPet:     *${currency(Bmakananpet)}*
🍱 MakananNaga:    *${currency(Bmakanannaga)}*
🍱 MakananKyubi:    *${currency(Bmakanankyubi)}*
🍱 MakananGriffin:    *${currency(Bmakanangriffin)}*
🍱 MakananPhonix:    *${currency(Bmakananphonix)}*
🍱 MakananCentaur:    *${currency(Bmakanancentaur)}*

*Makanan | Harga Jual*
🍌 Pisang:      *${currency(Spisang)}*
🍇 Anggur:       *${currency(Sanggur)}*
🥭 Mangga:      *${currency(Smangga)}*
🍊 Jeruk:       *${currency(Sjeruk)}*
🍎 Apel:       *${currency(Sapel)}*
🍖 MakananPet:     *${currency(Smakananpet)}*
🍱 MakananNaga     *${currency(Smakanannaga)}*
🍱 MakananKyubi:     *${currency(Smakanankyubi)}*
🍱 MakananGriffin:     *${currency(Smakanangriffin)}*
🍱 MakananPhonix:     *${currency(Smakananphonix)}*
🍱 MakananCentaur:    *${currency(Smakanancentaur)}*
============================
*Minuman | Harga Beli*
🍶 Aqua:     *${currency(Baqua)}*

*Minuman | Harga Jual*
🍶 Aqua:     *${currency(Saqua)}*
============================
*Fishing | Harga Beli*
🎣 Pancingan:     *${currency(Bpancingan)}*
🪱 Umpan:     *${currency(Bumpan)}*
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli *${count}* Potion dengan harga ${currency(potion * count)} money\n\nGunakan potion dengan ketik: *${usedPrefix}heal*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Potion dengan harga ${currency(potion * count)} money`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli *${count}* Diamond dengan harga ${Bdiamond * count} money`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli *${count}* Common crate dengan harga ${Bcommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                          
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli *${count}* Uncommon crate dengan harga ${Buncommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli *${count}* Mythic crate dengan harga ${Bmythic * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli *${count}* Legendary crate dengan harga ${Blegendary * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli *${count}* Sampah dengan harga ${Bsampah * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                        
                        break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].money >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].money -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli *${count}* Kaleng dengan harga ${Bkaleng * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Kaleng dengan harga ${Bkaleng * count} money`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].money >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].money -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli *${count}* Kardus dengan harga ${Bkardus * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Kardus dengan harga ${Bkardus * count} money`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].money >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].money -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli *${count}* Botol dengan harga ${Bbotol * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* botol dengan harga ${Bbotol * count} money`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli *${count}* Kayu dengan harga ${Bkayu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* kayu dengan harga ${Bkayu * count} money`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].money >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].money -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli *${count}* Pisang dengan harga ${Bpisang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* pisang dengan harga ${Bpisang * count} money`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].money >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].money -= Banggur * count
                                conn.reply(m.chat, `Succes membeli *${count}* Anggur dengan harga ${Banggur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* anggur dengan harga ${Banggur * count} money`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].money >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].money -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli *${count}* Mangga dengan harga ${Bmangga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* mangga dengan harga ${Bmangga * count} money`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].money >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].money -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli *${count}* Jeruk dengan harga ${Bjeruk * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* jeruk dengan harga ${Bjeruk * count} money`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Succes membeli *${count}* Apel dengan harga ${Bapel * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* apel dengan harga ${Bapel * count} money`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].money -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli *${count}* Bibit Pisang dengan harga ${Bbibitpisang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* bibit pisang dengan harga ${Bbibitpisang * count} money`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].money -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli *${count}* Bibit Anggur dengan harga ${Bbibitanggur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* bibit anggur dengan harga ${Bbibitanggur * count} money`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].money -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli *${count}* Bibit Mangga dengan harga ${Bbibitmangga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* bibit mangga dengan harga ${Bbibitmangga * count} money`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].money -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli *${count}* Bibit Jeruk dengan harga ${Bbibitjeruk * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* bibit jeruk dengan harga ${Bbibitjeruk * count} money`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].money -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli *${count}* Bibit Apel dengan harga ${Bbibitapel * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* bibit apel dengan harga ${Bbibitapel * count} money`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].money >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].money -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli *${count}* Gardenboxs dengan harga ${Bgardenboxs * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* gardenboxs dengan harga ${Bgardenboxs * count} money`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].money >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].money -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli *${count}* Berlian dengan harga ${Bberlian * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* berlian dengan harga ${Bberlian * count} money`.trim(), m)
                        
                        break
                    case 'bensin':
                            if (global.db.data.users[m.sender].money >= BBensin * count) {
                                global.db.data.users[m.sender].bensin += count * 1
                                global.db.data.users[m.sender].money -= BBensin * count
                                conn.reply(m.chat, `Succes membeli *${count}*L Bensin dengan harga ${BBensin * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Bensin dengan harga ${BBensin * count} money`.trim(), m)
                        
                        break
                        case 'weapon':
                            if (global.db.data.users[m.sender].money >= BWeap * count) {
                                global.db.data.users[m.sender].weapon += count * 1
                                global.db.data.users[m.sender].money -= BWeap * count
                                conn.reply(m.chat, `Succes membeli *${count}* Weapon dengan harga ${BWeap * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Weapon dengan harga ${BWeap * count} money`.trim(), m)
                        
                        break
                        case 'obat':
                            if (global.db.data.users[m.sender].money >= BObat * count) {
                                global.db.data.users[m.sender].obat += count * 1
                                global.db.data.users[m.sender].money -= BObat * count
                                conn.reply(m.chat, `Succes membeli *${count}* kapsul Obat dengan harga ${BObat * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* kapsul Obat dengan harga ${BObat * count} money`.trim(), m)
                        
                        break
                        
                    case 'emas':
                            if (global.db.data.users[m.sender].money >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].money -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli *${count}* Emas dengan harga ${Bemasbiasa * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* emas dengan harga ${Bemasbiasa * count} money`.trim(), m)
                        
                        break 
                     case 'pet':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                conn.reply(m.chat, `Succes membeli *${count}* Pet Random dengan harga ${Bpet * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* pet random dengan harga ${Bpet * count} money`.trim(), m)
                        
                        break
                   case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)}* Limit dengan harga *${currency(Blimit * count)}* money`, m)
                            } else conn.reply(m.chat, `Uang kamu tidak cukup untuk membeli *${numberFormat(count)}* limit dengan harga *${currency(Blimit * count)}* money`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].money >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].money -= Bexp * count
                                conn.reply(m.chat, `Succes membeli *${count}* Exp dengan harga ${Bexp * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* exp dengan harga ${Bexp * count} money`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].money >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].money -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli *${count}* Eleksir Biru dengan harga ${Beleksirb * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* Eleksir Biru dengan harga ${Beleksirb * count} money`.trim(), m)
                        
                        break*/
                        case 'nasgor':
                        case 'nasigoreng':
                            if (global.db.data.users[m.sender].money >= Bnasgor * count) {
                                global.db.data.users[m.sender].stamina += count * 20
                                global.db.data.users[m.sender].money = Bnasgor * count
                                conn.reply(m.chat, `Kamu telah membeli Nasi Goreng sebanyak *${count} porsi* dengan harga *${currency(Bnasgor * count)}*\n\n+${count * 20} stamina\n`, m)
                            } else conn.reply(m.chat, `Uang kamu tidak cukup untuk membeli *${count} porsi* Nasi Goreng dengan harga *${currency(Bnasgor * count)}*`,m)
                            
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].money >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].expg += count * 1
                                global.db.data.users[m.sender].money -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli *${count}* Koinexpg dengan harga *${currency(Bkoinexpg * count)}* money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${count}* koinexpg dengan harga *${currency(Bkoinexpg * count)}*`.trim(), m)
                        
                        break
                        case 'balance': case 'credit':
                            if (global.db.data.users[m.sender].money >= Bcredit * count) {
                                global.db.data.users[m.sender].balance += count * 1
                                global.db.data.users[m.sender].money -= Bcredit * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)} Credit* dengan harga *${currency(Bcredit * count)} Money*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${numberFormat(count)} Credit* dengan harga *${currency(Bcredit * count)} Money*`.trim(), m)
                        
                        break
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                  case 'makananpet':
                            if (global.db.data.users[m.sender].money >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} money`.trim(), m)
                        
                        break 
                case 'makanannaga':
                            if (global.db.data.users[m.sender].money >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].money -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan naga dengan harga ${Bmakanannaga * count} money`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].money >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].money -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan phonix dengan harga ${Bmakananphonix * count} money`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].money >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].money -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} money`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].money >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].money -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} money`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].money >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].money -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} money`.trim(), m)
                        
                        break 
                  case 'tiketm':
                            if (global.db.data.users[m.sender].money >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].money -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} money`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} money`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} money`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} money`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].money >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].money -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} money`.trim(), m)
                        
                        break 
                  case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} money`.trim(), m)
                        
                        break 
                  case 'coal':
                            if (global.db.data.users[m.sender].money >= Bcoal * count) {
                                global.db.data.users[m.sender].coal += count * 1
                                global.db.data.users[m.sender].money -= Bcoal * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)}* Coal dengan harga *${currency(Bcoal * count)}* money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${numberFormat(count)}* coal dengan harga *${currency(Bcoal * count)}* money`.trim(), m)
                        
                        break 
                    case 'umpan':
                            if (global.db.data.users[m.sender].money >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].money -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} money`.trim(), m)
                        
                        break 
                    case 'pancingan':
                            if (global.db.data.users[m.sender].money >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].money -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${currency(Bpancingan * count)} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${currency(Bpancingan * count)} money`.trim(), m)
                        
                        break
                    /*case 'armor':
                            if (global.db.data.users[m.sender].armor > 0) return conn.reply(m.chat, `Kamu sudah punya Armor!\nUpgrade Armor kamu dengan mengetik *${usedPrefix}upgrade armor*`, m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                            } else conn.reply(m.chat, `Uang mu tidak cukup untuk membeli armor seharga Rp... ${numberFormat(armor)} money`, m)
                        
                        break*/
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].money += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} money`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].money += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} money`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].money += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} money`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} money`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} money`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m)
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} money`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} money`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} money`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} money`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                   case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].money += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} money`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].money += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas , dan anda mendapatkan ${Semasbiasa * count} money`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break  
                   case 'bensin':
                        if (global.db.data.users[m.sender].bensin >= count * 1) {
                            global.db.data.users[m.sender].bensin -= count * 1
                            global.db.data.users[m.sender].money += SBensin * count
                            conn.reply(m.chat, `Succes menjual ${count} bensin , dan anda mendapatkan ${SBensin * count} money`, m)
                        } else conn.reply(m.chat, `Bensin anda tidak cukup`, m)  
                        break  
                   case 'weapon':
                        if (global.db.data.users[m.sender].weapon >= count * 1) {
                            global.db.data.users[m.sender].weapon -= count * 1
                            global.db.data.users[m.sender].money += SWeap * count
                            conn.reply(m.chat, `Succes menjual ${count} Weapon , dan anda mendapatkan ${SWeap * count} money`, m)
                        } else conn.reply(m.chat, `Weapon anda tidak cukup`, m)  
                        break  
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].money += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} money`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                    case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].money += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} money`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                    case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].money += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} money`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].money += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} money`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].money += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} money`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].money += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} money`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break 
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].money += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} money`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].money += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} money`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].money += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} money`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} money`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].money += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} money`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].money += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} money`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} money`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'coal':
                        if (global.db.data.users[m.sender].coal >= count * 1) {
                            global.db.data.users[m.sender].coal -= count * 1
                            global.db.data.users[m.sender].money += Scoal * count
                            conn.reply(m.chat, `Succes menjual ${count} coal, dan anda mendapatkan *${currency(Scoal * count)}* money`, m)
                        } else conn.reply(m.chat, `Coal anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].money += Slimit * count
                            conn.reply(m.chat, `Succes menjual *${numberFormat(count)}* limit, dan anda mendapatkan *${currency(Slimit * count)}* money`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}heal*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                    
                    break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].money >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].money -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga ${Bkaleng * count} money`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].money >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].money -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga ${Bkardus * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga ${Bkardus * count} money`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].money >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].money -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga ${Bbotol * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} botol dengan harga ${Bbotol * count} money`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].kayu += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga ${Bkayu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} kayu dengan harga ${Bkayu * count} money`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].money >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].money -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga ${Bpisang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pisang dengan harga ${Bpisang * count} money`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].money >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].money -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga ${Banggur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} anggur dengan harga ${Banggur * count} money`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].money >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].money -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga ${Bmangga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} mangga dengan harga ${Bmangga * count} money`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].money >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].money -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga ${Bjeruk * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} jeruk dengan harga ${Bjeruk * count} money`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bapel * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} apel dengan harga ${Bapel * count} money`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].money -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga ${Bbibitpisang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit pisang dengan harga ${Bbibitpisang * count} money`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].money -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga ${Bbibitanggur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit anggur dengan harga ${Bbibitanggur * count} money`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].money -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga ${Bbibitmangga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit mangga dengan harga ${Bbibitmangga * count} money`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].money -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga ${Bbibitjeruk * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit jeruk dengan harga ${Bbibitjeruk * count} money`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].money -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} bibit apel dengan harga ${Bbibitapel * count} money`.trim(), m)
                        
                        break 
                    case 'gardenboxs':
                            if (global.db.data.users[m.sender].money >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].money -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga ${Bgardenboxs * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} gardenboxs dengan harga ${Bgardenboxs * count} money`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].money >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].money -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga ${Bberlian * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} berlian dengan harga ${Bberlian * count} money`.trim(), m)
                        
                        break
                    case 'emas':
                            if (global.db.data.users[m.sender].money >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].emas += count * 1
                                global.db.data.users[m.sender].money -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga ${Bemasbiasa * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} emas dengan harga ${Bemasbiasa * count} money`.trim(), m)
                        
                        break  
                     case 'pet':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga ${Bpet * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pet random dengan harga ${Bpet * count} money`.trim(), m)
                        
                        break
                  case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)}* Limit dengan harga *${currency(Blimit * count)}* money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${numberFormat(count)}* limit dengan harga *${currency(Blimit * count)}* money`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].money >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].money -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} exp dengan harga ${Bexp * count} money`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].money >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].money -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga ${Beleksirb * count} money`.trim(), m)
                        
                        break*/
                  case 'nasgor':
                  case 'nasigoreng':
                            if (global.db.data.users[m.sender].money >= Bnasgor * count) {
                                global.db.data.users[m.sender].stamina += count * 20
                                global.db.data.users[m.sender].money = Bnasgor * count
                                conn.reply(m.chat, `Kamu telah membeli Nasi Goreng sebanyak *${count} porsi* dengan harga *${currency(Bnasgor * count)}*\n\n+${count * 20} stamina\n`, m)
                            } else conn.reply(m.chat, `Uang kamu tidak cukup untuk membeli *${count} porsi* Nasi Goreng dengan harga *${currency(Bnasgor * count)}*`,m)
                            
                        break
                  case 'koinexpg':
                            if (global.db.data.users[m.sender].money >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].expg += count * 1
                                global.db.data.users[m.sender].money -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga *${currency(Bkoinexpg * count)}*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} koinexpg dengan harga *${currency(Bkoinexpg * count)}*`.trim(), m)
                        
                        break
                  case 'balance': case 'credit':
                            if (global.db.data.users[m.sender].money >= Bcredit * count) {
                                global.db.data.users[m.sender].balance += count * 1
                                global.db.data.users[m.sender].money -= Bcredit * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)} Credit* dengan harga *${currency(Bcredit * count)} Money*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${numberFormat(count)} Credit* dengan harga *${currency(Bcredit * count)} Money*`.trim(), m)
                            
                        break
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break 
                 case 'makananpet':
                            if (global.db.data.users[m.sender].money >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga ${Bmakananpet * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananpet * count} money`.trim(), m)
                        
                        break
                case 'makanannaga':
                            if (global.db.data.users[m.sender].money >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].money -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga ${Bmakanannaga * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakanannaga * count} money`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].money >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].money -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga ${Bmakananphonix * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan pet dengan harga ${Bmakananphonix * count} money`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].money >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].money -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga ${Bmakanankyubi * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan kyubi dengan harga ${Bmakanankyubi * count} money`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].money >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].money -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga ${Bmakanangriffin * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan griffin dengan harga ${Bmakanangriffin * count} money`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].money >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].money -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga ${Bmakanancentaur * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} makanan centaur dengan harga ${Bmakanancentaur * count} money`.trim(), m)
                        
                        break 
                case 'tiketm':
                            if (global.db.data.users[m.sender].money >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].money -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga ${Bhealtmonster * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tiketm dengan harga ${Bhealtmonster * count} money`.trim(), m)
                        
                        break
                  case 'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga ${Baqua * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} aqua dengan harga ${Baqua * count} money`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga ${Biron * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} iron dengan harga ${Biron * count} money`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga ${Bstring * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} string dengan harga ${Bstring * count} money`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].money >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].money -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga ${Bsword * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} sword dengan harga ${Bsword * count} money`.trim(), m)
                        
                        break
                  case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].batu += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga ${Bbatu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} batu dengan harga ${Bbatu * count} money`.trim(), m)
                        
                        break 
                  case 'coal':
                            if (global.db.data.users[m.sender].money >= Bcoal * count) {
                                global.db.data.users[m.sender].coal += count * 1
                                global.db.data.users[m.sender].money -= Bcoal * count
                                conn.reply(m.chat, `Succes membeli *${numberFormat(count)}* Coal dengan harga *${currency(Bcoal * count)}* money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli *${numberFormat(count)}* coal dengan harga *${currency(Bcoal * count)}* money`.trim(), m)
                        
                        break 
                 case 'umpan':
                            if (global.db.data.users[m.sender].money >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].money -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga ${Bumpan * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} umpan dengan harga ${Bumpan * count} money`.trim(), m)
                        
                        break
                    case 'pancingan':
                            if (global.db.data.users[m.sender].money >= Bpancingan * count) {
                                global.db.data.users[m.sender].pancingan += count * 1
                                global.db.data.users[m.sender].money -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga ${Bpancingan * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} pancingan dengan harga ${Bpancingan * count} money`.trim(), m)
                        
                        break
                /*case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money`, m)
                    
                    break*/
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].money += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} kaleng, dan anda mendapatkan ${Skaleng * count} money`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].money += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} kardus, dan anda mendapatkan ${Skardus * count} money`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].money += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} botol, dan anda mendapatkan ${Sbotol * count} money`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].kayu >= count * 1) {
                            global.db.data.users[m.sender].kayu -= count * 1
                            global.db.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} kayu, dan anda mendapatkan ${Skayu * count} money`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} pisang, dan anda mendapatkan ${Spisang * count} money`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m) 
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} anggur, dan anda mendapatkan ${Sanggur * count} money`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} mangga, dan anda mendapatkan ${Smangga * count} money`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} jeruk, dan anda mendapatkan ${Sjeruk * count} money`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} apel, dan anda mendapatkan ${Sapel * count} money`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                    case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].money += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan ${Sberlian * count} money`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break
                   case 'emas':
                        if (global.db.data.users[m.sender].emas >= count * 1) {
                            global.db.data.users[m.sender].emas -= count * 1
                            global.db.data.users[m.sender].money += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} emas, dan anda mendapatkan ${Semasbiasa * count} money`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break
                    case 'pet':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].money += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} pet random, dan anda mendapatkan ${Spet * count} money`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                 case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].money += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan pet, dan anda mendapatkan ${Smakananpet * count} money`, m)
                        } else conn.reply(m.chat, `Makanan pet anda tidak cukup`, m)
                        break 
                case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].money += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan naga, dan anda mendapatkan ${Smakanannaga * count} money`, m)
                        } else conn.reply(m.chat, `Makanan naga anda tidak cukup`, m)
                        break
                 case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].money += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan phonix, dan anda mendapatkan ${Smakananphonix * count} money`, m)
                        } else conn.reply(m.chat, `Makanan phonix anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].money += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan kyubi, dan anda mendapatkan ${Smakanankyubi* count} money`, m)
                        } else conn.reply(m.chat, `Makanan kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].money += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan griffin, dan anda mendapatkan ${Smakanangriffin * count} money`, m)
                        } else conn.reply(m.chat, `Makanan griffin anda tidak cukup`, m)
                        break
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].money += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} makanan centaur, dan anda mendapatkan ${Smakanancentaur * count} money`, m)
                        } else conn.reply(m.chat, `Makanan centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].money += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} aqua, dan anda mendapatkan ${Saqua * count} money`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].pancingan >= count * 1) {
                            global.db.data.users[m.sender].pancingan -= count * 1
                            global.db.data.users[m.sender].money += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Spancingan * count} money`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} pancingan, dan anda mendapatkan ${Siron * count} money`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].money += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} string, dan anda mendapatkan ${Sstring * count} money`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].money += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} sword, dan anda mendapatkan ${Ssword * count} money`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} money`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'coal':
                        if (global.db.data.users[m.sender].coal >= count * 1) {
                            global.db.data.users[m.sender].coal -= count * 1
                            global.db.data.users[m.sender].money += Scoal * count
                            conn.reply(m.chat, `Succes menjual *${numberFormat(count)}* coal, dan anda mendapatkan *${currency(Scoal * count)}* money`, m)
                        } else conn.reply(m.chat, `Coal anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].money += Slimit * count
                            conn.reply(m.chat, `Succes menjual *${numberFormat(count)}* limit, dan anda mendapatkan *${currency(Slimit * count)}* money`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].money += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual *${count}* Diamond, dan anda mendapatkan *${currency(Sdiamond * count)} money*`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
handler.limit = false
module.exports = handler