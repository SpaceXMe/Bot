let PhoneNumber = require("awesome-phonenumber")
let { no } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let nomor = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text ? (no(text) + '@s.whatsapp.net') : m.sender
  let number = nomor.split('@')[0]
  let phone = PhoneNumber('+' + number).toJSON()
  
  let { regionCode, valid, possible, canBeInternationallyDialled, type, possibility } = phone
  let { input, international, national, e164, rfc3966, significant } = phone.number
  let str = `
*Number ID*: ${nomor}
*Input*: ${input}
*International*: ${international}
*National*: ${national}
*e164*: ${e164}
*rfc3966*: ${rfc3966}
*Significant*: ${significant}

*Region Code*: ${regionCode}
*isValid*: ${valid}
*isPossible*: ${possible}
*Internationally Dialled*: ${canBeInternationallyDialled}
*Number Type*: ${type}
*Possibility*: ${possibility}
`.trim()
  
  var name = await conn.getName(nomor)
  const fkontak = {
    key: {
      fromMe: false,
      participant: '0@s.whatsapp.net', ...(m.chat ? {
        remoteJid: '0@s.whatsapp.net'
      } : {})
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${number}:${number}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  }
  conn.reply(m.chat, str, fkontak)
}

handler.help = ['getnomor']
handler.tags = ['tools']
handler.command = /^(get(nomor|number)(id)?)$/i

handler.limit = true

module.exports = handler