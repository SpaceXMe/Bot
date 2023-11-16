let handler = (m, { conn, usedPrefix, command, text }) => {
try {
      let user = global.db.data.users[m.sender]
      let ktimer = (new Date - user.lastkoboy)
      let _ktimer = (1800000 - ktimer)
      let __ktimer = clockString(_ktimer)
      let pluru = `*Peluru* kamu *${user.peluru}* memerlukan setidaknya *10 Peluru* untuk melakukan misi koboy`
      let weapon = `Kamu belum memiliki senjata!\nKetik *${usedPrefix}buy weapon* untuk mendapatkan senjata`
        if (new Date - user.lastkoboy > 1800000) {
        if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat*`)
        if (user.weapon > 0) {
        if (user.peluru > 0) {
  conn.tembak = conn.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {

    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kiri[0]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kiri[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kiri[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kiri[3]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")



    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.reply(m.chat, pos + ` \n*${usedPrefix}koboy tembak*`, m)
    
    return conn.reply(m.chat, pos + ` \n\n*${usedPrefix}koboy kiri*\n*${usedPrefix}koboy kanan*`, m)
    
  } else if(/kanan/i.test(command)) {

    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(conn.tembak.tembak.indexOf("🤠") == 0) {
      conn.tembak.tembak = kanan[1]
    } else if(conn.tembak.tembak.indexOf("🤠") == 1) {
      conn.tembak.tembak = kanan[2]
    } else if(conn.tembak.tembak.indexOf("🤠") == 2) {
      conn.tembak.tembak = kanan[3]
    } else if(conn.tembak.tembak.indexOf("🤠") == 3) {
      conn.tembak.tembak = kanan[4]
    } else if(conn.tembak.tembak.indexOf("🤠") == 4) {
      conn.tembak.tembak = kanan[4]
    }

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")



    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.reply(m.chat, pos + ` \n\n*${usedPrefix}koboy tembak*`, m)
    
    return conn.reply(m.chat, pos + ` \n\n*${usedPrefix}koboy kiri*\n*${usedPrefix}koboy kanan*`, m)
  } else if(/tembak/i.test(text)) {

    if(conn.tembak.tembak.indexOf("🤠") == conn.tembak.musuh.indexOf("🥷")) {
      conn.tembak = {}
      global.db.data.users[m.sender].money += 25
      m.reply("Kamu menang!\n\nUang + $25")
    }

  } else {
   let randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
   let randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    let musuh = random(randMusuh)
   let aku = random(randAku)

    conn.tembak.musuh = musuh
    conn.tembak.tembak = aku

    let pos = conn.tembak.musuh.join(" ") + "\n\n\n" + conn.tembak.tembak.join(" ")

    if(conn.tembak.musuh.indexOf("🥷") === conn.tembak.tembak.indexOf("🤠")) return conn.reply(m.chat, pos + ` \n\n*${usedPrefix}koboy tembak*`, m)
    
    return conn.reply(m.chat, pos + ` \n\n*${usedPrefix}koboy kiri*\n*${usedPrefix}koboy kanan*`,m)
      }
     } else m.reply(pluru)
    } else m.reply(weapon)
   } else m.reply(`Kamu sudah melakukan misi, silahkan tunggu selama\n\n*${_ktimer}*`)
} catch (e) {
  m.reply(`Belum ada sesi koboy\nSilahkan ketik *${usedPrefix}koboy* untuk memulai koboy`)
  console.log(e)
  }
}
handler.help = ['koboy']
handler.tags = ['rpg']
handler.command = /^(koboy)/i

module.exports = handler

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return[h, m, s,].map(v => v.toString().padStart(2, 0)).join(':')
}