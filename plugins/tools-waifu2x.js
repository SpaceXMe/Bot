var uploadImage = require('../lib/uploadImage')
var { IMGEnhance } = require('../lib/scrape')

var handler = async (m, { conn, args, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw `Captipn/Reply Image dengan command\n*${usedPrefix + command} 1-10*`;
  m.react(wmoji);
  try {
    if (/waifu2x/i.test(command)) {
      let image = await q.download?.();
      let img = await uploadImage(image);
      var data = await (await fetch(`https://xzn.wtf/api/waifu2x?url=${img}&apikey=bgzz`)).buffer();
      conn.sendMessage(m.chat, { image: data, caption: 'Nih kak!\nMaaf kalau masih burik 😁'}, { quoted: m })
    };
    if (/(img|image)hd/i.test(command)) {
      let images = await q.download?.();
      let imgg = await uploadImage(images);
      var res = await IMGEnhance(imgg, args[0] ? args[0] : 2);
      conn.sendMessage(m.chat, { image: { url: res.url }, caption: `*Time taken* : ${res.time_taken.toFixed()} second` }, { quoted: m });
    };
  } catch (error) {
    console.log(error);
    m.reply('Maaf, terjadi error saat memproses request');
  }
};

handler.help = ['waifu2x', 'imagehd'];
handler.tags = ['tools'];
handler.command = /^(waifu2x|(img|image)hd)$/i;

handler.limit = true;

module.exports = handler;