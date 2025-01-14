const validateResource = (req, res, next) => {
    const { resource_name } = req.body
    if (resource_name === undefined ||
        typeof resource_name !== 'string' ||
        !resource_name.trim()
    ) {
        next({ status: 400, message: 'resource name is required'})
    } else {
        next()
    }
}


module.exports = {
    validateResource
}