// start your server here
require('dotenv').config();

const server = require('./api/server')
const port = process.env.PORT

server.listen(port, () => {
    console.log(`server started on port ${port}`)
})