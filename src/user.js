const { Scooter } = require('../src/scooter.js')

class User {
    constructor(username, password, age){
        this.username = username
        this.password = password
        this.age = age
        this.registerDate = Date()
        this.isLoggedIn = false
    }
}

module.exports = { User }