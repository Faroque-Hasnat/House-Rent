const router = require('express').Router()

const { create, getalltransaction } = require('../Controller/transactionController')

router.get('/getalltransaction/:id', getalltransaction)
router.post('/create', create)

module.exports = router