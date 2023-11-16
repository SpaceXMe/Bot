let { msToDate, clockString } = require('../lib/myfunc')

let handler = m => m 
  
handler.all = async function (m) {
  let setting = db.data.settings[this.user.jid]
  if (setting.autobio) {
    if (new Date() * 1 - setting.status > 1000) {  
      let _uptime = process.uptime() * 1000
      let uptime = msToDate(_uptime)
      await this.setBio(`${this.user.name} | Uptime: ${uptime} |  Mode: ${global.opts["self"] ? 'Private' : setting.groupOnly ? 'Only Group' : 'Public'} | Version: ${global.version} | Author: © Bagzx`).catch(_ => _)
      setting.status = new Date() * 1
    }
   }
  return !0
}
  
module.exports = handler