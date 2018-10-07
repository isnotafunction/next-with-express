const express = require('express')
const router = express.Router()

//api/ prefixed
router.get('/fruitso', (req, res)=>{
  res.end('Grapefruit')
})

module.exports = router