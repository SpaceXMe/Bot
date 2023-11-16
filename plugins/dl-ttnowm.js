var { fetchJson, shortNumber } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!(text || /https:\/\//i.test(text))) return conn.fakeReply(m.chat, 'Masukkan URL tiktok!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://vt.tiktok.com/ZSNeFJttj/*`)
  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m })
  try {
    let url = await fetchJson(global.API('skizo', '/api/tiktok', { url: text }, 'apikey'))
    const { region, title, duration, hdplay, play_count, comment_count, share_count, download_count, author } = url.data
    conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: lll,
        editedMessage: {
          conversation: `_Processed time: ${url.processed_time} seconds_`
        }
      }
    }, { quoted: m })
    
    let str = `
${title}

• *Region:* ${region}
• *Author:* ${author.nickname}
• *Duration:* ${duration} seconds
• *Play Count:* ${shortNumber(play_count, "en-US")}
• *Comment:* ${shortNumber(comment_count, "en-US")}
• *Share:* ${shortNumber(share_count, "en-US")}
• *Download:* ${shortNumber(download_count, "en-US")}
`
    conn.sendMessage(m.chat, { video: { url: hdplay }, caption: str.trim() }, { quoted: m })
  } catch (error) {
    console.log(error)
    m.reply(error?.message)
  }
}

handler.help = ['tiktoknowm']
handler.tags = ['downloader']
handler.command = /^((tt|tiktok)nowm)$/i

handler.limit = true

module.exports = handler