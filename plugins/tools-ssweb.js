const axios = require('axios')

let handler = async (m, { 
conn, text, command, usedPrefix
}) => {
  if (!text) return m.reply(`Linknya mana?`)
  if (!/https?:\/\//i.test(text)) throw 'Are you kidding me?'
  m.reply(wait)
  var phone = await ssweb(text, 'phone')
  var desktop = await ssweb(text, 'desktop')
  var tablet = await ssweb(text, 'tablet')
  var res = ``
  if (command === 'ss') {
    await conn.sendFile(m.chat, phone.result, '', res, m, false)
  }
  if (command === 'sshp') {
  await conn.sendFile(m.chat, phone.result, '', res, m, false)
  }
  if (command === 'sstablet') {
    await conn.sendFile(m.chat, tablet.result, '', res, m, false)
  }
  if (command === 'ssweb' || command === 'sspc') {
    await conn.sendFile(m.chat, desktop.result, '', res, m, false)
  }
}
handler.help = ['ssweb', 'sspc', 'sshp', 'sstablet']
handler.tags = ['tools']
handler.command = /^(ss|ssweb|sstablet|sspc|sshp)$/i

handler.limit = true
handler.fail = null

module.exports = handler

async function ssweb(url, device = 'desktop') {
     return new Promise((resolve, reject) => {
          const base = 'https://www.screenshotmachine.com'
          const param = {
            url: url,
            device: device,
            cacheLimit: 0
          }
          axios({url: base + '/capture.php',
               method: 'POST',
               data: new URLSearchParams(Object.entries(param)),
               headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
               }
          }).then((data) => {
               const cookies = data.headers['set-cookie']
               if (data.data.status == 'success') {
                    axios.get(base + '/' + data.data.link, {
                         headers: {
                              'cookie': cookies.join('')
                         },
                         responseType: 'arraybuffer'
                    }).then(({ data }) => {
                       let result = {
                            status: 200,
                            author: 'Ryzn',
                            result: data
                        }
                         resolve(result)
                    })
               } else {
                    reject(data.data.message)
               }
          }).catch(reject)
     })
}