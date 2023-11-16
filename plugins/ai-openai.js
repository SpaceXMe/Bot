let { fetchJson } = require('../lib/myfunc')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `Halo kak, ada yang bisa *${namebot}* bantu?`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} siapa presiden indonesia*`)
  await conn.sendMessage(m.chat, { react: { text: `${rwait}`, key: m.key }})
  try {
  //let data = await axios.get(global.API('skizo', '/api/openai', { text: encodeURIComponent(text) }, 'apikey'))
    let data = await fetchJson(`https://vihangayt.me/tools/chatgpt2?q=${text}`).catch(async () => await fetchJson(`https://vihangayt.me/tools/chatgpt3?q=${text}`)).catch(async () => await fetchJson(`https://vihangayt.me/tools/chatgpt3?q=${text}`)).catch(async () => await fetchJson(`https://vihangayt.me/tools/chatgpt4?q=${text}`)).catch(async () => await fetchJson(`https://vihangayt.me/tools/chatgpt5?q=${text}`))
  //let data = await axios.get(`https://api.yanzbotz.my.id/api/ai/openai?query=${encodeURIComponent(text)}`)
    let res = data.data
    await conn.sendMessage(m.chat, {
text: `\n${text.replace(/^\w/, (c) => c.toUpperCase())}\n\n` + res + '\n',
contextInfo: {
mentionedJid: conn.parseMention(text),
externalAdReply: {
title: 'OpenAi 3.5',
body: 'Powered By © Space',
thumbnailUrl: "https://telegra.ph/file/5bbfad89ca60764aea314.jpg",
sourceUrl: "https://chat.openai.com",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })
conn.sendMessage(m.chat, { react: { text: `${done}`, key: m.key }})
  } catch (error) {
    await conn.sendMessage(m.chat, {
        react: {
            text: emror,
            key: m.key 
        }})
  m.reply(error?.message)
  }
}
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(chatgpt|ai|openai)$/i
handler.limit = 15

module.exports = handler