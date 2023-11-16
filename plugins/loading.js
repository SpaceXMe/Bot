let handler = async (m, { conn }) => {
  const arr = [
    { text: "▱▱▱▱▱▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐.", timeout: 100 },
    { text: "▰▱▱▱▱▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐..", timeout: 100 },
    { text: "▰▰▱▱▱▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐...", timeout: 100 },
    { text: "▰▰▰▱▱▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐.", timeout: 100 },
    { text: "▰▰▰▰▱▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐..", timeout: 100 },
    { text: "▰▰▰▰▰▱▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐...", timeout: 100 },
    { text: "▰▰▰▰▰▰▱ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐.", timeout: 100 },
    { text: "▰▰▰▰▰▰▰ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐..", timeout: 100 },
    { text: "*ʜᴇʟʟᴏ*            ", timeout: 200 },
    { text: "*ʜᴇʟʟᴏ ᴍʏ*        ", timeout: 200 },
    { text: "*ʜᴇʟʟᴏ ᴍʏ ғʀɪᴇɴᴅ*", timeout: 200 },
    { text: "                  ", timeout: 1000 },
    { text: "ᴋᴇᴛɪᴋ *#𝚖𝚎𝚗𝚞* ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ sᴜʙ ᴍᴇɴᴜ", timeout: 1000 }
  ];
  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: null });
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, { quoted: null })
  }
};
handler.tags = ['main'];
handler.help = ['loading'];
handler.command = /^(load(ing)?|startup)$/i;

module.exports = handler;