let { currency, getRandom } = require('../lib/myfunc')

let handler = async (m, { conn, usedPrefix, participants }) => {

conn.level = global.db.data.users[m.sender]
  conn.fightnaga = conn.fightnaga ? conn.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));
  
  if (global.db.data.users[m.sender].kucing == 0) return m.reply(`Kamu belum memiliki Kucing Silahkan beli dulu..\n\nKetik: *${usedPrefix}petshop kucing* untuk membeli kucing`)

  if (typeof conn.fightnaga[m.sender] != "undefined" && conn.fightnaga[m.sender] == true) return m.reply(`*Tidak bisa melakukan battle karena arena yg kamu miliki sedang kamu pakai .*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(8,20)

  let fighting = await m.reply(`*🐱 Kucing Kamu [ Level ${global.db.data.users[m.sender].kucing} ]*\n             VS\n*🐈 Kucing ${conn.getName(lawan)} [ Level ${global.db.data.users[lawan].kucing} ]*\n\nMereka lagi kelahi rebutin bini\n\nTunggu ${lamaPertarungan} menit lagi dan lihat siapa yg menang🎮.`)

  conn.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Naikin lagi levelnya😐','Cupu','Kurang hebat','Ampas Petnya','Pet gembel']
  let alasanMenang = ['Hebat','Pro','Ganas Pet','Legenda Pet','Sangat Pro','Rajin Ngasi Makan Pet']

  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].kucing;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].kucing;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    conn.reply(m.chat, `*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🐈Kamu* MENANG melawan 🐈kucingnya *${conn.getName(lawan)}* karena kucing🐈kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}\n\nHadiah ${currency(hadiah)} money\n+1 Tiketcoin`, fighting)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 40
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    conn.reply(m.chat, `*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\n*Pet🐈Kamu* KALAH melawan 🐈kucingnya *${conn.getName(lawan)}* karena pet kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}\n\nUang kamu berkurang ${currency(denda)} money\n+1 Tiketcoin`, fighting)
  }else {
    conn.reply(m.chat, `*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(lawan)}*\n\nHasil imbang kak, ga dapet apa apa 😂`, fighting)
  }

  delete conn.fightnaga[m.sender]
}
handler.help = ['fightkucing']
handler.tags = ['rpg']
handler.command = /^(fightkucing)$/i
handler.limit = true
handler.group = true

module.exports = handler