var api = require('api-dylux')

let handler = async (m, {conn, text, usedPrefix, command }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
  if (!teks) return conn.fakeReply(m.chat, 'Masukkan judul lagu!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} Metamorphosis*`)
  m.react(wmoji)
  try {
   let res = await api.lyrics(text);
   let mes = `
▣ *${res.title}*
▣ *${res.artist}*

▣ *Lyrics:*

${res.lyrics}
`;
    conn.sendFile(m.chat, res.thumb, 'img.png', mes, m);
  } catch (e) {
  	console.log(e)
  	m.react(emror)
  	m.reply('Terjadi error!\nPastikan judul lagu yang kamu masukkan sudah benar!')
  }
}
handler.help = ['lyrics']
handler.tags = ['internet']
handler.command = /^(lirik|lyrics?)$/i

module.exports = handler
