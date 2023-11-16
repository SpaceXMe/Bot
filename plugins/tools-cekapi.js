let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, args, command }) => {
  let type = (args[1] || '').toLowerCase()
  let _type = (args[1] || '').toLowerCase()
  if (!args[0]) return m.reply('Apikeynya mana?')

  let lll = await conn.reply(m.chat, 'Mencari Apikey...', m);
  await conn.delay(2000);
  try {
    if (/cekapi(key)?|cekkey/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'xteam':
          if (type == 'xteam') {
            let xteam = await (await fetch(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)).json().catch(v => 'error')
            if (xteam == 'error') {
              m.reply(`Maaf restapi ini sedang error, harap coba lagi nanti`)
            } else {
              if (xteam.response == "Only alphanumeric!") return m.reply('Only alphanumeric!')
              if (xteam.response == "Apikey tidak ditemukan, silahkan daftar atau beli ke developer untuk mendapatkan apikey yang valid!") return m.reply('Invalid Apikey!')
              conn.relayMessage(m.chat, {
                protocolMessage: {
                  type: 14,
                  key: lll,
                  editedMessage: {
                    conversation: `• *Type:* XTeam
• *Apikey:* ${args[0]}

• *Name:* ${xteam.response.name}
• *IP Address:* ${xteam.response.ip}
• *Email:* ${xteam.response.email}
• *Total Hit:* ${xteam.response.totalhit}
• *Premium:* ${xteam.response.premium}

• *Expired:* ${(xteam.response.expired).replace('Premium left:', '')}`
                  }
                }
              }, { quoted: m })
            }
          }
          break
        case 'lolhuman':
          let lol = await (await fetch(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)).json()
          if (lol.message == 'success') {
            conn.relayMessage(m.chat, {
              protocolMessage: {
                type: 14,
                key: lll,
                editedMessage: {
                  conversation: `• *Type:* Lolhuman
• *Apikey:* ${args[0]}

• *Name:* ${lol.result.username}
• *Total Hit:* ${lol.result.requests}
• *Hit Today:* ${lol.result.today}
• *Account:* ${lol.result.account_type}

• *Expired:* ${lol.result.expired}`
                }
              }
            }, { quoted: m })
          } else conn.relayMessage(m.chat, {
            protocolMessage: {
              type: 14,
              key: lll,
              editedMessage: {
                conversation: 'Invalid Apikey !'
              }
            }
          }, { quoted: m })
          break
        default:
          return conn.reply(m.chat, `*${htki} CEK APIKEY ${htka}*\n\n• Lolhuman\n• Xteam\n\nExample:\n*#${command} itzmee lolhuman*`, m)
      }
    }
  } catch (error) {
    console.error(error);
    conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: lll,
        editedMessage: {
          conversation: "Error\n\n\n" + err.stack
        }
      }
    }, { quoted: m })
  }
}
handler.help = ['cekapikey <apikey> <site>']
handler.tags = ['internet', 'tools']
handler.command = /^(cek(key|api|apikey))$/i

module.exports = handler