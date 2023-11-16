const axios = require("axios");
const fs = require("fs");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/addlist.js');

let handler = m => m
  handler.before = async function (m, { conn, usedPrefix, isGroup }) {
    const db_respon_list = JSON.parse(fs.readFileSync('./database/store.json'));
    if (!usedPrefix && m.isGroup && isAlreadyResponList(m.chat, m.text, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, m.text, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(m.chat, { text: sendResponList(m.chat, m.text, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
conn.sendFile(m.chat, buff, '', `${get_data_respon.response}`, m)
    }
  }
}
module.exports = handler

const getBuffer = async (url, options) => {
        try {
            options ? options : {}
            const res = await axios({
                method: "get",
                url,
                headers: {
                    'DNT': 1,
                    'Upgrade-Insecure-Request': 1
                },
                ...options,
                responseType: 'arraybuffer'
            })
            return res.data
        } catch (e) {
            console.log(`Error : ${e}`)
        }
    }