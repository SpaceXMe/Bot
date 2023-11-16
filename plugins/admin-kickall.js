const { areJidsSameUser } = require("@adiwajshing/baileys");

let handler = async (m, { conn, participants }) => {
 let users = participants.filter((u) => !areJidsSameUser(u.id, conn.user.id));
 let kickedUser = [];
 for (let user of users) {
   if (user.id.endsWith("@s.whatsapp.net") && !user.admin) {
     await kickedUser.push(user.id);
     await conn.delay(1 * 1000);
   }
 }
 if (!kickedUser.length >= 1)
   return m.reply("Di grup ini tidak ada member kecuali kamu dan aku");
 const res = await conn.groupParticipantsUpdate(m.chat, kickedUser,"remove");
 await conn.delay(1 * 1000);
 await conn.reply(m.chat,
   `Sukses mengeluarkan semua member\n${kickedUser.map(
     (v) => "@" + v.split("@")[0]
   )}`,
   null,
   {
     mentions: kickedUser,
   }
 );
};

handler.help = ['kickall'];
handler.tags = ['admin'];
handler.command = /^(kickall)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

module.exports = handler;