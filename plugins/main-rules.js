let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, usedPrefix }) => {
    let teks = `
Kebijakan Privasi, Syarat Ketentuan dan Peraturan Space-MD

🔐 Kebijakan Privasi
1. Bot tidak akan merekam data riwayat chat user.
2. Bot tidak akan menyebarkan nomor users.
3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.
( DATA KALIAN AMAN 100% DAN PRIVASI KALIAN TERJAGA 100% )
${readMore}
📃 Peraturan Penggunaan
1. Dilarang menelpon Atau video call nomor bot.
2. Dilarang kirim berbagai bug, virtex, dll ke nomor bot.
3. Diharap Keras melakukan spam dalam penggunaan bot.
4. Dilarang Menculik bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+ Bagi Yg bukan User Premium/bawah 18+
( Konsokuensi jika melanggar = BLOCK, BANNED, SPAM BUG. BLACK LIST, VIRAL IN )
${readMore}
🖇️ Syarat Ketentuan  
1. Bot akan keluar dari group Jika Waktu Sewa Habis.
2. Bot dapat mem-ban users Jika melakukan Spam
3. Bot *tidak akan bertanggung jawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
6. Semua uang, credit, saldo atau apapun itu yang ada di dalam bot tidak mengandung unsur nyata.

👨‍💻 Tutorial penggunaan bot
• Gunakan prefix (prefix adalah sebuah awalan atau sebuah kunci untuk mengaktifkan fitur bot) Contoh : *${usedPrefix}menu* maka prefixnya adalah *(${usedPrefix})*

📬 Rules: 14/04/23

${readMore}
🏕️ Rules ke-2 agar dapat bertahan hidup di alam liar
1. Jangan main klarinet.
2. Jangan pernah melambaikan lampu senter ke depan dan ke belakang terlalu cepat. Itu dianggap undangan.
3. Jangan pernah berhenti menatap sekitar.
4. Jangan makan keju, kecuali yang kotak.
5. Jangan pakai topi sombrero.
6. Jangan pakai baju bodoh.
7. Jangan pakai rok panjang.
8. Jangan pakai sepatu merah.
9. Jangan berlagak seperti kera.
10. Jika beruang sudah mendekat, buat gambar lingkaran besar untuk melindungi diri dari gigitan beruang. Usahakan jangan lonjong.
11. Jangan lari.
12. Jangan jalan pincang.
13. Jangan merangkak.

2023 ${global.wm}
`.trim()
conn.reply(m.chat, teks, m)
}

handler.tags = ['main']
handler.command = /^(rules|rule|tutor(ial)?)$/i
handler.help = ['rules']
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}