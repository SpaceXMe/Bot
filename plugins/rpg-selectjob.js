const moment = require('moment-timezone');

let handler = async(m, { conn, text, usedPrefix, command, args }) => {
  var user = global.db.data.users[m.sender];
  var waktu = moment.tz('Asia/Jakarta').format('dddd');
  var type = (args[0] || '').toLowerCase();
  
  let police = 'List Job:\n\n• Police';
  let helper = 'List Job:\n\n• Helper';
  let helper_police = 'List Job:\n\n• Police\n• Helper';
  if (user.cupon < 5) return m.reply(`Cupon kamu *${user.cupon}/5*`);
  
  if (waktu == 'Sunday') {
    switch (type) {
      case 'police':
      case 'polisi':
        user.police = true
        user.cupon -= 5
        m.reply('Selamat! kamu telah memilih *Job Police!*\n\n-5 Cupon')
      break;
    default:
      return m.reply(police)
    }
  } else if (waktu == 'Monday') {
    switch (type) {
      case 'helper':
        user.helper = true
        user.cupon -= 5
        m.reply('Selamat! kamu telah memilih *Job Helper!*\n\n-5 Cupon')
      break;
    default:
      return m.reply(helper)
    }
  }
};

handler.help = ['selectjob'];
handler.tags = ['rpg'];
handler.command = /^(selectjob|pilih(kerja|pekerjaan)|job)$/i;

handler.limit = true;
handler.exp = 0;

module.exports = handler;