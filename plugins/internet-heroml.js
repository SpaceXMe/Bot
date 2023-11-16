var fetch = require("node-fetch");

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Hero!\n\nContoh: ${usedPrefix + command}) gusion`;
  await conn.sendMessage(m.chat, { react: { text: wmoji, key: m.key }});
  
  var dann = await fetch(`https://api.ibeng.tech/api/others/heroml?q=${text}&apikey=B2JqyHiUht`);
  var res = await dann.json();
  
  var attributes = res.data.attributes.map(attribute => 
    `◦ Attributes: *${attribute.attribute}*
◦ Level: *${attribute.level_1}*
◦ Growth: *${attribute.growth}*\n`
  ).join('\n');
  
  var hasil = `
${htki} *HERO ML* ${htka}
◦ Role: *${res.data.role}*
◦ Release: *${res.data.release}*
◦ Specialty: *${res.data.specialty}*
◦ Lane: *${res.data.lane}*
◦ Price: *${res.data.price}*

• *GAMEPLAY INFO*
◦ Durability: *${res.data.gameplay_info.durability}*
◦ Offense: *${res.data.gameplay_info.offense}*
◦ Control Effect: *${res.data.gameplay_info.control_effect}*
◦ Difficulty: *${res.data.gameplay_info.difficulty}*

• *STORY INFO*
◦ Alias: *${res.data.story_info_list.Alias}*
◦ Origin: *${res.data.story_info_list.Origin}*
◦ Species: *${res.data.story_info_list.Species}*
◦ Gender: *${res.data.story_info_list.Gender}*
◦ Affiliation: *${res.data.story_info_list.Afiiliation}*
◦ Weapon: *${res.data.story_info_list.Weapons}*
◦ Abilities: *${res.data.story_info_list.Abilities}*
◦ Website: *${res.data.story_info_list.Website}*
◦ Height: *${res.data.story_info_list.Height}*
◦ Japanese: *${res.data.story_info_list.Japanese}*
◦ Indonesian: *${res.data.story_info_list.Indonesian}*

• *ATTRIBUTES*
${attributes}
`;
  
  await conn.sendFile(m.chat, res.data.hero_img, '', hasil, m);
};

handler.command = handler.help = ['heroml'];
handler.tags = ['internet'];

module.exports = handler;