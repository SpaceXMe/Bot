let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
  if (user.warn >= global.warn) {
    user.banned = true;
  }
  return true
}

module.exports = handler