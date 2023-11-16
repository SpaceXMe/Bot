let { MessageType } = require('@adiwajshing/baileys');
let fs = require('fs')

const mny = 200
const utang = 600
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.db.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let botol = global.wm
    let __timers = (new Date() - global.db.data.users[m.sender].lastbansos)
    let _timers = (1800000 - __timers) 
    let timers = clockString(_timers)
    let user = global.db.data.users[m.sender]
    if (new Date() - global.db.data.users[m.sender].lastbansos > 1800000) {
      if (Aku > Kamu) {
        conn.reply(m.chat, `Kamu Tertangkap Setelah Kamu korupsi dana bansos,  Dan kamu harus membayar denda $200 USD`, m)
        user.money -= mny * 1
        global.db.data.users[m.sender].lastbansos = new Date() * 1
      } else if (Aku < Kamu) {
        user.money += mny * 1
        conn.reply(m.chat, `Kamu berhasil korupsi dana bansos,  Dan kamu mendapatkan $200 USD`, m)
        global.db.data.users[m.sender].lastbansos = new Date() * 1
      } else {
        conn.reply(m.chat, `Sorry Gan Lu g Berhasil Korupsi bansos Dan Tidak masuk penjara karna kamu *melarikan diri🏃💨*\nSekarang Lu jadi buronan Polisi🚔`, m)
        
        var delay = time => new Promise(res => setTimeout(res, time))
        var pol = `
Ninuninu kamu telah ditangkap dan kamu didenda $600 USD karena berusaha melarikan diri
`
        var pol2 = `
${await conn.getName(m.sender)} telah lolos dari kejaran Polisi tetapi kamu tidak mendapatkan apapun wkwk :v
`
        var array = [pol, pol2]
        let hasile = pickRandom(array)
        let sue = getRandom(5,20)

        await delay(1000 * 60 * sue)
        if (hasile == pol) {
          m.reply(pol)
          global.db.data.users[m.sender].money -= utang * 1
          global.db.data.users[m.sender].lastbansos = new Date() * 1
        } else if (hasile == pol2)
          return m.reply(pol2)
          global.db.data.users[m.sender].lastbansos = new Date() * 1
      }
    } else {
      conn.reply(m.chat, `Kamu sudah Melakukan Korupsi Bansos\nDan kamu harus menunggu selama:\n\n▸ 🕓 *${timers}*`, m)
    }
  } catch (e) {
    throw `${e}`
  }
}

handler.help = ['bansos']
handler.tags = ['rpg']
handler.command = /^(bansos|korupsi)$/i
handler.premium = false
handler.limit = true
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
