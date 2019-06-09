// 基本类型
let isMale: boolean = true;

let myName: string = 'Alex';

let myAge: number = 20;

let myGirlfriend: null = null;

let myHouse: undefined = undefined;

// 对象的类型
interface Person {
  name: string;
  age?: number; // 可选属性
  [propName: string] : string | number; //联合类型
  // [propName: string] : any; //任意属性
}

// 对象的类型
let alex: Person = {
  name: 'Alex',
  gender: 'male'
}

// 数组的类型
let a: string[] = ['Alex', 'Bob'];
let b: (string | number)[] = ['Alex', 'Bob', 7];
let c: {
  name: string;
}[] = [{name: 'Alex'}, {name: 'Bob'}]

// 字符串、数字、布尔值字面量
type FavoriteNumber = 1 | 2 | 7;
type FavoriteNumber1 = 'one' | 'two' | 'seven';

let one: (FavoriteNumber | FavoriteNumber1) = 1;
let two: (FavoriteNumber | FavoriteNumber1) = 2;
let seven: (FavoriteNumber | FavoriteNumber1) = 'seven';

// 枚举
// const Colors = {
//   Red: 'Red',
//   Blue: 'Blue',
//   Green: 'Green'
// }

enum Colors {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green'
}

let myColor = Colors.Red;
let yourColor = Colors.Blue;

function isItRed (color: Colors) {
  return color === Colors.Red;
}

isItRed(myColor);
isItRed(yourColor);

// 属性和方法
class Cat {
  name : string;
  sayHi() : string {
    return `Meow, my name is ${this.name}`;
  }
}

let tom = new Cat();
tom.name = 'Tom';
console.log(tom.sayHi());

// 修饰符
class Animal {
  private name: string; // 私有的，当前类可以访问
  constructor(name: string) {
    this.setName(name);
  }
  public getName () : string { // 公共的，当前类/自雷/实例都可以访问
    return this.name;
  }
  protected setName (name: string) { // 受保护的，当前类/子类可以访问
    this.name = name;
  }
  public sayHi() : string { // 公共的，当前类/自雷/实例都可以访问
    return `Meow, my name is ${this.getName()}`;
  }
}

let dog = new Animal('dog');
console.log(dog.sayHi());