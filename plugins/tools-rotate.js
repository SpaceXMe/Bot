let fetch = require('node-fetch');
let uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'Kirim/Reply Gambar dengan caption .rotate';
  if (!text) throw `Masukkan derajat!\nContoh *${usedPrefix + command} 90*`;
  await m.reply(wait);
  let media = await q.download();
  let url = await uploadImage(media);
  
  let rotateCount = parseInt(text);
  if (rotateCount > 300) {
    return await m.reply('Maksimal 300 rotate!');
  }
  
  let hasil = await (await fetch(`https://api.lolhuman.xyz/api/editor/rotate?apikey=${global.lolhuman}&img=${url}&rotate=${rotateCount}`)).buffer();
  await conn.sendFile(m.chat, hasil, '', wm, m);
};

handler.help = ['rotate'];
handler.tags = ['tools'];
handler.command = /^(rotate)$/i;
handler.limit = true;

module.exports = handler;