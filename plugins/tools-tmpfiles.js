let { tmpFile } = require('../lib/scrape');

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `Reply/caption media dengan command\n*${usedPrefix + command}*`;
  try {
    const waiter = await conn.reply(m.chat, '_Uploading files..._', m);
    let media = await q.download?.();
    if (!media) throw 'Unable to download media';
    tmpFile(media).then((a) => {
      let str = `*URL*: ${a.data.url.replace(/org/, 'org/dl')}\n*Upload Date*: ${new Date().toLocaleString('id')}`;
      global.editMsg(waiter, str);
    });
  } catch (e) {
    console.error(e);
    global.editMsg(waiter, e?.message);
  }
};

handler.help = ["tmpfile"];
handler.tags = ["tools"];
handler.command = /^(tmp(files?)?)$/i;

handler.limit = 10;

module.exports = handler;