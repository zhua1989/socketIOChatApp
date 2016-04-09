

exports.create = function(name, cb) {
  var user = {
    name: name
  }

  db.save(user, cb)
}


