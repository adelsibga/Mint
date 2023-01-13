const {Router} = require('express')
const http = require('http')
const routePrefix = () => {return '/backend'}
const router = Router({
    strict: routePrefix()
})

router.get('/alive', (req, res) => {
    res.status(204)
})

module.exports = router