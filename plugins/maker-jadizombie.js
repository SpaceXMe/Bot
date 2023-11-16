var uploadImage = require('../lib/uploadImage');
var makemeazombie = require('makemeazombie');
var zombie = new makemeazombie();

async function handler(m, { conn, usedPrefix, command }) {
var q = m.quoted ? m.quoted : m;
var mime = (q.msg || q).mimetype || '';
if (!mime) {
 return m.reply(`Kirim/Balas gambar dengan caption *${usedPrefix + command}*`)
 }
var media = await q.download();
var gambar = await uploadImage(media)
zombie.transform({
    photo: `${gambar}`,
    destinyFolder: './tmp'
})
.then(data => {
    conn.sendFile(m.chat, data, 'zombie.jpg', wm, m);
})
 .catch(err => {
    console.log('Terjadi kesalahan:', err);
 })
};

handler.help = ['jadizombie']
handler.tags = ['maker']
handler.command = /^((to|jadi)zombie)$/i
handler.limit = true

module.exports = handler