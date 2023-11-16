let handler = async (m, { conn, text, usedPrefix, command }) => {
  text = m.quoted && m.quoted.text ? m.quoted.text : text
  if (!text) return conn.fakeReply(m.chat, 'Input teks!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Apa kabar semuanya*`, '0@s.whatsapp.net');
  var me = await axios.get(`https://api.lolhuman.xyz/api/randombahasa?apikey=${global.lolhuman}&text=${encodeURIComponent(text)}`);
  var jaksel = me.data.result;
  m.reply(jaksel)
};

handler.help = ['jaksel'];
handler.tags = ['fun'];
handler.command = /^((bahasa)?jaksel|randombahasa)$/i;

handler.limit = true;

module.exports = handler;