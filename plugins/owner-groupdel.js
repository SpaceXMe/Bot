let handler = async (m, { conn, args }) => {
  if (!args[0]) throw "Masukkan ID grup!"
  if (!/[0-9]@g.us/g.test(args[0])) return m.reply('Yang bener aja bang')
  delete conn.chats[args[0]]
  delete global.db.data.chats[args[0]]
  m.reply(`Berhasil menghapus database grup tersebut!`)
}

handler.help = ['groupdel']
handler.tags = ['owner']
handler.command = /^((del(ete)?)gro?up|gro?up(del(ete)?))$/i
handler.rowner = true

module.exports = handler