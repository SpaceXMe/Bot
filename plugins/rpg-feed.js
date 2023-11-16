let handler = async (m, { conn, args, usedPrefix }) => {
let prefi = pickRandom(preff)
let pesan = pickRandom(['Nyumm~', 'Makasih', 'Terima Kasih ^-^', '...', 'Nyawww~', 'Arigattou ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'rubah' ? '🦊':'' || type == 'kucing' ? '🐈':'' || type == 'asu' ? '🐕':'' || type == 'kuda' ? '🐴':'' || type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'anjing' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'kyubi' ? '🐖':'' || type == 'griffin' ? '🦚':'' || type == 'phonix' ? '🦅':'' || type == 'naga' ? '🐉':'' || type == 'dragon' ? '🐉':'' || type == 'centaur' ? '🐛':'' || type == 'serigala' ? '🐺':'' || type == 'wolf' ? '🐺':'' )
    let capitalizeType = capitalize(type)
    let user = global.db.data.users[m.sender]
    let pet = global.db.data.users[m.sender].pet
    let anjing = global.db.data.users[m.sender].anjing
    let kucing = global.db.data.users[m.sender].kucing
    let rubah = global.db.data.users[m.sender].rubah
    let serigala = global.db.data.users[m.sender].serigala
    let naga = global.db.data.users[m.sender].naga
    let kuda = global.db.data.users[m.sender].kuda
    let phonix = global.db.data.users[m.sender].phonix
    let griffin = global.db.data.users[m.sender].griffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let centaur = global.db.data.users[m.sender].centaur
    let str = `
• *LIST PET*

🐶 ${prefi} Anjing
🐱 ${prefi} Kucing
🦊 ${prefi} Rubah
🐺 ${prefi} Serigala
🐴 ${prefi} Kuda
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
• *SPECIAL PET*

🦖 ${(user.kyubi > 0) ? '✓' : '✗'} Kyubi
🦅 ${(user.phonix > 0) ? '✓' : '✗'} Phonix
🦚 ${(user.griffin > 0) ? '✓' : '✗'} Griffin
🦄 ${(user.centaur > 0) ? '✓' : '✗'} Centaur
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

• Usage example: *${usedPrefix}feed kyubi*
`
    switch (type) {
        case 'rubah': case 'fox':
            if (rubah == 0) return m.reply(`Kamu belum mempunyai pet ini!!\n\nKetik *${usedPrefix}petshop* untuk membeli pet...`)
            if (rubah == 10) return m.reply(`Pet kamu sudah Level Max!!\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru..`)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.makananpet > 0) {
                    user.makananpet -= 1
                    user.anakrubah += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`Feeding *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.anakrubah > naiklvl) {
                            user.rubah += 1
                            user.anakrubah -= (rubah * 100)
                            m.reply(`*Level Up*\n\n*Selamat!* Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`Cooldown\n\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktur}*`)
            break
        case 'kucing': case 'cat':
            if (kucing == 0) return m.reply(`Kamu belum mempunyai pet ini!!\n\nKetik *${usedPrefix}petshop* untuk membeli pet...`)
            if (kucing == 10) return m.reply(`Pet kamu sudah Level Max!!\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru..`)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.makananpet > 0) {
                    user.makananpet -= 1
                    user.anakkucing += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.anakkucing > naiklvl) {
                            user.kucing += 1
                            user.anakkucing -= (kucing * 100)
                            m.reply(`*Level Up*\n\n*Selamat!* Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`Level Up\nPet Kamu Udah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktuc}*`)
            break
        case 'dog': case 'asu': case 'anjing':
            if (anjing == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!\n\nKetik *${usedPrefix}petshop* untuk membeli pet`)
            if (anjing == 10) return m.reply(`*Level Max*!!\nPet Kamu Sudah Level Max'\n\nKetik ${usedPrefix}petshop untuk membeli pet baru`)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.makananpet > 0) {
                    user.makananpet -= 1
                    user.anakanjing += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.anakanjing > naiklvl) {
                            user.anjing += 1
                            user.anakanjing -= (anjing * 100)
                            m.reply(`*Level Up*\n*Selamat!* Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu SUdah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktua}*`)
            break
        case 'horse': case 'kuda':
            if (kuda == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (kuda == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.makananpet > 0) {
                    user.makananpet -= 1
                    user.anakkuda += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.anakkuda > naiklvl) {
                            user.kuda += 1
                            user.anakkuda -= (kuda * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktuk}*`)
            break
        case 'kyubi':
            if (kyubi == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (kyubi == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktub = (new Date - user.kyubilastfeed)
            let _waktub = (600000 - __waktub)
            let waktub = clockString(_waktub)
            if (new Date - user.kyubilastfeed > 600000) {
                if (user.makanankyubi > 0) {
                    user.makanankyubi -= 1
                    user.anakkyubi += 20
                    user.kyubilastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 100) - 1)
                        if (user.anakkyubi > naiklvl) {
                            user.kyubi += 1
                            user.anakkyubi -= (kyubi * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktub}*`)
            break
        case 'griffin':
            if (griffin == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (griffin == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktud = (new Date - user.griffinlastfeed)
            let _waktud = (600000 - __waktud)
            let waktud = clockString(_waktud)
            if (new Date - user.griffinlastfeed > 600000) {
                if (user.makanangriffin > 0) {
                    user.makanangriffin -= 1
                    user.anakgriffin += 20
                    user.griffinlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 100) - 1)
                        if (user.anakgriffin > naiklvl) {
                            user.griffin += 1
                            user.anakgriffin -= (griffin * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktud}*`)
            break
        case 'centaur':
            if (centaur == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop centaur* untuk membeli Centaur`)
            if (centaur == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktuz = (new Date - user.centaurlastfeed)
            let _waktuz = (600000 - __waktuz)
            let waktuz = clockString(_waktuz)
            if (new Date - user.centaurlastfeed > 600000) {
                if (user.makanancentaur > 0) {
                    user.makanancentaur -= 1
                    user.anakcentaur += 20
                    user.centaurlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 100) - 1)
                        if (user.anakcentaur > naiklvl) {
                            user.centaur += 1
                            user.anakcentaur -= (centaur * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`Pet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktuz}*`)
            break
        case 'phonix':
            if (phonix == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (phonix == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktue = (new Date - user.phonixlastfeed)
            let _waktue = (600000 - __waktue)
            let waktue = clockString(_waktue)
            if (new Date - user.phonixlastfeed > 600000) {
                if (user.makananphonix > 0) {
                    user.makananphonix -= 1
                    user.anakphonix += 20
                    user.phonixlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 100) - 1)
                        if (user.anakphonix > naiklvl) {
                            user.phonix += 1
                            user.anakphonix -= (phonix * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktue}*`)
            break
        case 'naga': case 'dragon':
            if (naga == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (naga == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktuf = (new Date - user.dragonlastfeed)
            let _waktuf = (600000 - __waktuf)
            let waktuf = clockString(_waktuf)
            if (new Date - user.dragonlastfeed > 600000) {
                if (user.makanannaga > 0) {
                    user.makanannaga -= 1
                    user.anaknaga += 20
                    user.dragonlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (naga > 0) {
                        let naiklvl = ((naga * 100) - 1)
                        if (user.anaknaga > naiklvl) {
                            user.naga += 1
                            user.anaknaga -= (naga * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`*Level Up*\nPet Kamu Sudah Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktuf}*`)
            break
        case 'serigala': case 'wolf':
            if (serigala == 0) return m.reply(`Kamu Belum Mempunyai Pet Ini!'\n\nKetik *${usedPrefix} petshop* untuk membeli pet`)
            if (serigala == 10) return m.reply(`*Level Max*\nPet Kamu Sudah Level Max\n\nKetik *${usedPrefix}petshop* untuk membeli pet baru`)
            let __waktug = (new Date - user.wolflastfeed)
            let _waktug = (600000 - __waktug)
            let waktug = clockString(_waktug)
            if (new Date - user.wolflastfeed > 600000) {
                if (user.makananserigala > 0) {
                    user.makananserigala -= 1
                    user.anakserigala += 20
                    user.wolflastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${capitalizeType}*...\n*${emo} :* ${pesan}`)
                    if (serigala > 0) {
                        let naiklvl = ((serigala * 100) - 1)
                        if (user.anakserigala > naiklvl) {
                            user.serigala += 1
                            user.anakserigala -= (serigala * 100)
                            m.reply(`*Level Up*\n*Selamat!*, Pet Kamu Naik Level`)
                        }
                    }
                } else m.reply(`Makanan Pet Kamu Tidak Ada Atau Habis`)
            } else m.reply(`Pet Kamu Masih Kenyang, Kamu Bisa Memberi Makan Pet Lagi Dalam Waktu\n*${waktug}*`)
            break
        default:
            return m.reply(str)
    }
}
handler.help = ['feed']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i
handler.limit = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
function capitalize(str) {

  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
