let animalName = prompt('What do you want to name your animal?');

const newAnimal = (currentAnimal) => {
    if (currentAnimal === 'dog') {
        let currentClass = new dog(animalName);
    } else if (currentAnimal === 'cat') {
        let currentClass = new cat(animalName);
    } else if (currentAnimal === 'rabbit') {
        let currentClass = new rabbit(animalName);
    } else {
        let newAnimal = prompt('You cannot select that animal. Choose either a dog, cat or a rabbit.')
        newAnimal(newAnimal)
    }
}



class animal{
    constructor (name){
        
        this._name = name;
        this._hunger = false;
        this._thirst = false;
        // this._health = false;
        this._play = false;
    
    }
    get name(){
    return this._name;
    
    }
    get hunger(){
    return this._hunger;
    
    }
    get thirst(){
    return this._thirst;

    }
    get health(){
        return this._health;
    }

    get play(){
        return this._play;
    }

    // eat() {
    //     this._hunger-=10;
    // }
    // drink() {
    //     this._thirst-=10;
    // }
    // play(){
    //     this._play+=10;
    // }
    // health() {
    //     this._health-=10;
    // }
}

    
    class dog extends animal {
    constructor(name){
    super(name);
    this._lovesFood = `steak`
    get_reaction1 = `I AM TIRED!!!`
    get_reaction2 = `I NEED SOME FOOD AND PLAY WITH ME`
    get_reaction3 = `I AM FULL OF ENERGY PLAY WITH ME`
    get_reaction4 = `YOU ARE THE BEST OWNER EVER!!!`
    get_reaction5 = `I AM THIRST I NEED A DRINK`
    get_reaction6 = `I NEED FOOD I AM TIRED!!!`
    get_reaction7 = `CAN YOU PLAY WITH ME??`

    }
}


        // consequences method
        status(react1,react2,react3,react4,react5,react6,react7){
            //  animal mood responses
            if ((this._play == false) && (this._hunger == false) && (this._drink == false)) {
                // checks if animals had not being played with, feed and given a drink
                return react1;
​
            } else if ((this._play == false) && (this._hunger == false) && (this._drink == true)) {
                // checks if animals had not being played with, feed but given a drink
                return react2;
​
            } else if ((this._play == false) && (this._hunger == true) && (this._drink == true)) {
                return react3;
                // checks if animals had not being played with, but feed and given a drink
​
            } else if ((this._play == true) && (this._hunger == true) && (this._drink == true)) {
                // checks if animals had being played with, feed and given a drink
                return react4;
​
            } else if ((this._play == true) && (this._hunger == true) && (this._drink == false)) {
                // checks if animals had being played with, feed but not given a drink
                return react5;
​
            } else if ((this._play == true) && (this._hunger == false) && (this._drink == false)) {
                // checks if animals had being played with, but not feed  and not given a drink
                return react6;
​
            }else if ((this._play == false) && (this._hunger == true) && (this._drink == false)) {
                // checks if animals had not being played with, not given a drink but had beign feed
                return react7;
            }
                
            
        }   
        
​
    }






