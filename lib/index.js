/**
 * 基本类型
 */
let isMale = true;
let myName = 'Alex';
let myAge = 20;
let myGirlfriend = null;
let myHouse = undefined;
/**
 * 对象的类型
 */
let alex = {
    name: 'Alex',
    gender: 'male'
};
/**
 * 数组的类型
 */
let a = ['Alex', 'Bob'];
let b = ['Alex', 'Bob', 7];
let c = [{ name: 'Alex' }, { name: 'Bob' }];
let one = 1;
let two = 2;
let seven = 'seven';
/**
 * 枚举
 */
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
/**
 * 属性和方法
 */
class Cat {
    sayHi() {
        return `Meow, my name is ${this.name}`;
    }
}
let tom = new Cat();
tom.name = 'Tom';
console.log(tom.sayHi());
/**
 * 修饰符
 */
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
/**
 * 类的继承
 */
class People {
    sayHi() {
        console.log('hi');
    }
}
// 继承了父类name方法，重写覆盖父类的sayHi方法
class Student extends People {
    sayHi() {
        console.log(`Meow, my name is ${this.name}`);
    }
    study() {
        console.log('学习');
    }
}
// 抽象类
class Animals {
}
class Bird extends Animals {
    fly() {
        console.log('鸟飞');
    }
    sing() {
        console.log('sing');
    }
    eat() {
        console.log('eat');
    }
}
/**
 * 接口继承类
 */
class Dragon {
    fly() {
        console.log('龙在飞');
    }
}
let f = {
    fly: function () {
        console.log('龙在飞');
    },
    fire: function () {
        console.log('龙在喷火');
    }
};
/**
 * 泛型函数
 */
function createArray(value, length) {
    // T只能在函数内部使用
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = value;
    }
    return arr;
}
let fooArray = createArray('foo', 3);
console.log(fooArray);
/**
 * 多个类型参数
 * 值交换
 */
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
let swapped = swap(['foo', 7]);
let listResult;
let firstItem = listResult.data[0];
/**
 * 泛型类
 */
class Component {
    constructor(props) {
        this.props = props;
    }
}
let button = new Component({
    color: 'red'
});
