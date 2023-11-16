const { mangatoon } = require('../lib/scrape');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan judul!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Spiderman*`)
  m.react('🔍');
  let me = await mangatoon(text);
  if (me.length < 1) throw `Kata kunci *${text}* tidak ditemukan!`;
  let str = me.map((v) => {
    return `
• *Name*: ${v.comic_name}
• *Type*: ${v.comic_type}
• *Url*: ${v.comic_url}
`.trim()
  }).join('\n\n')
  conn.reply(m.chat, str, m, {
    contextInfo: {
      externalAdReply: {
        title: 'MANGATOON',
        body: '© Space',
        sourceUrl: 'https://mangatoon.mobi',
        thumbnailUrl: me[0].comic_thumb
      }
    }
  })
}

handler.help = ['mangatoon'];
handler.tags = ['internet'];
handler.command = /^mangatoon$/i;

handler.limit = true;

module.exports = handler;