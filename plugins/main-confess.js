const anon = require('../lib/menfess')

let handler = async (m, { conn, args, text, usedPrefix: _p, command }) => {
  if (Object.values(anon.anonymous).find(p => p.check(m.key.remoteJid))) return m.reply(`Kamu masih berada dalam room\n\nKetik *${_p}left* untuk mengakhiri sesi confess`)
  if (args.length < 1) return m.reply(`Penggunaan:\n*${_p+command} nomor|isi pesan|nama pengirim (opsional)*\n\nContoh:\nDengan nama:\n*${_p+command} ${m.sender.split("@")[0]}|Hai Owner|Bagaz*\n\nTanpa nama:\n*${_p+command} ${m.sender.split("@")[0]}|Hai*`)
  if (text > 700) return m.reply(`Teks kepanjangan!\n\nMax 700\nTeks kamu: ${text.length}`)
  if (!text.includes('|')) throw `Penggunaan:\n*${_p+command} nomor|isi pesan|nama pengirim (opsional)*\n\nContoh:\nDengan nama:\n*${_p+command} ${m.sender.split("@")[0]}|Hai Owner|Bagaz*\n\nTanpa nama:\n*${_p+command} ${m.sender.split("@")[0]}|Hai*`
  
  let num = no(text.split('|')[0]).replace(/^08/g, '628') + '@s.whatsapp.net'
  let pesan = text.split('|')[1]
  let nama = text.split('|')[2] ? text.split('|')[2] : 'Tidak Diketahui'
  let ceknumb = await conn.onWhatsApp(num)
  
  if (ceknumb.length == 0) return m.reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!!!`)
  if (num === m.sender) return m.reply(`Tidak bisa confess ke nomor sendiri!!!`)
  if (num === conn.user.jid) return m.reply(`Tidak bisa confess ke nomor bot!!!`)
  
  var nomor = m.sender
  await conn.sendMessage(num, { text: `
Hi Saya Adalah Bot, Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu

-------------------------------------->

👤 Dari : ${nama}
💌 Pesan : ${pesan}

-------------------------------------->

Ketik *${_p}left* untuk mengakhiri Chat Room
` })
  await conn.sendMessage(num, { text: `Kamu bisa membalas pesannya, tinggal ketik saja pesan kamu maka otomatis akan terkirim. Abaikan pesan ini jika kamu tidak peduli` })
  let lidt = `Sukses Mengirim Pesan
👤 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 Ke : wa.me/${text.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Nama : ${nama}
Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
  var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
  if (!check) {
  anon.createRoom(m.key.remoteJid, num)
  console.log("[ MENFES ] Creating room for: " + m.key.remoteJid);
  return m.reply(lidt)
  }
}
handler.help = ['confess (room)']
handler.tags = ['main', 'anonymous']
handler.command = /^(confess?)$/i

handler.limit = true
handler.private = true

module.exports = handler

function no(number) {
  return number.replace(/\s/g, '').replace(/([@+-])/g, '')
}