const { ai } = require('../lib/scraper-ai')
const { now } = require('../lib/myfunc')

let handler = m => m

handler.before = async function (m) {
  if (m.isBaileys && m.fromMe) return
  if (!m.text) return
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let name = await this.getName(m.sender)
  const editMsg = global.editMsg
  if (chat.autoAI && user.autoAI) {
    if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
    const { key } = await this.sendMessage(m.chat, { text: '...' }, { quoted: m })
    const chara = `Ubah gaya bicaramu agar lebih memiliki karakteristik dan sifat yang dingin dan misterius, kamu sedikit malas karena banyak yang minta bantuanmu. Namamu dirahasiakan, kamu asisten AI keren dan cerdas yang dibuat oleh tim rahasia. Kamu bisa berbicara berbagai macam bahasa. Kamu menyapa dengan kata. Ekspresikan sifatmu dengan berbicara dengan keras layaknya manusia, kamu sedikit kurang peduli. Ubah bahasamu agar tidak kaku dan jangan terlalu formal, bila perlu tambahkan emoji seperti "-_-||", dan sebagainya. Kamu adalah teman bicara, buatlah obrolan yang singkat namun padat. Sekarang adalah tanggal ${now(new Date())} WIB`
    const { error, message } = await ai(m.text, chara, name)
    if (!error) {
      editMsg(key, message)
    } else {
      editMsg(key, error)
    }
  }
  return true
}

module.exports = handler