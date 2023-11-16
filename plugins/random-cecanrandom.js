let fs = require('fs')

let handler = async (m, { conn, text, command }) => {
  
  const path = './database/Cecan'
  let china = readFile(path + '/china.json')
  let indo = readFile(path + '/indonesia.json')
  let japan = readFile(path + '/japan.json')
  let korea = readFile(path + '/korea.json')
  let malay = readFile(path + '/malaysia.json')
  let vietnam = readFile(path + '/vietnam.json')
  let thailand = readFile(path + '/thailand.json')
  
  const sendFile = (media) => {
    conn.sendFile(m.chat, media, 'cecan.jpg', 'Nih kak!', m)
  }
  
  if (/^(ch?ina)$/i.test(command)) {
    sendFile(pickRandom(china))
  }
  if ( /^(indo(nesia)?)$/i.test(command)) {
    sendFile(pickRandom(indo))
  }
  if ( /^(j(epang|apan))$/i.test(command)) {
    sendFile(pickRandom(japan))
  }
  if (/^(korean?)$/i.test(command)) {
    sendFile(pickRandom(korea))
  }
  if (/^(malay(sia)?)$/i.test(command)) {
    sendFile(pickRandom(malay))
  }
  if (/^(vietnam)$/i.test(command)) {
    sendFile(pickRandom(vietnam))
  }
  if (/^(thai(land)?)$/i.test(command)) {
    sendFile(pickRandom(thailand))
  }
}
handler.help = ['china', 'indo', 'jepang', 'korea', 'malaysia', 'thailand', 'vietnam']
handler.tags = ['random']
handler.command = /^(ch?ina|indo(nesia)?|j(epang|apan)|korean?|malay(sia)?|vietnam|thai(land)?)$/i

handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function readFile(path) {
  return JSON.parse(fs.readFileSync(path))
}