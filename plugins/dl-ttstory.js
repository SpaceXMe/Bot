const { tiktokStory } = require("../lib/scrape");

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Username!\n\nContoh: *${usedPrefix + command} hillsatrio*`;
  m.react(rwait);
  var me = await tiktokStory(text);
  if (!me) return m.reply('Username tidak ditemukan!');
  var res = me.videos;
  if (res.length < 1) return m.reply(`Tidak ada story dalam akun *@${text}*`);
  for (let i = 0; i < 5 && i < res.length; i++) {
    const { title, play_count, digg_count, comment_count, share_count, play } = res[i];
    let str = `
*Title:* ${title}
*Views:* ${play_count}
*Digg Count:* ${digg_count}
*Comment:* ${comment_count}
*Share:* ${share_count}
`;
    conn.sendFile(m.chat, play, '', str, m)
  }
};

handler.help = ['tiktokstory'];
handler.tags = ['downloader'];
handler.command = /^((tt|tiktok)story|story(tt|tiktok))$/i;
handler.limit = true;

module.exports = handler;

/*
  © Bagazx
*/