// build your `Task` model here
const db = require('../../data/dbConfig')

function getTasks() {
    return db('tasks')
}

function postTask(newTask) {
    return db('tasks').insert(newTask)
    .then((id) => {
        return db('tasks').where('task_id', id)
    })
}

module.exports = { getTasks, postTask }