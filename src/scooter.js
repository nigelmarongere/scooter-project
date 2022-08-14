class Scooter {
    static scooterCount = 0;
    static uniqueId = 1;

    constructor(){
        this.id = Scooter.uniqueId
        this.docked = false
        this.rented = false
        this.station = 'not docked'
        this.isFullyCharged = true
        this.isBroken = false
        Scooter.uniqueId += 1;
        Scooter.scooterCount += 1;
    }

    rent(){
        if(this.rented === true || this.isFullyCharged === false || this.isBroken === true){
            return 'error: scooter is unavailable';
        }else{
            this.rented = true;
        }
    }

    repair(){
        if(this.isBroken === false){
            return 'error: scooter is not broken';
        }else{
            this.isBroken = false;
        }
    }
}

module.exports = { Scooter }