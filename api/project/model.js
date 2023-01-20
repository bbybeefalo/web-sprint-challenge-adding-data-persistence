// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function postProject(newProject) {
    return db('projects').insert(newProject)
    .then((id) => {
        return db('projects').where('project_id', id)
    })
}

module.exports = { getProjects, postProject }