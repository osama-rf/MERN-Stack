class Ninja {
    constructor(name, health, speed = 3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Ninja name is ${this.name}`)
    }

    showStats() {
        console.log(`The ${this.name} stats is ${this.name}, ${this.strength}, ${this.speed}, ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }
}

const ninja = new Ninja("osama", 10, 6, 5)
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();


class superSensei extends Ninja {

    constructor(name, health = 200, speed = 10, strength = 10 , wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const sensei = new superSensei("Master Splinter");
sensei.speakWisdom();
sensei.showStats();

