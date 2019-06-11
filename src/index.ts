/**
 * 基本类型
 */
let isMale: boolean = true;

let myName: string = 'Alex';

let myAge: number = 20;

let myGirlfriend: null = null;

let myHouse: undefined = undefined;

/**
 * 对象的类型
 */
interface Person {
  name: string;
  age?: number; // 可选属性
  [propName: string] : string | number; //联合类型
  // [propName: string] : any; //任意属性
}

/**
 * 对象的类型
 */
let alex: Person = {
  name: 'Alex',
  gender: 'male'
}

/**
 * 数组的类型
 */
let a: string[] = ['Alex', 'Bob'];
let b: (string | number)[] = ['Alex', 'Bob', 7];
let c: {
  name: string;
}[] = [{name: 'Alex'}, {name: 'Bob'}]

/**
 * 字符串、数字、布尔值字面量
 */
type FavoriteNumber = 1 | 2 | 7;
type FavoriteNumber1 = 'one' | 'two' | 'seven';

let one: (FavoriteNumber | FavoriteNumber1) = 1;
let two: (FavoriteNumber | FavoriteNumber1) = 2;
let seven: (FavoriteNumber | FavoriteNumber1) = 'seven';

/**
 * 枚举
 */
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

/**
 * 属性和方法
 */
class Cat {
  name : string;
  sayHi() : string {
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

/**
 * 类的继承
 */
class People {
  name: string;
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

/**
 * 类实现接口
 * 一个类可以实现多个接口
 * 一个类可以先继承另一个类再实现接口（可以实现多个接口）
 * 类实现接口是多对多的关系
 * 类继承类是一对多的关系，一个类只能有一个父类
 */
// 接口
interface Wings {
  fly(): void;
}
// 接口
interface Mouth {
  sing(): void;
}
// 抽象类
abstract class Animals {
  abstract eat(): void;
}
class Bird extends Animals implements Wings, Mouth {
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
interface FireDragon extends Dragon {
  fire(): void;
}
let f: FireDragon = {
  fly: function() {
    console.log('龙在飞');
  },
  fire: function() {
    console.log('龙在喷火');
  }
}
/**
 * 泛型函数
 */
function createArray<T>(value: T, length: number): T[] {
  // T只能在函数内部使用
  let arr: T[] = [];
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}
let fooArray = createArray<string>('foo', 3);
console.log(fooArray);
/**
 * 多个类型参数
 * 值交换
 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
let swapped = swap<string, number>(['foo', 7]);
/**
 * 泛型接口
 */
interface ListApi<T> {
  data: T[];
  error_message: string;
  status_code: number;
}
let listResult: ListApi<{name: string; age: number}>;
let firstItem = listResult.data[0];
/**
 * 泛型类
 */
class Component<T> {
  public props: T;
  constructor(props) {
    this.props = props;
  }
}

interface ButtonProps {
  color: string;
}

let button = new Component<ButtonProps> ({
  color: 'red'
})