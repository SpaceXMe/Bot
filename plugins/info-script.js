let fs = require("fs");
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, usedPrefix, command }) => {
      const repPy = {
      	key: {
      		remoteJid: '0@s.whatsapp.net',
      		fromMe: false,
      		id: '© Space',
      		participant: '0@s.whatsapp.net'
      	},
      	message: {
      		requestPaymentMessage: {
      			currencyCodeIso4217: "USD",
      			amount1000: 999999999,
      			requestFrom: '0@s.whatsapp.net',
      			noteMessage: {
      				extendedTextMessage: {
      					text: '© Space'
      				}
      			},
      			expiryTimestamp: 999999999,
      			amount: {
      				value: 91929291929,
      				offset: 1000,
      				currencyCode: "IDR"
      			}
      		}
      	}
      }
       
      await conn.relayMessage(m.chat, {
        requestPaymentMessage: {
          currencyCodeIso4217: "IDR",
          amount1000: fsizedoc,
          requestFrom: m.sender,
          noteMessage: {
              extendedTextMessage: {
                  text: `Maaf kak.. *${conn.user.name}* tidak open source 😕`,
                  contextInfo: {
                      mentionedJid: [m.sender],
                      externalAdReply: {
                          showAdAttribution: true
                      }
                  }
              }
          },
          expiryTimestamp: 999999999,
  			  amount: {
    				value: 91929291929,
    				offset: 1000,
    				currencyCode: "USD"
  				}
      }
  }, {})
  conn.sendFile(m.chat, pickRandom(mp3), '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 99999999999999999 })
}
handler.help = ['script', 'sc']
handler.tags = ['info', 'main']
handler.command = /^(sc|script|source(code))$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

let mp3 = [
"./mp3/ga da.mp3",
"./mp3/ga boleh.mp3",
"./mp3/ga mau.mp3"
]
