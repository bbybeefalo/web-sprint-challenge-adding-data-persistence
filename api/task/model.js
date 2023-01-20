// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const tasks = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')

    return tasks
}

function postTask(newTask) {
    return db('tasks').insert(newTask)
    .then((id) => {
        return db('tasks').where('task_id', id)
    })
}

module.exports = { getTasks, postTask }