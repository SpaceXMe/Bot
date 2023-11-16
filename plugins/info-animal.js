let fs = require('fs')

let handler = async (m, { conn, command }) => {
  var animal = JSON.parse(fs.readFileSync('./database/animal.json'))
  m.react('🐾')
  const hewan = (nama) => {
    let data = animal[nama]
    let name = data["name"]
    let img = data["image"]
    let desc = data["description"]
    return conn.sendFile(m.chat, img, 'hewa.jpg', `*Nama:* ${name}\n*Description:* ${desc}`, m)
  }
  switch (command) {
    case 'animal':
      const fullname = Object.values(animal).map(v => v.name)
      m.reply(`List Hewan\n\n• ${fullname.join('\n• ')}`)
      break;
    case 'axolotl':
      hewan("axolotl")
      break;
    case 'gajah': case 'elephant':
      hewan("gajah")
      break;
    case 'harimau': case 'tiger':
      hewan("harimau")
      break;
    case 'jerapah': case 'giraffe':
      hewan("jerapah")
      break;
    case 'kucing': case 'cat':
      hewan("kucing")
      break;
    case 'kuda': case 'horse':
      hewan("kuda")
      break;
    case 'singa': case 'lion':
      hewan("singa")
      break;
    case 'anjing': case 'dog':
      hewan("anjing")
      break;
  }
}
handler.help = ['axolotl', 'gajah', 'harimau', 'jerapah', 'kucing', 'kuda', 'singa']
handler.tags = ['animal']
handler.command = /^(axolotl|(gajah|elephant)|(harimau|tiger)|(singa|lion)|(jerapah|giraffe)|(kucing|cat)|(kuda|horse)|(anjing|dog))$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}