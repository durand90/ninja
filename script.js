class Ninja {
    constructor(name, health, speed) {
        this.name = name
        this.speed = 3;
        this.name = name;
        this.health = health;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name);
        
    }

    showStats() {
        console.log(this.name);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health);
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {
    constructor(wisdom){
        super(name, health, speed);
        this.speed = 10;
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
    }
}