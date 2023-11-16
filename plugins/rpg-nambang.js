const timeout = 28800000

let handler = async (m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender]
    let _pickaxe = global.db.data.users[m.sender].pickaxedurability
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let time = global.db.data.users[m.sender].lastnambang + 28800000
    
    if (pickaxe == 0) return m.reply(`Kamu belum mempunyai Pickaxe! Silahkan craft dulu dengan mengetik\n\n*${usedPrefix}craft pickaxe*`)
    if (_pickaxe < 10) return m.reply(`Durability Pickaxe kamu dibawah 10! silahkan repair dulu dengan mengetik\n\n*${usedPrefix}repair pickaxe*`)
    if (user.stamina < 10) return conn.fakeReply(m.chat, 'Stamina kamu rendah!', '0@s.whatsapp.net', '*#eat* untuk memulihkan stamina', 'status@broadcast')
    
    if (new Date - global.db.data.users[m.sender].lastnambang < 28800000) throw `Kamu sudah menambang\nMohon tunggu selama ${msToTime(time - new Date())} lagi`
  
    if (pickaxe == 1 && _pickaxe > 10) {
        let berlians = `${Math.floor(Math.random() * 3)}`.trim()
        let emasbiasas = `${Math.floor(Math.random() * 4)}`.trim()
        let emasbatangs = `${Math.floor(Math.random() * 3)}`.trim()
        let coals = `${Math.floor(Math.random() * 7)}`.trim()
        let durability1 = `${Math.floor(Math.random() * 30)}`.trim()
        
        global.db.data.users[m.sender].berlian += berlians * 1
        global.db.data.users[m.sender].emas += emasbiasas * 1
        global.db.data.users[m.sender].diamond += emasbatangs * 1
        global.db.data.users[m.sender].tiketcoin += 1
        global.db.data.users[m.sender].coal += coals * 1
        global.db.data.users[m.sender].pickaxedurability -= durability1 * 1
        global.db.data.users[m.sender].lastnambang = new Date * 1
        
        m.reply(`Selamat kamu mendapatkan : \n+${berlians} Berlian\n+${emasbiasas} Emas\n+${emasbatangs} Diamond\n+${coals} Coal\n\n+1 Tiketcoin\n-${durability1} Durability Pickaxe\n\nSemakin tinggi Level Pickaxe kamu semakin tinggi juga hasil mining yang didapat (。-\`ω´-)`)
        
        setTimeout(() => {
            conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
        }, timeout)
    }
    
    if (pickaxe == 2 && _pickaxe > 10) {
        let berliana = `${Math.floor(Math.random() * 10)}`.trim()
        let emasbiasaa = `${Math.floor(Math.random() * 14)}`.trim()
        let emasbatanga = `${Math.floor(Math.random() * 10)}`.trim()
        let coala = `${Math.floor(Math.random() * 12)}`.trim()
        let durability2 = `${Math.floor(Math.random() * 25)}`.trim()
        
        global.db.data.users[m.sender].berlian += berliana * 1
        global.db.data.users[m.sender].emas += emasbiasaa * 1
        global.db.data.users[m.sender].diamond += emasbatanga * 1
        global.db.data.users[m.sender].tiketcoin += 2
        global.db.data.users[m.sender].coal += coala * 1
        global.db.data.users[m.sender].pickaxedurability = durability2 * 1
        global.db.data.users[m.sender].lastnambang = new Date * 1
        
        m.reply(`Selamat kamu mendapatkan : \n+${berliana} Berlian\n+${emasbiasaa} Emas\n+${emasbatanga} Diamond\n+${coala} Coal\n\n+2 Tiketcoin\n-${durability2} Durability Pickaxe\n\nSemakin tinggi Level Pickaxe kamu semakin tinggi juga hasil mining yang didapat (。-\`ω´-)`)
        
        setTimeout(() => {
            conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
        }, timeout)
    }
    
    if (pickaxe == 3 && _pickaxe > 10) {
        let berlianq = `${Math.floor(Math.random() * 20)}`.trim()
        let emasbiasaq = `${Math.floor(Math.random() * 25)}`.trim()
        let emasbatangq = `${Math.floor(Math.random() * 20)}`.trim()
        let coalq = `${Math.floor(Math.random() * 20)}`.trim()
        let durability3 = `${Math.floor(Math.random() * 20)}`.trim()
        
        global.db.data.users[m.sender].berlian += berlianq * 1
        global.db.data.users[m.sender].emas += emasbiasaq * 1
        global.db.data.users[m.sender].diamond += emasbatangq * 1
        global.db.data.users[m.sender].tiketcoin += 3
        global.db.data.users[m.sender].coal += coalq * 1
        global.db.data.users[m.sender].pickaxedurability -= durability3 * 1
        global.db.data.users[m.sender].lastnambang = new Date * 1
        
        m.reply(`Selamat kamu mendapatkan : \n+${berlianq} Berlian\n+${emasbiasaq} Emas\n+${emasbatangq} Diamond\n+${coalq} Coal\n\n+3 Tiketcoin\n-${durability3} Durability Pickaxe\n\nSemakin tinggi Level Pickaxe kamu semakin tinggi juga hasil mining yang didapat (。-\`ω´-)`)
        
        setTimeout(() => {
            conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
        }, timeout)
    }
    
    if (pickaxe == 4 && _pickaxe > 10) {
        let berliand = `${Math.floor(Math.random() * 30)}`.trim()
        let emasbiasad = `${Math.floor(Math.random() * 35)}`.trim()
        let emasbatangd = `${Math.floor(Math.random() * 30)}`.trim()
        let coald = `${Math.floor(Math.random() * 30)}`.trim()
        let durability4 = `${Math.floor(Math.random() * 15)}`.trim()
        
        global.db.data.users[m.sender].berlian += berliand * 1
        global.db.data.users[m.sender].emas += emasbiasad * 1
        global.db.data.users[m.sender].diamond += emasbatangd * 1
        global.db.data.users[m.sender].tiketcoin += 4
        global.db.data.users[m.sender].coal += coald * 1
        global.db.data.users[m.sender].pickaxedurability -= durability4 * 1
        global.db.data.users[m.sender].lastnambang = new Date * 1
        
        m.reply(`Selamat kamu mendapatkan : \n+${berliand} Berlian\n+${emasbiasad} Emas\n+${emasbatangd} Diamond\n+${coald} Coal\n\n+4 Tiketcoin\n-${durability4} Durability Pickaxe\n\nSemakin tinggi Level Pickaxe kamu semakin tinggi juga hasil mining yang didapat (。-\`ω´-)`)
        
        setTimeout(() => {
            conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
        }, timeout)
    }
    
    if (pickaxe == 5 && _pickaxe > 10) {
        let berliank = `${Math.floor(Math.random() * 40)}`.trim()
        let emasbiasak = `${Math.floor(Math.random() * 45)}`.trim()
        let emasbatangk = `${Math.floor(Math.random() * 40)}`.trim()
        let coalk = `${Math.floor(Math.random() * 35)}`.trim()
        let durability5 = `${Math.floor(Math.random() * 10)}`.trim()
        
        global.db.data.users[m.sender].berlian += berliank * 1
        global.db.data.users[m.sender].emas += emasbiasak * 1
        global.db.data.users[m.sender].diamond += emasbatangk * 1
        global.db.data.users[m.sender].tiketcoin += 5
        global.db.data.users[m.sender].coal += coalk * 1
        global.db.data.users[m.sender].pickaxedurability -= durability5 * 1
        global.db.data.users[m.sender].lastnambang = new Date * 1
        
        m.reply(`Selamat kamu mendapatkan : \n+${berliank} Berlian\n+${emasbiasak} Emas\n+${emasbatangk} Diamond\n+${coalk} Coal\n\n+5 Tiketcoin\n-${durability5} Durability Pickaxe\n\nSemakin tinggi Level Pickaxe kamu semakin tinggi juga hasil mining yang didapat (。-\`ω´-)`)
        
        setTimeout(() => {
            conn.reply(m.chat, `Waktunya nambang lagi kak 😅`, m)
        }, timeout)
    }
}

handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang|mining)/i
handler.group = true

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100)
    seconds = Math.floor((duration / 1000) % 60)
    minutes = Math.floor((duration / (1000 * 60)) % 60)
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return hours + " jam " + minutes + " menit " + seconds + " detik"
}
