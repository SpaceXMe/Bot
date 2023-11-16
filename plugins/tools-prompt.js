const axios = require('axios');
const uploadImage = require('../lib/uploadImage');

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (/image/.test(mime)) {
    conn.sendPresenceUpdate('recording', m.chat)
    m.react('🗿')

    let img = await q.download();
    let imageUrl = await uploadImage(img);

    try {
      let api = `https://api.itsrose.life/image/stable/prompter?url=${encodeURIComponent(imageUrl)}&apikey=${global.rose}`;
      let { data } = await axios.get(api);
      let prompt = data.result.prompt;

      m.reply(`*Prompt:* ${prompt}`);
    } catch (e) {
      console.log(e);
      m.reply('Gagal mengambil data Prompt!');
    }
  } else {
    m.reply(`Kirim/Balas dengan caption *${usedPrefix}prompt*`);
  }
};

handler.help = ['prompt'];
handler.tags = ['tools'];
handler.command = /^(prompt)$/i;
handler.limit = true

module.exports = handler;