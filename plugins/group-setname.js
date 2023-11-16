let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) return m.reply('Masukan teks untuk nama group!')
    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply('Sukses Mengganti Nama Grup')
  }
  
  handler.help = ['setnamegc']
  handler.tags = ['group']
  handler.command = /^setnamegc$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  
  module.exports = handler
