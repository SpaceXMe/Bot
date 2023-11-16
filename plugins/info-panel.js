let handler = m => {
  m.mediaReply('Untuk info panel bisa chat nomor\nwa.me/6281232819750\n\n© Space\n• @6281232819750\n• @6282225201437\n• @628895355345')
}

handler.help = ['panel']
handler.tags = ['info']
handler.command = /^panel$/i

module.exports = handler