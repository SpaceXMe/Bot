const fs = require("fs");
const { sticker } = require("../lib/sticker")

let handler = async (m,{ conn, args, usedPrefix, command }) => {
  let stiker = false;
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime && !args[0]) return m.reply(`Reply/Caption media dengan command\n*${usedPrefix + command}*`);
  m.react(rwait)
  if (/webp|image|video/.test(mime)) {
    try {
      let img = await q.download();
      if (/video/.test(mime)) {
        if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!');
        let encmedia = await conn.sendStvid(m.chat, img, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
      } else {
        let encmedia = await conn.sendStimg(m.chat, img, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
      }
    } catch (e) {
      console.log(e)
      m.reply('Conversion failed')
    }
  } else if (args[0]) {
    if (isUrl(args[0])) {
      let urlStick = await sticker(null, args[0], global.packname, global.author);
      if (urlStick) await conn.sendFile(m.chat, urlStick, 'sticker.webp', '', m);
      else throw 'Conversiom failed';
    } else {
      m.reply('Conversion failed')
    }
  }
};

handler.help = ['sticker'].map(v => v + ' <caption/reply>');
handler.tags = ['sticker'];
handler.command = /^(s(tic?ker)?(gif)?)$/i;

handler.exp = 0;

module.exports = handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)?/, 'gi'))
}