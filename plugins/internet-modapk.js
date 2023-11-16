let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan nama APK!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} CoC*`, '0@s.whatsapp.net');
  m.react('🔍')
  try {
    var { data } = await axios.get(global.API('neoxr', '/api/apkmod', { q: text }, 'apikey'));
    var res = data.data;
    let str = '';
    for (let i of res) {
      str += `${i.no}. *${i.name}*\n`;
      str += `• *Version:* ${i.version}\n`;
      str += `• *For:* ${i.mod}\n`;
      str += `• *URL:* ${i.url}\n\n`;
    }
    m.reply(str.trim());
  } catch (error) {
    console.error(error);
    m.reply(`Error : ${error?.message}`)
  }
};

handler.help = ['modapk'];
handler.tags = ['internet'];
handler.command = /^(modapk|apkmod)$/i;

handler.limit = 10;

module.exports = handler;