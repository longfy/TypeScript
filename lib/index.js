// 基本类型
let isMale = true;
let myName = 'Alex';
let myAge = 20;
let myGirlfriend = null;
let myHouse = undefined;
// 对象的类型
let alex = {
    name: 'Alex',
    gender: 'male'
};
// 数组的类型
let a = ['Alex', 'Bob'];
let b = ['Alex', 'Bob', 7];
let c = [{ name: 'Alex' }, { name: 'Bob' }];
let one = 1;
let two = 2;
let seven = 'seven';
// 枚举
// const Colors = {
//   Red: 'Red',
//   Blue: 'Blue',
//   Green: 'Green'
// }
var Colors;
(function (Colors) {
    Colors["Red"] = "Red";
    Colors["Blue"] = "Blue";
    Colors["Green"] = "Green";
})(Colors || (Colors = {}));
let myColor = Colors.Red;
let yourColor = Colors.Blue;
function isItRed(color) {
    return color === Colors.Red;
}
isItRed(myColor);
isItRed(yourColor);
// 属性和方法
class Cat {
    sayHi() {
        return `Meow, my name is ${this.name}`;
    }
}
let tom = new Cat();
tom.name = 'Tom';
console.log(tom.sayHi());
// 修饰符
class Animal {
    constructor(name) {
        this.setName(name);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    sayHi() {
        return `Meow, my name is ${this.getName()}`;
    }
}
let dog = new Animal('dog');
console.log(dog.sayHi());
