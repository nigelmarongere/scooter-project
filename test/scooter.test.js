const { Scooter } = require('../src/scooter.js')
const { User } = require('../src/user.js')

describe('Test Scooter class rent method', () => {
    test('scooter can be rented if fully charged + not broken', () => {
        const scooter = new Scooter()
        scooter.rent();
        expect(scooter.rented).toBe(true);
        scooter.rented = false;
        scooter.isFullyCharged = false;
        expect(scooter.rent()).toBe('error: scooter is unavailable');
    })
})

describe('Test Scooter class repair method', () => {
    test('repair method should repair scooter if broken', () => {
        const scooter = new Scooter();
        expect(scooter.repair()).toBe('error: scooter is not broken');
        scooter.isBroken = true;
        scooter.repair();
        expect(scooter.isBroken).toBe(false);
    })
})