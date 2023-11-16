var thumb = global.thumb
const premiumOptions = [
  { days: 1, price: 3 },
  { days: 3, price: 5 },
  { days: 7, price: 25 },
  { days: 30, price: 50 },
  { days: -1, price: 150 }
];

function buyPremium(user, optionIndex) {
  const selectedOption = premiumOptions[optionIndex];
  if (!selectedOption) return 'Opsi premium tidak valid.';

  if (user.balance < selectedOption.price) {
    return 'Saldo anda tidak cukup untuk membeli premium.';
  }

  if (selectedOption.days === -1) {
    user.premium = true;
    user.premiumDate = -1;
  } else {
    if (Date.now() < user.premiumDate) user.premiumDate += 86400000 * selectedOption.days;
    else user.premiumDate += Date.now() + selectedOption.days * 24 * 60 * 60 * 1000;
  }

  user.balance -= selectedOption.price;

  return `Anda telah membeli premium ${
    selectedOption.days === -1 ? 'Permanen' : `selama ${selectedOption.days} hari`
  } dengan harga ${selectedOption.price} Credit.`;
}

async function handler(m, { conn }) {
  var user = global.db.data.users[m.sender];
  var premiumList = premiumOptions
    .map((option, index) => `${index + 1}. ${option.days === -1 ? 'Permanen' : option.days + ' Hari'} - ${option.price} Credit`)
    .join('\n│');

  const args = m.text.split(' ');
  if (args.length !== 2 || isNaN(args[1])) {
    conn.sendMessage(m.chat, {
    text: `╭─────${kki} *List Premium* ${kka}\n│${premiumList}\n╰───────〇`,
    contextInfo: {
    externalAdReply: {
    title: 'Buy Premium With Your Credits',
    body: tanggal(new Date()),
    thumbnailUrl: thumb,
    sourceUrl: sgc,
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, { quoted: m })
    return;
  }

  const optionIndex = parseInt(args[1]) - 1;
  const replyText = buyPremium(user, optionIndex);
  conn.reply(m.chat, replyText, m);
}

handler.help = ['buyprem'];
handler.tags = ['main'];
handler.command = /^(buy(prem(ium)?))$/i;

module.exports = handler;

const tanggal = (numer, locale = 'id') => {
  return numer.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}