
const router = require('express').Router()
const Resource = require('./model')
const  { validateResource } = require('./middleware')

router.post('/', validateResource, (req, res, next) => {
    const resource = req.body
    Resource.add(resource)
    .then(resource => {
        res.status(200).json(resource)
    })
    .catch(next)
})

router.get('/', async (req, res) => {
    try {
    const resources = await Resource.find()
    res.status(200).json(resources)
} catch {
    next()
}
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'boooooo boo',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router