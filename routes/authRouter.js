var express = require('express');
var router = express.Router();
var config = require("../config");
var logger = require('../lib/log.js').logger('authRouter');
var groups = config.data.groups;
var users = config.data.users;

router.get('/login', function (req, res, next) {
    if(req.session && req.session.user){
        return res.redirect("/profile");
    }
    res.render('login');
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('login');
});

router.post('/login', function (req, res, next) {
    try {
        var password = req.body.password.trim();
        var username = req.body.username.trim();

        if (!username) {
            res.render('error', {
                msg: "用户名不能为空"
            });
            return;
        }
        if (!password) {
            res.render('error', {
                msg: "密码不能为空"
            });
            return;
        }


        var ok =false;
        for(var i in users){
            var u = users[i];
            if(username == u.username && password == u.password){
                req.session.user = {
                    id: u.id,
                    avatar: u.avatar,
                    username: u.username,
                    name: u.name,
                    url: u.url,
                    groups: u.groups
                };
                ok=true;
                break;
            }
        }

        if(ok){
            res.redirect("/profile");
        }
        else{
            return res.render('error', {
                msg: "查找用户出错或用户不存在"
            });
        }

    } catch (e) {
        logger.error(e);
        res.render('error', {
            msg: "登录发生异常"
        });
    }
});

module.exports = router;