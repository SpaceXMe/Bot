let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn, isOwner, command, text }) => {
  if (global.conn.user.jid != conn.user.jid) return
  let lll = await conn.reply(m.chat, '_Executing..._', m)
  let o
  try {
    o = await exec(command.trimStart()  + ' ' + text.trimEnd())
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim()) conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: lll,
        editedMessage: {
          conversation: stdout
        }
      }
    }, { quoted: m })
    if (stderr.trim()) conn.relayMessage(m.chat, {
      protocolMessage: {
        type: 14,
        key: lll,
        editedMessage: {
          conversation: stderr
        }
      }
    }, { quoted: m })
  }
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler