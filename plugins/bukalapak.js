var fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Barang!\n\nContoh: ${usedPrefix + command} baju batik`;
  
  var dann = await fetch(`https://api.ibeng.tech/api/search/bukalapak?q=${text}&apikey=B2JqyHiUht`);
  const data = await dann.json();
  
  const result = data.data.map((item) => `
• Title: *${item.title}*
• Rating: *${item.rating}*
• Harga: *${item.harga}*
• Terjual: *${item.terjual}*
• Nama: *${item.store.nama}*
• Link: *${item.store.link}*
`).join('\n');
  
  await conn.sendFile(m.chat, data.data[0].image, '', result, m);
};

handler.command = handler.help = ['bukalapak'];
handler.tags = ['internet'];

module.exports = handler;