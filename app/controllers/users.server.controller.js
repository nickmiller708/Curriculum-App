var db = require('../../config/db');
var pwHash = require('password-hash');

exports.createUser = function (req,res,next) {
    console.log(req.body);
    var email = req.body.email;
    var pw = pwHash.generate(req.body.pw);
    values = [email, pw];
    db.get().query('INSERT INTO login_info (email,hashed_pw) Values(?,?)', values, function (err, result) {
        if (err) return err
        next()
    });
}