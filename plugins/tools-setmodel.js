const fs = require("fs");
let { saveDataToFile, setModel, setLora, setSampler, setEmbeddings, setWidth, setHeight } = require("../lib/setmodel");

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

	const model = JSON.parse(fs.readFileSync('./database/Model/txt2img.json'));
	let str = `Masukkan model!

Contoh:
*${usedPrefix + command} model_id iu_v35*
	
Tersedia
• *sever_name*
• *negative_prompt*
• *image_num*
• *model_id*
• *lora_model*
• *sampler*
• *guidance_scale*
• *steps*
• *embeddings_model*
• *size*
• *hiresFix*
• *panorama*
• *safety_checker*
• *safety_checker_type*
• *lora_strength*`;
	
	let type = (args[0] || '').toLowerCase();
	let string = args.slice(1).join(' ') || '';
	
	switch (type) {
		case 'model_id':
		case 'model':
			let del = setModel(model, string);
			saveDataToFile(del);
			m.reply(`*model_id* berhasil di set ke *${string}*`)
			break
		case 'lora_model':
		case 'lora':
			let lora = setLora(model, string);
			saveDataToFile(lora);
			m.reply(`*lora_model* berhasil di set ke *${string}*`)
			break
	  case 'sampler':
	  case 'samplers':
	  	let samp = setSampler(model, string);
	  	saveDataToFile(samp);
	  	m.reply(`*sampler* berhasil di set ke *${string}*`);
	  	break
	  case 'embeddings_model':
	  case 'embeddings':
	  	let emb = setEmbeddings(model, string);
	  	saveDataToFile(emb);
	  	m.reply(`*embeddings_model* berhasil di set ke *${string}*`);
	  	break
	  case 'size':
	  	let width = setWidth(model, parseInt(args[1]));
	  	let height = setHeight(model, parseInt(args[2]));
	  	saveDataToFile(height);
	  	saveDataToFile(width);
	  	m.reply(`*size* berhasil di set ke *${args[1]}x${args[2]}*`);
	  	break
    case 'server_name':
    case 'server':
      let serv = set(model, "server_name", args[1])
      saveDataToFile(serv);
      m.reply(`*server* berhasil di set ke *${args[1]}*`)
      break
    case 'negative_prompt':
    case 'negative':
      let negat = set(model, "negative_prompt", string)
      saveDataToFile(negat);
      m.reply(`*negative_prompt* berhasil di set ke *${args.slice(1).join(' ')}*`)
      break
    case 'image_num':
    case 'image':
      let num = set(model, "image_num", parseInt(args[1]))
      saveDataToFile(num);
      m.reply(`*image_num* berhasil di set ke *${args[1]}*`)
      break
    case 'panorama':
      let pan = set(model, "panorama", args[1])
      saveDataToFile(pan);
      m.reply(`*panorama* berhasil di set ke *${args[1]}*`)
      break
    case 'hiresfix':
      let hf = set(model, "hiresFix", args[1])
      saveDataToFile(hf);
      m.reply(`*hiresFix* berhasil di set ke *${args[1]}*`)
      break
    case 'lora_strength':
      let ls = set(model, "lora_strength", string)
      saveDataToFile(ls);
      m.reply(`*lora_strength* berhasil di set ke *${args[1]}*`)
      break
    case 'step':
    case 'steps':
      let step = set(model, "steps", parseInt(args[1]))
      saveDataToFile(step);
      m.reply(`*steps* berhasil di set ke *${args[1]}*`)
      break
    case 'cfg':
    case 'guidance_scale':
      let cfg = set(model, "guidance_scale", string)
      saveDataToFile(cfg);
      m.reply(`*guidance_scale* berhasil di set ke *${args[1]}*`)
      break
    case 'safety_checker':
      let sc = set(model, "safety_checker", string)
      saveDataToFile(sc);
      m.reply(`*safety_checker* berhasil di set ke *${string}*`)
      break
    case 'safety_checker_type':
      let sct = set(model, "safety_checker_type", string)
      saveDataToFile(sct);
      m.reply(`*safety_checker_type* berhasil di set ke *${string}*`)
      break
		default:
			return m.reply(str);
	}
};
handler.help = ["setmodel"];
handler.tags = ["tools"];
handler.command = /^setmodel$/i;
handler.rowner = true

module.exports = handler;

function set(path, namb, newVar) {
  for (let i = 0; i < path.length; i++) {
    path[i][namb] = newVar
  }
  return path;
}