const jimp = require("jimp")
var uploadImage = require("../lib/uploadImage")
var uploadFile = require("../lib/uploadFile")

let handler = async (m, { conn, usedPrefix }) => {
	
let q = m.quoted ? m.quoted : m;
let mime = (q.msg || q).mimetype || '';
if (!mime) throw "Where the media?";

m.react(rwait);

let media = await q.download();
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
let link = await (isMedia ? uploadImage : uploadFile)(media);

let source = await jimp.read(await link);
let height = await source.getHeight();
let width = await source.getWidth();

m.reply(`*RESOLUSI:* ${width} x ${height}

*• Lebar :* ${width}
*• Tinggi :* ${height}

*• Link :* ${link}`)
};
handler.help = ['cekresolution', 'cekreso'].map(v => v + ' *<reply image>*');
handler.tags = ['tools'];
handler.command = /^(cekreso(lution|lusi)?)$/i;

module.exports = handler;