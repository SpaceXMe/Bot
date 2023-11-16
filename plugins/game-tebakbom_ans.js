let fs = require('fs')
let handler = m => m
handler.before = async function (m) {

   const editedMessage = (key, convert) => {
      this.relayMessage(m.chat, {
          protocolMessage: {
              type: 14,
              key: key,
              editedMessage: {
                conversation: convert
              }
          }
      }, { quoted: m })
   };
   
   let hore = 'https://telegra.ph/file/f6ebfea2758b947e1e49d.jpg'
   let duar = './database/Gif/bomb.mp4'
   let id = m.chat
   let reward = 9999
   let body = typeof m.text == 'string' ? m.text : false

this.tebakbom = this.tebakbom ? this.tebakbom : {}
   if (!(id in this.tebakbom) && m.quoted && /${htki}  *B O M B* ${htka}/i.test(m.quoted.text)) return this.reply(m.chat, `Sesi telah berakhir, silahkan kirim .tebakbom untuk membuat sesi baru.`, m)
   if ((id in this.tebakbom) && !isNaN(body)) {
      let timeout = 180000
      let json = this.tebakbom[id][1].find(v => v.position == body)
      if (!json) return this.reply(m.chat, `Untuk membuka kotak kirim angka 1 - 9`, m)
      if (json.emot == '💥') {
         json.state = true
         let bomb = this.tebakbom[id][1]
         let teks = `${htki}  *B O M B* ${htka}\n\n`
         teks += `Duaarrr!\n\n`
         teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
         teks += `*Permainan selesai!* kotak berisi bom terbuka.`
         editedMessage(this.tebakbom[id][0], '*YOU LOSE (⁠╥⁠﹏⁠╥⁠)*')
         this.sendFile(m.chat, duar, 'mleduk.mp4', teks, m, true, { gifPlayback: true })
            clearTimeout(this.tebakbom[id][2])
            delete this.tebakbom[id]
         
      } else if (json.state) {
         return this.reply(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain.`, m)
      } else {
         json.state = true
         let changes = this.tebakbom[id][1]
         let open = changes.filter(v => v.state && v.emot != '💥').length
         if (open >= 8) {
            let teks = `${htki}  *B O M B* ${htka}\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `*Permainan selesai!* kotak berisi bom tidak terbuka : (+ *${reward}* Exp )`
            editedMessage(this.tebakbom[id][0], '*YOU WIN! (⁠≧⁠▽⁠≦⁠)*')
            this.sendMessage(m.chat, {
            text: teks,
            contextInfo: {
            externalAdReply: {
            title: 'SELAMAT!',
            body: '© Space',
            thumbnailUrl: hore,
            sourceUrl: '',
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
               db.data.users[m.sender].exp += reward
               clearTimeout(this.tebakbom[id][2])
               delete this.tebakbom[id]
         } else {
            let teks = `${htki}  *B O M B* ${htka}\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
            teks += `Kotak berisi bom tidak terbuka.`
            editedMessage(this.tebakbom[id][0], teks).then(() => {
               db.data.users[m.sender].exp += reward
            })
         }
      }
   }
}

module.exports = handler

async function randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
}