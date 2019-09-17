const router = require('express').Router()

const { create, getallmonth } = require('../Controller/monthController')

router.get('/getallmonth/:id', getallmonth)
router.post('/create', create)

module.exports = router