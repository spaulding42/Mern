class Ninja {
    constructor(name, health= 100, speed = 3,strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength

    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
        
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name,health = 200,speed = 10, strength = 10,wisdom = 10){
        super(name, health,speed,strength);
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Always remember to drink your java before you script")
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength + ", Wisdom: " + this.wisdom);
    }
}
const ninja1 = new Sensei("Master Splinter");
ninja1.sayName();
ninja1.speakWisdom();
ninja1.showStats();