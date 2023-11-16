var fetch = require("node-fetch");
var uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  m.react(rwait)
  try {
    if (!mime) return m.reply(`ʀᴇᴘʟʏ/ᴄᴀᴘᴛɪᴏɴ ɪᴍᴀɢᴇ ᴡɪᴛʜ ᴄᴏᴍᴍᴀɴᴅ *${usedPrefix}ᴡᴀɪᴛ*`)
    if (!/image/g.test(mime)) return m.reply('ᴏɴʟʏ sᴜᴘᴘᴏʀᴛ *ɪᴍᴀɢᴇ* ᴍɪᴍᴇ')
    let bagzz = await q.download()
    let img = await uploadImage(bagzz)
    let data = await (await fetch(`https://api.lolhuman.xyz/api/wait?apikey=${global.lolhuman}&img=${img}`)).json()
    
    const { status, message, result } = data;
    
    if (!status) {
      m.reply(message)
    } else {
      const { anilist_id, mal_id, title_romaji, title_native, at, episode, similarity, video } = result;
      
      let metadata = `
❑ *ᴛɪᴛʟᴇ*: ${title_romaji}
❑ *ɴᴀᴛɪᴠᴇ*: ${title_native}
❑ *ᴇᴘɪsᴏᴅᴇ*: ${episode}
❑ *sɪᴍɪʟᴀʀɪᴛʏ*: ${similarity}
❑ *ᴀɴɪᴍᴇ ʟɪsᴛ*: ${anilist_id}
❑ *ᴍᴀʟ ɪᴅ*: ${mal_id}
`
    conn.sendMessage(m.chat, { image: video, caption: metadata }, { quoted: m })
    }
  } catch (error) {
    console.error(error)
    m.reply(`Error : ${error.message}`)
  }
};
handler.help = ['whatanime']
handler.tags = ['internet', 'anime']
handler.command = /^(wait|what(a?nime))$/i

handler.limit = true

module.exports = handler