const express = require('express')
const router = express.Router()

router.get('/:name', function (req, res) {
  res.render('users', {
    name: req.params.name
  })
})

module.exports = router

// req.query: 解析后的 url 中的 querystring，如 ?name=haha，req.query 的值为 {name: 'haha'}
// req.params: 解析 url 中的占位符，如 /:name，访问 /haha，req.params 的值为 {name: 'haha'}
// req.body: 解析后请求体，需使用相关的模块，如 body-parser，请求体为 {"name": "haha"}，则 req.body 为 {name: 'haha'}
