const { tmpdir } = require('os')
const { join } = require('path')
const path = require('path')
const fs = require('fs');
const { readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch } = require('fs')
let handler = async (m, { args, text }) => {

deleteFiles(`./${global.session}`)
m.reply('Berhasil menghapus sessions!')

function deleteFiles(dann) {
  fs.readdir(dann, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      if (file !== 'creds.json') {
        fs.unlink(path.join(dann, file), err => {
          if (err) throw err;
        });
      }
    }
  });
}
}
handler.help = ['clearsession']
handler.tags = ['owner']
handler.command = /^((c|clear)(sessi|session))$/i

handler.mods = true

module.exports = handler