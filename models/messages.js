var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('.db');



// Create new message in your database and return its id
exports.create = function(user, text, cb) {
  var message = {
    user: user,
    text: text,
  }

  db.save(comment, cb)
}

// Get all comments
exports.all = function(cb) {
  db.fetch({}, cb)
}