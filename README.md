## node-blog

新人向  学习NODEJS


## 开发环境

- Node.js: `10.16.3`
- MSSql: `5.1.0`
- Express: `4.17.1`


## 学习日记

- npm 学习
    - 安装命令 `npm install xxxx --save `install save 可以首字母简写
    - 卸载命令 `npm uninstall xxxx`

- 引用js文件
    - require 用来加载代码 `var sqlserver = require('mssql');`
    - 而 exports 和 module.exports 则用来导出代码 `module.exports = db;`

- 热更新
    - 全局安装 supervisor:`npm i -g supervisor`
    - 运行 `supervisor xxx` 启动程序
    > 若启动报错'因为在此系统禁止运行脚本'，以管理员身份打开PowerShell,输入'set-ExecutionPolicy RemoteSigned'

- express.Router 路由
 
    将所有路由控制函数都放到了index.js，既臃肿又不好维护，在根目录下创建空文件夹 routes，在文件夹内创建 index.js 和 其他如user.js。

    1. router.js

        ```js   
        const express = require('express')
        const app = express()
        const indexRouter = require('./routes/index')
        const userRouter = require('./routes/users')

        app.use('/', indexRouter)
        app.use('/users', userRouter)

        app.listen(3000)
        ```
    2. routes/index.js
        ```js 
        const express = require('express')
        const router = express.Router()

        router.get('/', function (req, res) {
        res.send('hello, express')
        })

        module.exports = router
        ```
    3. routes/users.js
        ```js 
        const express = require('express')
        const router = express.Router()

        router.get('/:name', function (req, res) {
        res.send('hello, ' + req.params.name)
        })

        module.exports = router
        ```

- 模版引擎-ejs

    index.js 增加下列代码,在根目录新建文件夹 views，内放 XXX.ejs 文件

    ```js
    app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
    app.set('view engine', 'ejs')// 设置模板引擎为 ejs
    ```
