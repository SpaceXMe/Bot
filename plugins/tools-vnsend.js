const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `Masukkan kata kunci!\n\nContoh: *${usedPrefix + command} kuru*`, '0@s.whatsapp.net', 'Ketik *#listvn* untuk melihat list vn', '0@s.whatsapp.net')
  let audioFolder = './mp3'
  let audioName = `${text}.opus`
  let audioPath = path.join(audioFolder, audioName)

  if (!fs.existsSync(audioPath)) {
    let audioFiles = fs.readdirSync(audioFolder)
    let audioFile = audioFiles.find(file => file.toLowerCase() === audioName.toLowerCase())
    if (!audioFile) return m.reply(`Audio *${text}* tidak ditemukan!.`)
    audioName = audioFile
    audioPath = path.join(audioFolder, audioName)
  }
	conn.chatRead(m.chat)
	m.react(pickRandom(['🗿', '🥶', '☠️', '🐔', '🐦']))
  let audioBuffer = fs.readFileSync(audioPath)
  conn.sendFile(m.chat, audioBuffer, audioName, '', m)
}

handler.help = ['send']
handler.tags = ['fun', 'tools']
handler.command = /^(send|sendvn)$/i;

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}