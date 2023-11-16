const axios = require('axios');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Contoh: *#igstory itzmebgz*';
  }

  let username = text.trim();
  m.react(wmoji)

  try {
    let api = `https://api.lolhuman.xyz/api/igstory/${username}?apikey=${global.lolhuman}`;
    let { data } = await axios.get(api);

    if (data.status !== 200 || data.result.length === 0) {
      throw 'Tidak ada story dalam username.';
    }

    let mediaUrls = data.result;

    for (let url of mediaUrls) {
      await conn.sendFile(m.chat, url, '', '', m);
    }
  } catch (error) {
    console.log(error);
    throw 'Tidak dapat mengambil story instagram.';
  }
};

handler.help = ['igstory'];
handler.tags = ['downloader'];
handler.command = /^(igstory|storyig)$/i;

module.exports = handler;