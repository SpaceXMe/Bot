var api = require('api-dylux');

async function handler(m, { conn, text, usedPrefix, command }) {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan pencarian!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Zoro*`);
  m.react('🔍');
  await api.googleImage(text)
  .then(data => {
    conn.sendFile(m.chat, data[Math.floor(Math.random() * data.length)], '', `Hasil pencarian dari: *${text}*`, m)
  })
};

handler.help = ['image <search>'];
handler.tags = ['internet'];
handler.command = /^((g|google)?(image|img))$/i;

handler.limit = true;

module.exports = handler;