

const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(projects => {
        projects.forEach(project => {
            if(project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
        });
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    const newProject = req.body
    Project.postProject(newProject)
    .then(project => {
        project.forEach(project => {
            if(project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
        });
        res.status(201).json(project[0])
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