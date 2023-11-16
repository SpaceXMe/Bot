let fetch = require('node-fetch')

let timeout = 60000
let poin = 5000
let duit = 10
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
try {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0])
    throw false
  }
    let json = fto[Math.floor(Math.random() * fto.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tega untuk clue

*Bonus:*
*XP: ${numberFormat(poin)} XP*
*Money: $10*
*TiketCoin: ${tiketcoin}*
    `.trim()
  conn.tebakgame[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin, duit, tiketcoin,
    setTimeout(() => {
      if (conn.tebakgame[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    }, timeout)
  ]
} catch (e) {
  m.reply(danied)
  console.log(e)
  }
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.limit = true

module.exports = handler

function numberFormat(number) {
  return new Intl.NumberFormat('id-ID').format(number)
}

const fto = [
  { img: 'https://wallpapercave.com/wp/wp7756609.jpg', jawaban: 'Pou' },
  {
    img: 'https://images3.alphacoders.com/863/863236.jpg',
    jawaban: 'Clash of Clans'
  },
  {
    img: 'https://images8.alphacoders.com/855/855972.jpg',
    jawaban: 'Clash Royale'
  },
  {
    img: 'https://wallpapercave.com/wp/wp1972779.png',
    jawaban: 'Boom Beach'
  },
  {
    img: 'https://wallpapercave.com/wp/wp3624905.png',
    jawaban: 'Hay Day'
  },
  {
    img: 'https://telegra.ph/file/6f58e93b1aa4d6277a644.jpg',
    jawaban: 'Counter Strike'
  },
  {
    img: 'https://images4.alphacoders.com/100/1005690.jpg',
    jawaban: 'Grand Theft Auto San Andreas'
  },
  {
    img: 'https://images6.alphacoders.com/117/1173817.jpg',
    jawaban: 'Genshin Impact'
  },
  {
    img: 'https://images4.alphacoders.com/113/1131196.jpg',
    jawaban: 'Honkai Impact'
  },
  {
    img: 'https://wallpapercave.com/wp/wp2315446.jpg',
    jawaban: 'Subway Surfers'
  },
  {
    img: 'https://wallpapercave.com/wp/wp2444769.jpg',
    jawaban: 'Temple Run'
  },
  {
    img: 'https://wallpapercave.com/wp/wp2403882.png',
    jawaban: 'My Talking Tom'
  },
  {
    img: 'https://wallpapercave.com/wp/wp2418149.jpg',
    jawaban: 'Talking Angela'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Piano_Tiles_2_logo.png',
    jawaban: 'Piano Tiles 2'
  },
  {
    img: 'https://wallpapercave.com/wp/wp7442422.jpg',
    jawaban: 'Henry Stickmin'
  },
  {
    img: 'https://wallpapercave.com/wp/wp1899269.jpg',
    jawaban: 'Lost Saga'
  },
  {
    img: 'https://telegra.ph/file/d3eb1c8f5f51e710cb664.jpg',
    jawaban: 'Iron Saga'
  },
  {
    img: 'https://images7.alphacoders.com/423/423177.jpg',
    jawaban: 'Minecraft'
  },
  {
    img: 'https://images3.alphacoders.com/594/594233.jpg',
    jawaban: 'Resident Evil 4'
  },
  {
    img: 'https://wallpapercave.com/wp/wp1898996.jpg',
    jawaban: 'Grand Theft Auto Vice City'
  },
  {
    img: 'https://images4.alphacoders.com/823/823198.jpg',
    jawaban: 'Grand Theft Auto V'
  },
  {
    img: 'https://images4.alphacoders.com/242/242928.jpg',
    jawaban: 'Guitar Hero'
  },
  {
    img: 'https://images.alphacoders.com/655/655419.jpg',
    jawaban: 'Bully'
  },
  {
    img: 'https://images.alphacoders.com/512/512466.jpg',
    jawaban: 'League of Legends'
  },
  {
    img: 'https://images2.alphacoders.com/474/474206.jpg',
    jawaban: 'DotA II'
  },
  {
    img: 'https://telegra.ph/file/bef9e28876922fc0765b9.jpg',
    jawaban: 'Mobile Legends Bang Bang'
  },
  {
    img: 'https://telegra.ph/file/320f1f83cded7b3f9270b.jpg',
    jawaban: 'Player Unknowns Battleground'
  },
  {
    img: 'https://telegra.ph/file/0b698504c9ed88fffae51.jpg',
    jawaban: 'Point Blank'
  },
  {
    img: 'https://telegra.ph/file/24126e011c821ee38b7fc.jpg',
    jawaban: 'Basara'
  },
  {
    img: 'https://telegra.ph/file/72f55035f68a6e347dd13.jpg',
    jawaban: 'Mortal Combat Shaolin Monks'
  },
  {
    img: 'https://telegra.ph/file/9ddfcde7a04cfbe7ffb5b.jpg',
    jawaban: 'Metal Slug'
  },
  {
    img: 'https://telegra.ph/file/876178b79b966f51f2ae3.jpg',
    jawaban: 'Downhill'
  },
  {
    img: 'https://telegra.ph/file/7bd6e614346b295267d2c.jpg',
    jawaban: 'Plants Vs Zombie'
  },
  {
    img: 'https://telegra.ph/file/a23466ade02fb4139eb56.jpg',
    jawaban: 'Zuma'
  },
  {
    img: 'https://telegra.ph/file/47f581c076bdad5b3d139.jpg',
    jawaban: 'Insaniquarium'
  },
  {
    img: 'https://telegra.ph/file/83d16a4600502050c3f6f.jpg',
    jawaban: 'Platypus'
  },
  {
    img: 'https://telegra.ph/file/5b817550f7e9445395835.jpg',
    jawaban: 'Rumble Racing'
  },
  {
    img: 'https://telegra.ph/file/8b2d7a44763771c3a595b.jpg',
    jawaban: 'Sky Children'
  },
  {
    img: 'https://telegra.ph/file/b97f3336861cb056c6e5a.jpg',
    jawaban: 'Human Fall Flat'
  },
  {
    img: 'https://telegra.ph/file/39f1075ae6d80d1168583.jpg',
    jawaban: 'Roblox'
  },
  {
    img: 'https://telegra.ph/file/8502d0df2e01ff75f0a7b.jpg',
    jawaban: 'Fortnite'
  },
  {
    img: 'https://telegra.ph/file/2013f942e76a999d1034a.jpg',
    jawaban: 'Rainbow Six Siege'
  },
  {
    img: 'https://telegra.ph/file/88e8b1f7d1e023b2ed6fc.jpg',
    jawaban: 'Choo Choo Charles'
  },
  {
    img: 'https://telegra.ph/file/253d36d51a6111a78f1e3.jpg',
    jawaban: 'Call Of Duty'
  },
  {
    img: 'https://telegra.ph/file/2b14a7916fd06633521b6.jpg',
    jawaban: 'Super Mario Bros'
  },
  {
    img: 'https://telegra.ph/file/2c03994800bd8f44a45b8.jpg',
    jawaban: 'Need for Speed Most Wanted'
  },
  {
    img: 'https://telegra.ph/file/91b62c4cd4862062b8b60.jpg',
    jawaban: 'Crash Bandicoot'
  },
  {
    img: 'https://telegra.ph/file/8e94bd3d19c07fa8d9dcb.jpg',
    jawaban: 'Blue Archive'
  },
  {
    img: 'https://telegra.ph/file/7c9ca1639c8f4c1492938.jpg',
    jawaban: 'Rise of Kingdom'
  },
  {
    img: 'https://telegra.ph/file/358cc56858d2bd9ef6a18.jpg',
    jawaban: 'Guardian Tales'
  },
  {
    img: 'https://telegra.ph/file/6931d89c8d0ddb3989d25.jpg',
    jawaban: 'Dummynation'
  },
  {
    img: 'https://telegra.ph/file/ac6124792224f4b8ca65e.jpg',
    jawaban: 'Robbery Bob'
  },
  {
    img: 'https://telegra.ph/file/a95723c21ae0b3fbcc7a1.jpg',
    jawaban: 'Fr Legends'
  },
  {
    img: 'https://telegra.ph/file/0c350321663deb3904ae3.jpg',
    jawaban: 'Plants vs Zombie'
  },
  {
    img: 'https://telegra.ph/file/7d64291d38f0ecfb2dd18.jpg',
    jawaban: 'Zombie Tsunami'
  },
  {
    img: 'https://telegra.ph/file/31fd662a92fda8346798e.jpg',
    jawaban: 'Far Cry 4'
  },
  {
    img: 'https://telegra.ph/file/7ec36a3df649c082919a8.jpg',
    jawaban: 'Garten of Banban'
  }
]