var authRouter = require('./routes/authRouter.js');
var profileRouter = require('./routes/profileRouter.js');

module.exports = function (app) {
    app.use('/auth', authRouter);//
    app.use('/profile', profileRouter);//

    app.get("/", function (req, res, next) {
        res.redirect("/auth/login");
    });
};