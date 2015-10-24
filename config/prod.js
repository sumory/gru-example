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
	"whitelist": [
		"/",
		"/auth/login",
		"/version"
	],


    spearNode:{//长连接服务地址
        url:"http://192.168.100.122:31001"
    },



    data: {
        groups: [
            {
                id: 160,
                name: "IM讨论小组"
            },
            {
                id: 170,
                name: "Node.js开发"
            },
            {
                id: 180,
                name: "Gru使用讨论"
            },
            {
                id: 190,
                name: "测试群组"
            }
        ],

        users: [
            {
                id: 201,
                avatar: "avatar1.png",
                username: "sumory",//登录帐户
                password: "123456",
                name: "sumory.wu",
                url: "sumory.com",
                groups: [//加入的群组
                    160, 170, 180, 190
                ]
            },
            {
                id: 202,
                avatar: "user2.jpg",
                username: "felix",
                password: "123456",
                name: "felix",
                url: "felix.com",
                groups: [
                    160, 190
                ]
            },
            {
                id: 203,
                avatar: "user3.jpg",
                username: "sunny",
                password: "123456",
                name: "david",
                url: "baidu.com",
                groups: [
                    180, 190
                ]
            },
            {
                id: 204,
                avatar: "user4.jpg",
                username: "mary",
                password: "123456",
                name: "mary",
                url: "google.com",
                groups: [
                    160, 180, 190
                ]
            },
            {
                id: 205,
                avatar: "user5.jpg",
                username: "bruce",
                password: "123456",
                name: "bruce",
                url: "shell.com",
                groups: [
                    160, 170, 190
                ]
            },
            {
                id: 206,
                avatar: "user6.jpg",
                username: "bamzi",
                password: "123456",
                name: "bamzi",
                url: "abc.com",
                groups: [
                    160, 170, 180
                ]
            },
            {
                id: 207,
                avatar: "user7.jpg",
                username: "roy",
                password: "123456",
                name: "roy",
                url: "yahoo.com",
                groups: [
                    160, 170, 180, 190
                ]
            }
        ]

    }
};