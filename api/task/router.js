// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.post('/', (req, res, next) => {
    const newTask = req.body
    Task.postTask(newTask)
    .then(task => {
        task.forEach(task => {
            if(task.task_completed === 0) {
                task.task_completed = false
            } else {
                task.task_completed = true
            }
        });
        res.status(201).json(task[0])
    })
    .catch(next)
})

module.exports = router