var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Pertanyaan tentang bot kami!\n\nContoh: ${usedPrefix + command} siapa itu dann?`
  if (text === 'siapa itu dann?') {
  await m.reply('Dann adalah salah satu programmer yang berasal dari Kalimantan. Dia adalah pencipta robot yaitu Dann-MD.\n\n' + wm)
  }
  if (text === 'apa itu space ai?') {
  await m.reply('Space Ai adalah bot WhatsApp yang tercipta dengan Node.js atau Python, yang di kembangkan oleh salah satu tim yaitu DannTeam. Space Ai menggunakan base dari Dann-MD yang diciptakan oleh Dann dari DannTeam\n\n' + wm)
  }
  if (text === 'siapa itu dann') {
  await m.reply('Dann adalah salah satu programmer yang berasal dari Kalimantan. Dia adalah pencipta robot yaitu Dann-MD.\n\n' + wm)
  }
  if (/siapa itu bgzz|siapa itu bagaz/i.test(m.text)) {
  await m.reply('Bagaz adalah owner dari Space Ai. Dia adalah pemula dari *DannTeam* yang masih belajar programing.\n\n' + wm)
  }
}

handler.command = handler.help = ['tanya']
handler.tags = ['tools']

module.exports = handler

/*
 * ChatGPT Manual
 * DannTeam
 * ig: @dannalwaysalone
*/