let fetch = require('node-fetch')
let axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Mau ngobrol bentar kak?\n\n    ｀・ω・´', '0@s.whatsapp.net', `Contoh *${usedPrefix + command} hai*`, '6282225201437@s.whatsapp.net')
switch (command) {
    case 'simi':
    case 'simih':
    case 'simi1':
    case 'chatbot':
    try {
      let sim = await simsimi(text)
      conn.reply(m.chat, capitalize(sim), m)
    } catch (e) {
      console.log(e)
      m.reply(`Maaf terjadi error\nSilahkan gunakan *${usedPrefix}simi2*`)
    }
    break
    case 'simi2':
    case 'simih2':
    try {
  let res2 = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=${global.lolhuman}&text=${text}&badword=true`)
  let json = await res2.json()
  m.reply(json.result)
  } catch (e) {
    console.log(e)
    m.reply(`Maaf fitur sedang error\nSilahkan gunakan *${usedPrefix}simi*`)
  }
  break
   default:
  }
}
handler.help = ['simi', 'simi2'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(simi|simih|chatbot|simi1|simi2|simih2)$/i

module.exports = handler

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function simsimi(teks, lang = 'id') {
  const res = await axios.post("https://api.simsimi.vn/v2/simtalk", new URLSearchParams({
    text: teks,
    lc: lang
  }))
  if (res.status > 200) {
    throw new Error(res.data.success)
  } else {
    return res.data.message
  }
}