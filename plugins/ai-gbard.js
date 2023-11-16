var axios = require("axios");

var handler = async (m, {
  conn,
  text,
  usedPrefix,
  command
}) => {

  if (!text) return conn.fakeReply(m.chat, 'Input pertanyaan!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} 7 keajaiban dunia*`, m.sender);
  m.react('🤷‍♀️')
  try {
    var gbard = await axios.get(global.API('http://api.azz.biz.id', '/api/bard', { q: encodeURIComponent(text), key: key[Math.floor(Math.random() * key.length)] }))
    var data = gbard.data.respon;
    m.reply(data)
  } catch (error) {
    console.error(error)
    m.reply(error.message)
  }
}
handler.help = ['gbard'];
handler.tags = ['ai'];
handler.command = /^((google|g)?(ai)?bard(ai)?)$/i;
handler.exp = 0;
handler.limit = true;

module.exports = handler;

let key = [
  'mangea',
  'pelanpelanpaksupir',
  'global'
];