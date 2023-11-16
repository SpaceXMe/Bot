var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.fakeReply(m.chat, 'Masukkan prompt!', '0@s.whatsapp.net', `Contoh: *${usedPrefix + command} 1 girl*`, 'status@broadcast');
  
  const editMsg = (key, text, quoted = null) => {
    return conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: key,
        editedMessage: {
          conversation: text
        }
      }
    }, { quoted })
  };

  var models = JSON.parse(fs.readFileSync('./database/Model/txt2img.json'));
  
  for (let i of models) {
    
    const { server_name, width, height, steps, model_id, sampler, guidance_scale, image_num, negative_prompt, enhance_prompt, multi_lingual, panorama, safety_checker, safety_checker_type, lora_model, hiresFix, lora_strength, embeddings_model, webhook } = i;
    
      const payloads = {
        server_name: server_name,
        prompt: `${text}`,
        negative_prompt: negative_prompt,
        width: width,
        height: height,
        steps: steps,
        model_id: model_id,
        sampler: sampler,
        cfg: guidance_scale,
        seed: "",
        enhance_prompt: enhance_prompt,
        multi_lingual: multi_lingual,
        image_num: image_num,
        panorama: panorama,
        safety_checker: safety_checker,
        safety_checker_type: safety_checker_type,
        lora_model: lora_model,
        lora_strength: lora_strength,
        clip_skip: 2,
        embeddings_model: embeddings_model,
        webhook: webhook
      };
    
    const waiter = await conn.reply(m.chat, '_Generating Your Image..._', m);
    
    try {
      const { data } = await axios.request({
        baseURL: "https://api.itsrose.life",
        url: "/image/diffusion/txt2img",
        method: "POST",
        params: {
          apikey: global.rose,
        },
        data: payloads,
      }).catch((e) => e?.response)
      console.log(data);
      
      const { status, message, result } = data;
      
      if (!status) {
        editMsg(waiter, message, m)
        return;
      } else {
        const { images, metadata, generation_time, server_name } = result;
        let server = server_name
        let second = generation_time.toFixed()
        let str = `*generating_time*: ${second} second\n*server_name*: ${server}\n`;
        for (let meta in metadata) {
          str += `*${meta}*: ${metadata[meta]}\n`;
        };
        await editMsg(waiter, str.trim(), m);
        
        for (const image of images) {
          await new Promise((resolve) => {
            setTimeout(async() => {
              await conn.sendMessage(m.chat, { image: { url: image }}, { quoted: m });
              resolve();
            }, generation_time * 1000);
          });
        }
      };
    } catch (e) {
      console.log(e);
      editMsg(waiter, "An error occurred while processing the request.", m);
    }
  }
};

handler.help = ['txt2img'];
handler.tags = ['ai', 'premium'];
handler.command = /^((text|txt)2(img|image))$/i;

handler.premium = true;

module.exports = handler;