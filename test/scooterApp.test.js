const { ScooterApp } = require('../src/scooterApp.js')
const { Scooter } = require('../src/scooter.js')
const { User } = require('../src/user.js');

describe('Test ScooterApp register method', () => {
    test('register method should register new user', () => {
        const app1 = new ScooterApp();
        app1.register('username', 'password', 100);
        expect(app1.registeredUsernames[0]).toBe('username');
    });

    test('register method should reject username if it already exits', () => {
        const app2 = new ScooterApp();
        app2.register('username', 'password', 100);
        expect(app2.register('username', 'password', 100)).toBe('error: username already exits.');
    });
});

describe('Test ScooterApp login method', () => {
    test('login method should login user if user is not logged in', () => {
        const app3 = new ScooterApp();
        app3.register('username', 'password', 100);
        app3.login('username')
        expect(app3.registeredUsers[0].isLoggedIn).toBe(true);
    });

    test('login method should return error message if user not found', () => {
        const app4 = new ScooterApp();
        app4.register('username', 'password', 100);
        expect(app4.login('abc')).toBe('error: user does not exist.');
    });
});

describe('Test ScooterApp addScooter method', () => {
    test('addScooter method should add scooter if scooter is not docked', () => {
        const app5 = new ScooterApp();
        const scooter = new Scooter();
        scooter.docked = false;
        app5.addScooter('north', scooter)
        expect(scooter.docked).toBe(true);
    });

    test('addScooter should only add scooter if location is valid and scooter is instance of Scooter class', () => {
        const app6 = new ScooterApp();
        const instance = new Scooter();
        const validLocation = 'north';
        const location = 'not a valid location';
        const scooter = 'not an instance';
        expect(app6.addScooter(location, instance)).toBe('error: location does not exist');
        expect(app6.addScooter(validLocation, scooter)).toBe('error: scooter does not exist.');
    })

    test('addScooter should updated scooter station property to location given', () => {
        const app8 = new ScooterApp();
        const scooter = new Scooter();
        app8.addScooter('north', scooter);
        expect(scooter.station).toBe('north');
    });
});

describe('Test ScooterApp class removeScooter method', () => {
    test('removeScooter method should remove target scooter from matching station array', () => {
        const app7 = new ScooterApp();
        const scooter = new Scooter();
        const location = 'north';
        app7.addScooter(location, scooter)
        app7.removeScooter(scooter, location)
        expect(scooter.docked).toBe(false);
    })
});