var path = require('path');

module.exports = {
    port: 60000,
    viewEngine: 'ejs',

    views: path.resolve(__dirname, '..', 'views'),
    staticPath: path.resolve(__dirname, '..', 'public'),

    env: 'dev',
    logfile: path.resolve(__dirname, '..', 'logs/access.log'),

    sessionSecret: 'session_secret_random_seed',

    //不需要过滤是否登陆状态的白名单
    whitelist: [
        "/",
        "/auth/login",
        "/version"
    ]


};