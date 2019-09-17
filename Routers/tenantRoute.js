const router = require('express').Router()

const { create, getalltenants, getsingletenant } = require('../Controller/tenantController')

router.get('/getalltenants/:id', getalltenants)
router.get('/getsingletenant/:id', getsingletenant)
router.post('/create/:id', create)

module.exports = router