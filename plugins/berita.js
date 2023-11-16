var { iNews } = require('dhn-api');

let berita = async (m, { conn, text, usedPrefix, command }) => {

  const editMsg = (key, text, quoted = null) => {
    return conn.relayMessage(m.chat, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: text
        }
      }
    }, { quoted })
  }
  
  let waiter = await conn.reply(m.chat, 'Mencari berita 🔍', m);
  try {
    switch (command) {
      case 'inews':
        let inews = await iNews();
        let inewsstr = '';
        for (let i of inews) {
          inewsstr += `*Berita*: ${i.berita}\n`;
          inewsstr += `*Upload*: ${i.berita_diupload}\n`;
          inewsstr += `*Jenis Berita*: ${i.berita_jenis}\n`;
          inewsstr += `*Url*: ${i.berita_url}\n\n`;
        }
        editMsg(waiter, inewsstr.trim(), m);
      break;
    }
  } catch (e) {
    console.error(e);
    editMsg(waiter, e?.message, m);
  }
}

berita.command = berita.help = ['inews'];
berita.tags = ['berita'];

module.exports = berita;