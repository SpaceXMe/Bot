const axios = require('axios');

let handler = async (m, { conn }) => {
  try {
    let api = `https://api.lolhuman.xyz/api/igstory/jkt48.freya?apikey=${global.lolhuman}`;
    m.react('👌')
    let { data } = await axios.get(api);

    if (data.status !== 200 || data.result.length === 0) {
      throw 'Tidak ada story dalam username.';
    }

    let mediaUrls = data.result;

    for (let url of mediaUrls) {
      await conn.sendFile(m.chat, url, '', 'Story Freya', m);
    }
  } catch (error) {
    console.log(error);
    throw 'Tidak dapat mengambil story Freya.';
  }
};

handler.help = ['freya'];
handler.tags = ['internet'];
handler.command = /^((story)?freya(story)?)$/i;

module.exports = handler;