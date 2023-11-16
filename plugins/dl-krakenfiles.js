const { krakenfiles } = require("../lib/scrape");

let handler = async function (m, { conn, text, usedPrefix, command }) {
  if (!text) throw `Masukkan URL!`;
  m.reply(wait);
  try {
  var data = await krakenfiles(text);
  const { title, uploaddate, lastdownloaddate, filesize, type, views, downloads, url } = data;
  let str = `
• *Title:* ${title}
• *Upload Date:* ${uploaddate}
• *Last Download Date:* ${lastdownloaddate}
• *Size:* ${filesize}
• *Type:* ${type}
• *Views:* ${views}
• *Downloads:* ${downloads}
`.trim();
  conn.sendMessage(m.chat, { document: { url: url }, caption: str, fileName: title, mimetype: type }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Error :', e.message)
  }
};

handler.help = ['kraken'];
handler.tags = ['downloader'];
handler.command = /^(kraken(dl|files|down(load)?)?|(dl|files|down(load)?)kraken)$/i;

handler.limit = true;

module.exports = handler;