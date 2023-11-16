var { igdl } = require('../lib/scrape');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan URL!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://www.instagram.com*`);
  m.react(wmoji)
  try {
    try {
      var res = await igdl(text);
      var bagaz = res.media;
      for (let url = 0; url < bagaz.length; url++) {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        let str = (url.length > 1) ? `Media ${url + 1}` : ''
        conn.sendFile(m.chat, bagaz[url], '', `${str}`, m)
      }
    } catch {
      var res = await axios.get(global.API('neoxr', '/api/ig', { url: text }, 'apikey'));
      var { url, type } = res.data.data[0];
      conn.sendFile(m.chat, url, 'insta.' + type, 'Result', m);
    }
  } catch (error) {
    console.error(error);
    m.reply('Error : Internal server down!');
  }
};

handler.help = ['instagram'];
handler.tags = ['downloader'];
handler.command = /^((ig|instagram)(dl|down(load)?)?)$/i;

handler.limit = true;

module.exports = handler;