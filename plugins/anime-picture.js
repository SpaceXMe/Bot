let fs = require('fs')
let fetch = require('node-fetch')
let { pickRandom } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, { react: { text: wmoji, key: m.key }})
  let type = command.toLowerCase()
  switch(type) {
    case 'loli':
      let res = JSON.parse(fs.readFileSync('./database/Anime/loli.json'))
      await conn.sendFile(m.chat, pickRandom(res), '', 'Huuu pedo\n\n#pukulpedo', m)
      conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/pedo.mp3'), mimetype: 'audio/mp4', ptt: true }, { quoted: m })
      break
    case 'waifu':
      let waifu = await fetch('https://api.waifu.pics/sfw/waifu')
      if (!waifu.ok) throw await waifu.text()
      let waifudata = await waifu.json()
      if (!waifudata.url) throw 'Maaf anda belum beruntung'
      conn.sendFile(m.chat, waifudata.url, 'image.jpg', `✅ Random Waifu`, m)
      break
    case 'megumin':
      let megumin = await fetch('https://api.waifu.pics/sfw/megumin')
      if (!megumin.ok) throw await megumin.text()
      let megumindata = await megumin.json()
      if (!megumin.url) throw 'Maaf anda belum beruntung'
      conn.sendFile(m.chat, megumindata.url, 'image.jpg', `✅ Random Megumin`, m)
      break
    case 'neko':
      let neko = await fetch('https://api.waifu.pics/sfw/neko')
      if (!neko.ok) throw await neko.text()
      let nekodata = await neko.json()
      if (!nekodata.url) throw 'Maaf anda belum beruntung'
      conn.sendFile(m.chat, nekodata.url, 'image.jpg', '✅ Random Neko', m)
      break
    case 'elaina':
    case 'sagiri':
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/random/${command.toLowerCase()}?apikey=${global.lolhuman}`, 'image.jpg', `✅ Random ${capitalizeFirstLetter(command)}`, m)
      break
    case 'miku':
    case 'animemiku':
      let miku = JSON.parse(fs.readFileSync('./database/Anime/miku.json'))
      conn.sendFile(m.chat, pickRandom(miku), 'image.jpg', '✅ Miku', m)
      break
    case 'animerandom':
    case 'randomanime':
      let animerandom = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await animerandom.text()
let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await conn.sendFile(m.chat, cita, 'anime.jpg', 'Nih kak ≧﹏≦', m)
    break
  case 'waifu2':
    conn.sendFile(m.chat, pickRandom(hwaifu), 'image.jpg', '✅ Random Waifu2', m)
    break
  case 'cosplay':
    let cosplay = JSON.parse(fs.readFileSync('./database/Anime/cosplay.json'))
    conn.sendFile(m.chat, pickRandom(cosplay), 'image.jpg', '✅ Random Cosplay', m)
    break
    default:
  }
}
handler.help = ['loli', 'waifu', 'megumin', 'neko', 'elaina', 'miku', 'randomanime', 'waifu2', 'sagiri', 'cosplay']
handler.tags = ['anime']
handler.command = /^(loli|waifu|megumin|neko|elaina|miku|animemiku|animerandom|randomanime|waifu2|sagiri|cosplay)$/i
handler.limit = true
module.exports = handler

function capitalizeFirstLetter(word) {
  if (typeof word !== 'string') {
    throw new Error('Input harus berupa string.');
  }
  if (word.length === 0) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}