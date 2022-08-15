class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {

    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}


class Effect extends Card {

    constructor(name, cost, text, magnitude, stat) {
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }

    play(taeget) {
        if (taeget instanceof Unit) {
            if (this.stat == "resilience") {
                taeget.res += this.magnitude;
            } else {
                taeget.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!")
        }
    }
}

// Unit Cards
const redNinja = new Unit("Red Belt Ninja", "3", "3", "4");
const blackNinja = new Unit("Black Belt Ninja", "4", "5", "4");


// Effects Cards
const hardAlgo = new Effect("Hard Algorithm", "2", "increase target's resilience by 3", "3", "resilience");
const promiseRej = new Effect("Unhandled Promise Rejection", "1", "reduce target's resilience by 2", "2", "resilience");
const pairProgramming = new Effect("Pair Programming", "3", "increase target's power by 2", "2", "power");

// Play
hardAlgo.play(redNinja);
console.log(redNinja);
promiseRej.play(redNinja);
console.log(redNinja);
pairProgramming.play(redNinja);
console.log(redNinja);

redNinja.attack(blackNinja);
console.log(blackNinja);
