let handler = async (m, { conn, groupMetadata }) => {
  let data = groupMetadata.desc ? groupMetadata.desc.toString() : 'Group ini tidak memiliki deskripsi'
  let pp = await conn.profilePictureUrl(m.chat, "image").catch(_ => thumbnail);
  let name = await conn.getName(m.chat)
  conn.reply(m.chat, `\n${data}\n`, m, { contextInfo: { externalAdReply: { title: name, body: 'GROUP DESCRIPTION', thumbnailUrl: pp, sourceUrl: sig, mediaType: 2 }}})
};
handler.help = ['deskripsi'];
handler.tags = ['group'];
handler.command = /^(des(k(ripsi)?|c(ription)?))$/i;

handler.group = true;
handler.exp = 0;

module.exports = handler;