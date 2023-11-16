let handler = async (m, { conn, text }) => {
  function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '')
  }
  let who = m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : no(text) + "@s.whatsapp.net";
  if (!who) throw 'Siapa yang mau dijadiin premium?';
  let user = global.db.data.users[who];
  user.premium = true;
  user.premiumDate = -1
  m.reply(`Sukses menjadikan @${who.split('@')[0]} sebagai premium!`);
}

handler.help = ['unliprem'];
handler.tags = ['owner'];
handler.command = /^((unli|unlimited)prem(ium)?|prem(ium)?(unli|unlimited))$/i;

handler.rowner = true;

module.exports = handler;