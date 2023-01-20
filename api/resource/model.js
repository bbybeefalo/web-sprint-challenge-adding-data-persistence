// build your `Resource` model here
const db = require('../../data/dbConfig')

function add(resource) {
    return db('resources').insert(resource)
    .then((id) => {
        return db('resources').where('resource_id', id)
    })
}

function find() {
    return db('resources')
}

module.exports = {
    add,
    find
}