const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const uploadImage = require("../lib/uploadImage");

let handler = m => m
handler.before = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  let mime = (m.msg || m).mimetype || "";
  if (chat.antiNsfw) {
  if (/image|webp/.test(mime)) {
    let img = await m.download();
    let imageUrl = await uploadImage(img);
    try {
      let api = `https://api.lolhuman.xyz/api/nsfwcheck?apikey=${global.lolhuman}&img=${encodeURIComponent(
        imageUrl
      )}`;
      let { data } = await axios.get(api);
      let status = data.status;
      if (status) {
        let classes = data.suggestive_classes;
        let isSuggestive = false;
        for (const key in classes) {
          if (classes[key] >= 0.49) {
            isSuggestive = true;
            break;
          }
        }
        if (data.erotica >= 0.49 || data.sexual_display >= 0.49 || data.sexual_activity >= 0.49 || data.suggestive >= 0.49 || isSuggestive) {
          let user = m.sender;
          let mention = `@${user.replace(/@.+/, "")}`;
          await conn.reply(
            m.chat,
            `${mention} Terdeteksi mengirim NSFW!\n\nMaaf kamu akan saya kick!`,
            m
          );
          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
        }
      }
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, "Terjadi kesalahan!", m);
    }
  }
};
}

module.exports = handler;
   
const pornDetector = (buffer) => {
   return new Promise(async resolve => {
      try {
         let form = new FormData()
         form.append('media', buffer)
         form.append('models', 'nudity-2.0,wad,gore')
         form.append('api_user', process.env.API_USER)
         form.append('api_secret', process.env.API_SECRET)
         let result = await axios.post('https://api.sightengine.com/1.0/check.json', form, {
            headers: form.getHeaders()
         })
         if (result.status == 200) {
            if (result.data.status == 'success') {
               if (result.data.nudity.sexual_activity >= 0.50 || result.data.nudity.suggestive >= 0.50 || result.data.nudity.erotica >= 0.50) return resolve({
                  creator: 'NomiSec07-Tech',
                  status: true,
                  msg: `Nudity Content : ${(result.data.nudity.sexual_activity >= 0.50 ? result.data.nudity.sexual_activity * 100 : result.data.nudity.suggestive >= 0.50 ? result.data.nudity.suggestive * 100 :  result.data.nudity.erotica >= 0.50 ? result.data.nudity.erotica * 100 : 0)}%`
               })
               if (result.data.weapon > 0.50) return resolve({
                  creator: global.creator,
                  status: true,
                  msg: `Provocative Content : ${result.data.weapon * 100}%`
               })
            } else return resolve({
               creator: global.creator,
               status: false
            })
         } else return resolve({
            creator: global.creator,
            status: false
         })
      } catch (e) {
         return resolve({
            creator: global.creator,
            status: false,
            msg: e.message
         })
      }
   })
}