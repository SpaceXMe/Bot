const { sfilemobi } = require("../lib/scrape");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan link!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} https://sfile.mobi/KXpTt7t1QY7*`, '0@s.whatsapp.net');
  m.reply('_Downloading file from url..._');
  try {
    const res = await sfilemobi(text);
    conn.sendMessage(m.chat, { document: { url: res.url }, fileName: res.title + ".apk", mimetype: res.mimetype });
  } catch (e) {
    console.error(e);
    m.reply(`erjadi error : ${e?.message}`);
  };
};

handler.help = ['sfilemobi'];
handler.tags = ['downloader'];
handler.command = /^(sfile(mobi)?(dl|down(load)?)?)$/i;

handler.limit = true;

module.exports = handler;