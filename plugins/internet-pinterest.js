const { pinterest, pinterest2 } = require("../lib/scraper_pinterest");

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text) {
      return conn.fakeReply(
        m.chat,
        'Masukkan pencarian!',
        '0@s.whatsapp.net',
        `Contoh: *${usedPrefix + command} orang random*`,
        m.chat
      );
    }

    m.react('🔍');

    const searchResult = await pinterest(text)
    if (searchResult && searchResult.length > 0) {
      const randomIndex = Math.floor(Math.random() * searchResult.length);
      const randomImage = searchResult[randomIndex];
      conn.sendFile(
        m.chat,
        randomImage,
        'pin.jpg',
        `ᴘᴇɴᴄᴀʀɪᴀɴ ᴅᴀʀɪ: *${text}*\nᴜʀʟ: ${randomImage}`,
        m
      );
    } else {
      const c = await pinterest2(text);
      conn.sendFile(
        m.chat,
        c,
        'pinterest.jpg',
        `ᴘᴇɴᴄᴀʀɪᴀɴ ᴅᴀʀɪ: *${text}*\nᴜʀʟ: ${c}`,
        m
      );
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan dalam menjalankan perintah.');
  }
};

handler.help = ['pinterest <text>'];
handler.tags = ['internet'];
handler.command = /^(pinterest|pin)$/i;
handler.limit = true;

module.exports = handler;