var fetch = require("node-fetch");
var api = require("api-dylux");
var { tiktokdl } = require('../lib/scrape');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL!\n\nContoh: ${usedPrefix + command} tiktok.com/xxx`;
  var name = m.sender;
  var fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}};
  m.reply(wait);
  try {
    if (/^((tt|tiktok)(down|download|dl)?)$/i.test(command)) {
      var dann = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${global.lolhuman}&url=${text}`);
      var res = await dann.json();
      var hasil = `• *Title*: ${res.result.title}\n• *Author*: ${res.result.author.username}\n• *Username*: ${res.result.author.nickname}\n• *Duration*: ${res.result.duration} Seconds`;
      var stats = `• *Play Count*: ${shortNumber(res.result.statistic.play_count)}\n• *Like*: ${shortNumber(res.result.statistic.like_count)}\n• *Share Count*: ${shortNumber(res.result.statistic.share_count)}\n• *Comment*: ${shortNumber(res.result.statistic.comment_count)}`;
      conn.sendFile(m.chat, res.result.link, '', `${hasil}\n${stats}`, fkonn);
    }
    if (/^(tt|tiktok)(photo|p)$/i.test(command)) {
      var dan = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolhuman}&url=${text}`);
      var ress = await dan.json();
      var result = ress.result;
      for (let i = 0; i < result.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        conn.sendFile(m.chat, result[i], '', `Slide ${i + 1}`, m);
      }
    }
  } catch {
    try {
      let res = await api.tiktok(text);
      var hasil = `Username: *${res.nickname}*\nID: *${res.unique_id}*\nDownload: *${res.download_count}*\nDurasi: *${res.duration}*\n\n*Deskripsi*: ${res.description}`;
      conn.sendFile(m.chat, res.hdplay, '', hasil, m);
    } catch {
      try {
        let ttdl3 = await tiktokdl(text);
        const { desc, author, author_name, play_url, links } = ttdl3;
        let str = `
*Author*: ${author}
*Author Name*: ${author_name}

*Deskripsi*:
${desc}
`;
        conn.sendFile(m.chat, play_url, 'tiktok.mp4', str, m);
      } catch (e) {
        console.log(e);
        m.reply('An error occurred while processing the request!');
      }
    }
  }
};

handler.help = ['tiktok', 'tiktokphoto'];
handler.tags = ['downloader'];
handler.command = /^((tt|tiktok)(down|download|dl)?|(tt|tiktok)(photo))$/i;

module.exports = handler;

function shortNumber(number) {
  return number.toLocaleString('id-ID', { notation: 'compact', compactDisplay: 'short' });
}