const { User } = require('./user.js')
const { Scooter } = require('./scooter')

class ScooterApp {
    static registeredUsers = 0;
    static loggedInUsers = 0;
    static scooterSessions = 0;

    constructor(){
        this.downloadedAt = Date()
        this.registeredUsers = new Array();
        this.registeredUsernames = new Array();
        this.stations = new Object({north: [], east: [], south: [], west: []});
    }

    register(username, password, age){
        if(this.registeredUsernames.includes(username)){
            return 'error: username already exits.';
        }else{
            let newUser = new User(username, password, age);
            this.registeredUsers.push(newUser);
            this.registeredUsernames.push(username);
        }
    }

    login(username){
        let userFound = false;
        for(let i = 0; i < this.registeredUsers.length; i++){
            if(this.registeredUsers[i].username === username){
                userFound = true;
                this.registeredUsers[i].isLoggedIn = true;
                break;
            }
        }
        if(userFound === false){
            return 'error: user does not exist.'
        }
    }

    addScooter(location, scooter){
        if(!['north', 'east', 'south', 'west'].includes(location)){
            return 'error: location does not exist';
        }else if(scooter instanceof Scooter === false){
            return 'error: scooter does not exist.';
        }else{
            if(scooter.docked === false){
                this.stations[location].push(scooter);
                scooter.docked = true;
                scooter.station = location;
            }else{
                return 'error: scooter is already docked'
            }
        }
    }

    removeScooter(scooter, location){
        for(let i = 0; i < this.stations[location].length; i++){
            if(this.stations[location][i].id === scooter.id){
                this.stations[location].splice(i, 1);
                scooter.docked = false;
                break;
            }
        }
    }
}

module.exports = { ScooterApp }