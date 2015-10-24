
gru-example基于[Gru](https://github.com/sumory/gru)的示例项目，即时应用最典型的代表就是IM，这个示例是一个基于Gru的web聊天应用。


#### 安装

- 需首先配置好Gru集群
	- 集群配置详见Gru文档
	- 若不需要集群，Gru项目只需要部署一个模块(spear)即可
- 本示例是一个Node.js项目，需先安装[Node.js](http://nodejs.org)
- clone下本示例
	- npm install相关依赖
	- 配置文件在config目录下，特别注意spearNode配置，此配置为一个可用的spear节点
	- 运行node app.js，默认会加载config/dev.js配置文件


#### screenshots

- 私聊

![](assets/private-chat.png)

- 群聊

![](assets/group-chat.png)
