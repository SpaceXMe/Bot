
let votingInProgress = false;
let votes = {};
let players = [];
let deadPlayers = [];
let phase = 'night';
let werewolves = [];
let villagers = [];
let seer = '';
let doctor = '';

var handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Perintah: ${usedPrefix + command} *[join|leave|start|vote|rules|info|player]*`
  const commandPrefix = usedPrefix + command;
  if (args[0] === 'join') {
    if (players.includes(m.sender)) {
      throw 'Anda sudah bergabung dalam permainan werewolf.';
    }
    players.push(m.sender);
    conn.reply(m.chat, 'Selamat bergabung dalam permainan werewolf!', m);
  }
  else if ((args[0] === 'leave') || (args[0] === 'left')) {
    if (!players.includes(m.sender)) {
      throw 'Anda belum bergabung dalam permainan werewolf.';
    }
    players = players.filter(player => player !== m.sender);
    conn.reply(m.chat, 'Anda telah keluar dari permainan werewolf.', m);
  }
  else if (args[0] === 'start') {
    if (players.length < 3) {
      throw 'Jumlah pemain minimal untuk memulai permainan werewolf adalah 3 orang.';
    }
    phase = 'night';
    conn.reply(m.chat, 'Permainan werewolf dimulai! Malam pertama dimulai, werewolf bangun...', m);
    const werewolfCount = Math.floor(players.length / 4); // Gunakan angka yang lebih rendah agar lebih adil
    const seerCount = 1;
    const doctorCount = 1;
    const villagersCount = players.length - werewolfCount - seerCount - doctorCount;
    const shuffledPlayers = players.sort(() => 0.5 - Math.random());
    werewolves = shuffledPlayers.slice(0, werewolfCount);
    seer = shuffledPlayers.slice(werewolfCount, werewolfCount + seerCount)[0];
    doctor = shuffledPlayers.slice(werewolfCount + seerCount, werewolfCount + seerCount + doctorCount)[0];
    villagers = shuffledPlayers.slice(werewolfCount + seerCount + doctorCount);
    const playerRoles = {};
    werewolves.forEach(w => (playerRoles[w] = 'Werewolf'));
    playerRoles[seer] = 'Seer';
    playerRoles[doctor] = 'Doctor';
    villagers.forEach(v => (playerRoles[v] = 'Villager'));
    for (const [player, role] of Object.entries(playerRoles)) {
      const roleMessage = `Halo, kamu berperan sebagai ${role}. Selamat bermain!`;
      conn.reply(player + '@s.whatsapp.net', roleMessage, m);
    }
    phase = 'night';
    conn.reply(m.chat, 'Malam pertama dimulai, werewolf bangun...', m);
    if (werewolves.length > 0) {
      const target = villagers[Math.floor(Math.random() * villagers.length)];
      conn.reply(m.chat, `Werewolf telah membunuh ${target} pada malam hari.`, m);
      phase = 'day';
      conn.reply(m.chat, 'Siang hari tiba...', m);
    }
  }
    else if (args[0] === 'vote') {
    if (!players.includes(m.sender)) {
      throw 'Anda tidak dapat melakukan voting karena telah mati atau belum bergabung dalam permainan.';
    }
   let poll = { 
   name: 'Werewolf Voting',
   values: players,
   selectableCount: true
  };
    conn.sendMessage(m.chat, {
      poll: poll
    });
  }
  else if (args[0] === 'info') {
    const infoMessage = `
Permainan Werewolf adalah permainan berbasis teks yang melibatkan dua tim: Werewolf dan Warga Desa.
Fase saat ini: ${phase === 'night' ? 'Malam' : 'Siang'}
Jumlah pemain: ${players.length}
Seer: ${seer}
Doctor: ${doctor}
Villagers: ${villagers.join(', ')}
Gunakan perintah \`${commandPrefix} join\` untuk bergabung dalam permainan.
Gunakan perintah \`${commandPrefix} leave\` untuk keluar dari permainan.
Gunakan perintah \`${commandPrefix} start\` untuk memulai permainan jika jumlah pemain sudah cukup.
`;
    conn.reply(m.chat, infoMessage, m);
  }
  else if (args[0] === 'rules') {
    const rulesMessage = `Aturan Permainan Werewolf:
- Setiap pemain akan diberikan peran sebagai Werewolf, Seer, Doctor, atau Warga Desa secara acak.
- Malam hari, Werewolf akan memilih satu pemain untuk dibunuh.
- Seer dapat meramal peran satu pemain setiap malam.
- Doctor dapat menyelamatkan satu pemain dari pembunuhan setiap malam.
- Siang hari, semua pemain akan berdiskusi untuk mencari siapa Werewolf yang sebenarnya.
- Setiap pemain dapat memilih untuk "vote" untuk mengeliminasi seorang pemain selama siang hari.
- Pemain dengan suara terbanyak akan dieliminasi.
- Permainan berakhir ketika semua Werewolf dieliminasi atau ketika jumlah Werewolf sama dengan jumlah Warga Desa.
`;
    conn.reply(m.chat, rulesMessage, m);
  }
};

handler.help = ['werewolf'];
handler.tags = ['game'];
handler.command = /^(ww|werewolf)$/i;
handler.group = true;

module.exports = handler;

/*
 * DannTeam
 * ig: @dannalwaysalone
*/