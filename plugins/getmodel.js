const axios = require("axios");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, `Masukkan Model!\n\nList Model:\n*rose*\n*lisa*\n*frieren*`, '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} rose*`, 'status@broadcast');
  if (!(text === 'rose' || text === 'frieren' || text === 'lisa')) return m.reply('Tidak dapat menemukan server!');
  await conn.sendPresenceUpdate('composing', m.chat)
  m.react(wmoji)
  
  try {
    let api = `https://api.itsrose.life/image/diffusion/get_all_models?server_name=${text}&apikey=${global.rose}`;
    let { data } = await axios.get(api);

    if (!data.status) {
      m.reply(data.message);
      return;
    }
    let result = data.result;
    let response = `*- ControlNET Models:*\n${result.controlnet_models.map(model => '◦ ' + model).join('\n')}\n\n*- Models:*\n${result.models.map(model => '◦ ' + model).join('\n')}\n\n*- Lora Models:*\n${result.lora_models.map(model => '◦ ' + model).join('\n')}\n\n*- Embeddings:*\n${result.embeddings.map(model => '◦ ' + model).join('\n')}\n\n*- Samplers:*\n${result.samplers.map(model => '◦ ' + model).join('\n')}`;
    m.reply(response);
  } catch (e) {
    console.log(e);
    m.reply("Terjadi kesalahan!");
  }
};

handler.help = ['getmodel'];
handler.tags = ['info'];
handler.command = /^getmodel$/i;

module.exports = handler;