var fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) {
 return m.reply(`Masukkan Nomor!\n\nContoh: *${usedPrefix + command} 628xxx*`);
 }
 
 try {
 text = text.replace(/[^0-9]/g, "");
 if (!(text.startsWith("08") || text.startsWith("62"))) {
	return m.reply("Hanya dapat mengakses nomor Indonesia.");
 }
 
 text = text.startsWith("08") ? text.replace("08", "62") : text;
 if (text + "@s.whatsapp.net" === conn.user.jid) {
	return m.reply("Tidak bisa menggunakan nomor bot.");
 }

 const isValid = await conn.onWhatsApp(text + "@s.whatsapp.net");
 if (isValid.length == 0) {
	return m.reply("Nomor yang anda masukkan tidak terdaftar di WhatsApp, silahkan coba lagi.");
 }
 
 text = text.trim();
 
 var dann = await fetch(`https://daniapi.my.id/api/top-up/convert-saldo?idproduct=1&phonenumber=${text}&key=hQZB4T`);
 var res = await dann.json();
 var hasil = `• Order: *${res.data.order_id}*
• Tagihan: *${res.data.tagihan}*
• Time: *${res.data.time}*
• RRN: *${res.data.RRN}*
• Product: *${res.data.product}*
`;
 await m.reply(wait);
 await conn.sendFile(m.chat, res.data.img, '', hasil, m);
 } catch (e) {
 console.log(e);
 conn.reply(nomorown + "@s.whatsapp.net", e, m);
 }
}

handler.command = handler.help = ['convertsaldo', 'csaldo'];
handler.tags = ['tools'];
handler.limit = 1;
handler.premium = false;

module.exports = handler