const api = require('@bochilteam/scraper');

async function handler(m, { conn }) {
  try {
    const res = await api.bioskop();
    var dann = res.map(data => `• Title: *${data.title}*\n• Genre: *${data.genre}*\n• Duration: *${data.duration}*\n• Release: *${data.release}*\n• Director: *${data.director}*\n• Cast: *${data.cast}*\n\n• URL: *${data.url}*\n`).join('\n');
    conn.sendFile(m.chat, data.img, '', `${htki} *Bioskop* ${htka}\n\n${dann}`, m);
  } catch (err) {
    console.error(err);
    conn.reply(m.chat, 'Terjadi kesalahan.', m);
  }
}

handler.command = handler.help = ['bioskop'];
handler.tags = ['internet'];

module.exports = handler;