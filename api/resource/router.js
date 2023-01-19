
const router = require('express').Router()
const Resource = require('./model')

router.post('/', (req, res, next) => {
    const resource = req.body
    Resource.add(resource)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'boooooo boo',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router