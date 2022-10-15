const fs = require('fs')
const path = require('path')

const getUsers = () => {
    const users = path.join(__dirname, '../data/users.json')
    return fs.readFileSync(users)
}

module.exports = getUsers