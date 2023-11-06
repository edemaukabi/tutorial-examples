class Animal {
    constructor() {
        this.name = 'Animal';
        console.log('An Animal  is being instantiated by the constructor method');
    }
    talk() {
        return 'I am talking';
    }
    speak() {
        return 'I am speaking';
    }
}

class Mammal extends Animal {
    constructor() {
        super();
        this.name = 'Mammal';
        console.log('A Mammal is being instantiated by the constructor method');
    }
    walk() {
        return 'I am walking';
    }
}

const myArray = new Array();

const cat = new Animal();
const goat = new Mammal();

console.log(cat.talk());
console.log(cat.name);
console.log(goat.talk());


console.log(myArray)