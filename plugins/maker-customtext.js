var fetch = require("node-fetch");

var handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `Masukkan Text!\n\nContoh: *${usedPrefix + command} tes*`
  m.react('🖍️')
  let type = (args[0] || '').toLowerCase()
  
  try {
    switch (type) {
      case '1':
        conn.sendFile(m.chat, await(await fetch(`https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${text.replace('1', '')}`)).buffer(), '', wm, m)
        break;
      case '2':
        conn.sendFile(m.chat, await(await fetch(flaa[0] + text.replace('2', ''))).buffer(), '', wm, m)
        break;
      case '3':
        conn.sendFile(m.chat, await(await fetch(flaa[1] + text.replace('3', ''))).buffer(), '', wm, m)
        break;
      case '4':
        conn.sendFile(m.chat, await(await fetch(flaa[2] + text.replace('4', ''))).buffer(), '', wm, m)
        break;
      case '5':
        conn.sendFile(m.chat, await(await fetch(flaa[3] + text.replace('5', ''))).buffer(), '', wm, m)
        break;
      case '6':
        conn.sendFile(m.chat, await(await fetch(flaa[4] + text.replace('6', ''))).buffer(), '', wm, m)
        break;
      default:
        return conn.sendFile(m.chat, await(await fetch(pickRandom(flaa) + text)).buffer(), '', wm, m)
    }
  } catch (error) {
    console.error(error)
    m.reply('Internal server down!')
  }
}

handler.help = ['flamingtext (random)', 'flamingtext 1', 'flamingtext 2', 'flamingtext 3', 'flamingtext 4', 'flamingtext 5', 'flamingtext 6', 'flamingtext 7']
handler.tags = ['customtext']
handler.command = /^(flaming(text)?)$/i

handler.limit = true
handler.exp = 0

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}