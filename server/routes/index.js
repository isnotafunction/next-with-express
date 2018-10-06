const express = require('express')
const router = express.Router()

router.get('/fruit', (req, res)=>{
  res.end('Grapefruit')
})

module.exports = router