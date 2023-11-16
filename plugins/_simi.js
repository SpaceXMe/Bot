let { simsimi } = require('../lib/scrape')

let handler = m => m;

handler.before = async function (m) {
  if (m.isBaileys && m.fromMe) return
    !0
  if (!m.text || m.text.startsWith('.') || m.text.startsWith('#')) return;
  let chat = global.db.data.chats[m.chat];
  if (chat.simi && !chat.isBanned) {
    if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return;
    await this.sendPresenceUpdate('composing', m.chat);
    var me = await getSimi(m.text, 'id');
    this.reply(m.chat, me, m);
  }
  return !0
};

module.exports = handler;

async function getSimi(teks, langCode = 'id') {
  const res = await axios.post("https://api.simsimi.vn/v2/simtalk", new URLSearchParams({
    text: teks,
    lc: langCode
  }))
  if (res.status > 200) {
    throw new Error(res.data.success);
  } else {
    return res.data.message;
  }
}