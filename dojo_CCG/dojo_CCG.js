class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res = target.res - this.power
        return target
    }
    display_stats(){
        console.log(this.name + "'s stats:" + " Power: " + this.power + " Resilience: " + this.res)
    }
}

class Effect extends Card{
    constructor(name,cost, stat,magnitude){
        super(name,cost);
        this.stat = stat
        this.magnitude = magnitude
        this.text = this.getText()
    }
    play(target){
        let raise = true
        this.magnitude >= 0? raise = true: raise = false
        if(raise){
            this.stat == "power"?
                target.power = target.power + this.magnitude:
                target.res = target.res + this.magnitude
        }
        else{
            this.stat == "power"?
                target.power = target.power - this.magnitude:
                target.res = target.res - this.magnitude
        }
        return target
    }
    getText(){
        let raise = true
        this.magnitude >= 0? raise = true: raise = false 
        return raise? 
            "Raises the targets " + this.stat + " by " + this.magnitude 
            : "Lowers the targets " + this.stat + " by " + this.magnitude
    }
}

let redNinja = new Unit("Red Belt Ninja",3,3,4)
const hardAlgo = new Effect("Hard Algorithm",2,"resilience",3)
redNinja = hardAlgo.play(redNinja)
redNinja.display_stats()
let blackNinja = new Unit("Black Belt Ninja",4,5,4)
const unhandledPromise = new Effect("Unhandled Promise Rejection",1,"resillience",-2)
redNinja = unhandledPromise.play(redNinja)
redNinja.display_stats()
const pairProgramming = new Effect("Pair Programming", 3,"power",2)
redNinja = pairProgramming.play(redNinja)
redNinja.display_stats()
blackNinja = redNinja.attack(blackNinja)
blackNinja.display_stats()


if (blackNinja.res <= 0){
    console.log("Black Ninja was defeated!")
}
if (redNinja.res <= 0){
    console.log("Red Ninja was defeated!")
}

console.log("Card: Hard Algorithm: " + "Cost: " + hardAlgo.cost + " " + hardAlgo.text)
console.log("Card: Unhandled Promise Rejection: Cost:" + unhandledPromise.cost + " " + unhandledPromise.text)
console.log("Card: Pair Programming: Cost: " + pairProgramming.cost + " " + pairProgramming.text)
