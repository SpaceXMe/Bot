let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
    let role
      if ((user.owner === false) && (user.premium === false) && (user.helper === false) && (user.police === false) ) role =  'Free Helper'
      else if ((user.owner === false) && (user.premium === true) ) role =  'Premium'
      else if ((user.police === true) && (user.owner === false)) role =  'Police'
      else if ((user.police === true) && (user.premium === true)) role =  'Police Premium'
      else if ((user.helper === true) && (user.premium === true)) role =  'Helper Premium'
      else if ((user.helper === true) && (user.owner === true)) role = 'Helper Owner'
      else if ((user.helper === true) && (user.premium === false) && (user.owner === false)) role = 'Free Helper'
      else if ((user.owner === true) && (user.premium === true)) role = 'Owner Premium'
      else if ((user.owner === true) && (user.premium === false)) role = 'Developer'
      else role = 'NPC'
    user.role = role
  return true
}

module.exports = handler