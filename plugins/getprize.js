var handler = async (m, { conn, text, usedPrefix, command }) => {
  var user = global.db.data.users[m.sender]
  if (!text) {
    throw `Masukkan Codeshortlink!\n\nContoh: *${usedPrefix + command} DannTeam*`
  }

  if (text === 'DannTeam') {
    // Memberikan hadiah kepada DannTeam
    user.balance += 99999999
    user.money += 99999999
    user.limit += 99999999

    // Mengirim pesan bahwa hadiah telah diberikan
    conn.reply(m.chat, `Selamat! Anda telah menerima hadiah sebesar 99.999.999.\nBalance: ${user.balance}\nMoney: ${user.money}\nLimit: ${user.limit}`, m)
  } else if (text === 'Makemeow') {
    // Memberikan hadiah kepada Makemeow
    user.balance += 1000000
    user.money += 1000000
    user.limit += 1000000

    // Mengirim pesan bahwa hadiah telah diberikan
    conn.reply(m.chat, `Selamat! Anda telah menerima hadiah sebesar 1.000.000.\nBalance: ${user.balance}\nMoney: ${user.money}\nLimit: ${user.limit}`, m)
  } else {
    throw `Kode yang dimasukkan tidak valid.`
  }
}

handler.command = handler.help = ['getprize']
handler.tags = ['rpgabsen']
module.exports = handler