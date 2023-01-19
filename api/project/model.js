// build your `Project` model here
function getProjectById(project_id) {
    return Promise.resolve(`${project_id}`)
}

module.exports = { getProjectById }