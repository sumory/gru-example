var mockRouter = require('./routes/mockRouter.js');

module.exports = function (app) {
    app.use('/mock', mockRouter);//

    app.get("/", function (req, res, next) {
        res.render("index");
    });
};