const axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    conn.fakeReply(m.chat, `Masukkan nama karakter!`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Elaina*`, 'status@broadcast');
    return;
  }
  
	m.react('🔍')

  try {
    let query = encodeURIComponent(text);
    let url = `https://api.lolhuman.xyz/api/character?apikey=${global.lolhuman}&query=${query}`;
    let response = await axios.get(url);
    let data = response.data.result;

    if (data) {
      let { name, image, description, favourites, media } = data;
      description = description.replace(/([~_*])/g, '');
      let caption = `*${name.full} (${name.native})*

*Favorit*: ${favourites} orang
*Media*: ${media.nodes.length} media

*Deskripsi*:
${description}`;

      conn.sendFile(m.chat, image.large, '', caption, m);
    } else {
      conn.reply(m.chat, 'Karakter tidak ditemukan!', m);
    }
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, 'Tidak dapat memproses permintaan.', m);
  }
};

handler.help = ['character <teks>'];
handler.tags = ['info', 'anime'];
handler.command = /^((ch|k)ara((k|c)ter)?)$/i;

module.exports = handler;