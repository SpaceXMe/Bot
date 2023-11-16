let handler = async(m, { conn, args, usedPrefix }) => {

let __waktutionskh = (new Date - global.db.data.users[m.sender].lastlink)
let _waktutionskh = (86800000 - __waktutionskh)
let waktutionskh = clockString(_waktutionskh)
if (new Date - global.db.data.users[m.sender].lastlink > 86800000) {
global.db.data.users[m.sender].lastlink = new Date * 1
let codeh = ['736390','882910','882010','715611','002819','562622','432282','322929','662522','443321','937100','762837','028393','625529','727638','992719','092739','727269','629461','239210']
let getRandom = codeh[Math.floor(Math.random() * codeh.length)]
      conn.reply(m.chat, `Selamat kamu mendapatkan hadiah 🎉\nMasukan *${usedPrefix}codeshortlink ${getRandom}*\n\n*-Owner*`, m)
} else m.reply(`Kamu sudah mengambil gethadiah\nHarap tunggu ${waktutionskh} lagi`)
}
handler.help = ['gethadiah']
handler.tags = ['rpgabsen']
handler.command = /^(gethadiah)$/i
handler.limit = false
handler.private = false

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}