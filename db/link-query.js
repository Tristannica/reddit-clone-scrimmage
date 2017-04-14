const pg = require('./knex')

function getAll(){
    pg('link').select()
}

module.exports = {
    getAll
}
