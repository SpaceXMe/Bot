var ratelimiter = require("ratelimiter");

var handler = async (m, { conn, text, args, usedPrefix, command }) => {
  var res = args.join(' ').split('|');
  if (!args[0]) throw `Masukkan IP dan Port!\n\nContoh: ${usedPrefix + command} 123.456.789.0|80`;

  // Memasukkan IP dan Port
  var ip = res[0];
  var port = parseInt(res[1]);

  // Melakukan pengecekan dengan menggunakan Rate Limiter
  var limit = new ratelimiter.RateLimiter({
    interval: 60, // Interval waktu dalam detik
    maxInInterval: 10, // Jumlah maksimum permintaan dalam interval waktu
    minDifference: 1000, // Selisih minimal antara setiap permintaan dalam milidetik
    id: `${ip}:${port}` // ID unik untuk mengidentifikasi IP dan port
  });

  limit.removeTokens(1, (err, remainingRequests) => {
    if (err) throw err;

    if (remainingRequests < 0) {
      // Mengambil aksi saat melebihi batas permintaan
      m.reply(`Serangan DDoS terdeteksi dari IP ${ip}:${port}`);
      // Tulis kode untuk mengambil tindakan yang sesuai seperti memblokir IP atau membatasi akses.
    } else {
      // Aksi yang dilakukan ketika permintaan masih dalam batas yang ditentukan
      m.reply(`Permintaan diterima dari IP ${ip}:${port}`);
      // Tulis kode untuk menangani permintaan yang valid.
    }
  });
};

handler.command = handler.help = ['antiddos', 'antidos'];
handler.tags = ['tools'];

module.exports = handler;