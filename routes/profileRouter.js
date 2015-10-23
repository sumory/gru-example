var express = require('express');
var commonUtils = require("../lib/utils.js");
var logger = require("../lib/log.js").logger("profileRouter");
var config = require("../config");
var router = express.Router();
var allGroups = config.data.groups;
var allUsers = config.data.users;


router.get("/", function (req, res) {
    var u = req.session.user;

    var groups = [];
    for (var i in allGroups) {
        for (var j in u.groups) {
            if (allGroups[i].id == u.groups[j]) {
                groups.push(allGroups[i]);
            }
        }
    }

    var users = [];
    for (var i in allUsers) {
        if (allUsers[i].id != u.id) {
            users.push(allUsers[i]);

        }
    }

    return res.render("profile", {
        groups: groups,
        users: users,
        groupIds: u.groups.join(",")
    });
});

//生成token
router.get("/genToken", function (req, res, next) {
    var userId = req.query.userId;
    var userName = req.query.userName;

    var token1 = commonUtils.md5(userId + "_" + userName, "token_gen_for_ticket@sumory.com");
    var token2 = commonUtils.md5(userId + "_" + userName + "_" + token1, "token_gen_for_spear@sumory.com");

    res.json({
        success: true,
        token1: token1,
        token2: token2
    })
});


module.exports = router;

