let handler = async (m, { conn, text }) => {
  let teks = m.quoted && m.quoted.text ? m.quoted.text : text
  if (!teks) throw 'Input text!';
  m.reply(reverseText(teks))
}
handler.help = ['balik']
handler.tags = ['fun']
handler.command = /^balik$/i

module.exports = handler

function reverseText(text) {
  return text.split('').reverse().join('');
}