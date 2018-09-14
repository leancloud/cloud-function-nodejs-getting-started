# Cloud Function Node.js Getting Started
运行在 [LeanCloud](https://leancloud.cn/) 云引擎 Node.js 环境上的云函数项目示例。

## 本地运行

首先确认本机已经安装 [Node.js](https://nodejs.org/) 运行环境和 [LeanCloud 命令行工具](https://www.leancloud.cn/docs/leanengine_cli.html)，然后执行下列指令：

```
$ git clone https://github.com/leancloud/cloud-function-nodejs-getting-started.git
$ cd cloud-function-nodejs-getting-started
```

安装依赖：

```
$ npm install
```

登录 LeanCloud 账户（已经登录请跳过）：
```
$ lean login
```

关联项目：
```
$ lean switch
```
根据列表提示，输入数字，依次按回车确认，以关联到你的应用。


启动项目：

```
$ lean up
```

项目启动后会监听本机 3000 端口。

## 本机调试

使用命令行工具 `lean up` 命令启动后，即可打开 [localhost:3001](http://localhost:3001) 页面测试本机云函数和 Hook 函数。

## 部署到 LeanEngine

部署到预备环境（若无预备环境则直接部署到生产环境）：
```
$ lean deploy
```

将预备环境的代码发布到生产环境：
```
$ lean publish
```

## 相关文档

* [云引擎服务总览](https://leancloud.cn/docs/leanengine_overview.html)
* [云函数开发指南](https://leancloud.cn/docs/leanengine_cloudfunction_guide-node.html)
* [网站托管开发指南](https://leancloud.cn/docs/leanengine_webhosting_guide-node.html)
* [数据存储开发指南](https://leancloud.cn/docs/leanstorage_guide-js.html)
* [命令行工具使用详解](https://leancloud.cn/docs/leanengine_cli.html)
* [Node.js SDK API](https://github.com/leancloud/leanengine-node-sdk/blob/master/API.md)
* [JavaScript SDK API](https://leancloud.github.io/javascript-sdk/docs/)
* [云引擎常见问题和解答](https://leancloud.cn/docs/leanengine_faq.html)
