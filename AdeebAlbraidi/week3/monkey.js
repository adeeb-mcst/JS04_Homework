var Monkey01 = {
    name:"Bubble",
    species:"Japanese Macaque",
    foodsEaten:["Peach","Apple","Bread"],
    eatSomething : function(thingToEat) {
        this.foodsEaten.push(thingToEat);
    },
    introduce: function() {
        console.log(`Hi my name is ${this.name}, My species is ${this.species}.`);
        var food = "And I've eaten ";
        for(k in this.foodsEaten) {
            food += this.foodsEaten[k] + " ";
        }
        console.log(`${food}\n`);
    }
}

var Monkey02 = {
    name:"Jumpy",
    species:"Squirrel Monkey",
    foodsEaten:["Pear","Pineapple","Carrot"],
    eatSomething : function(thingToEat) {
        this.foodsEaten.push(thingToEat);
    },
    introduce: function() {
        console.log(`Hi my name is ${this.name}, My species is ${this.species}.`);
        var food = "And I've eaten ";
        for(k in this.foodsEaten) {
            food += this.foodsEaten[k] + " ";
        }
        console.log(`${food}\n`);
    }
}

var Monkey03 = {
    name:"Moka",
    species:"Capuchin Monkeys",
    foodsEaten:["Banana","Orange","Strawberry"],
    eatSomething : function(thingToEat) {
        this.foodsEaten.push(thingToEat);
    },
    introduce: function() {
        console.log(`Hi my name is ${this.name}, My species is ${this.species}.`);
        var food = "And I've eaten ";
        for(k in this.foodsEaten) {
            food += this.foodsEaten[k] + " ";
        }
        console.log(`${food}\n`);
    }
}

Monkey01.introduce();
Monkey02.introduce();
Monkey03.introduce();

Monkey01.eatSomething("Almond");
Monkey02.eatSomething("Hazelnut");
Monkey03.eatSomething("Cashew");

Monkey01.introduce();
Monkey02.introduce();
Monkey03.introduce();