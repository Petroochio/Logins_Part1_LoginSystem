
var loginPage = function(req, res) {
    res.render('login');
};

var signupPage = function(req, res) {
    res.render('signup');
};

var logout = function(req, res) {
    res.redirect('/'); 
};

var login = function(req, res) {

    if(!req.body.username || ! req.body.pass) {
        return res.status(400).json({error: "RAWR! ALL FIELDS REQUIRED"});
    }
    
};

var signup = function(req, res) {
   
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.signup = signup;