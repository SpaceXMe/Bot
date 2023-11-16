let handler = async (m, { conn, text, usedPrefix, command }) => {
  let teks = m.quoted && m.quoted.text ? m.quoted.text : text
  if (!teks) throw `Masukkan teks!\n\nContoh: *${usedPrefix + command} Hello World*`
  if (/[01]/.test(teks)) {
    m.reply(binaryToText(teks))
  } else {
    m.reply(toBinary(teks))
  }
};
handler.help = ['binary'];
handler.tags = ['tools'];
handler.command = /^((un|to)?binar(i|y)(tote(k|x)(s|t))?)$/i;
handler.limit = true;

module.exports = handler;

function toBinary(query) {
  let binary = '';
  for (let i = 0; i < query.length; i++) {
    binary += query[i].charCodeAt(0).toString(2) + ' '
  }
  return binary.trim();
}

function binaryToText(binaryString) {
  const binaryArray = binaryString.split(' ');
  let text = '';
  for (let i = 0; i < binaryArray.length; i++) {
    const binaryChar = binaryArray[i];
    const decimalValue = parseInt(binaryChar, 2);
    const char = String.fromCharCode(decimalValue);
    text += char;
  }
  return text;
}
