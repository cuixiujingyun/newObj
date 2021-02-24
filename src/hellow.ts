// let age: number = 18
// console.log(age)

// let names: string[] = ['zhangsan', 'wangwu', 'lisi']
// console.log(names)

// for (let i: number = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// let names1: string[] = []
// names1 = ['nihao', 'haha', 'xifu']
// console.log(names1)

// let names2: string[] = new Array('1', '2', '3')
// console.log(names2)

// let namrs3: string[] = new Array()
// namrs3 = ['3', '2', '1']
// namrs3.push('123')
// namrs3[4] = 'tianjia'
// namrs3.sort(function (a: any, b: any) {
//   return a - b
// })
// console.log(namrs3)

// let name3: any[] = ['1', 1, 'sf', 23435, '哈哈']
// name3[0] = 28798
// console.log(name3)
// name3.pop()
// console.log(name3)
// name3.shift()
// console.log(name3)
// name3.splice(0, 2, 'hahah', '123214', 9289, 'fdevd', '12de3d3rf')
// console.log(name3)
// name3.slice(2, 21)
// console.log(name3)

// let arr: number[] = [200, 30, 3], sum: number = 0
// for (let i: number = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)

// let nums: number[] = [1, 9, 3, 39, 13, 87, 90, 100, 45, 49, 2], max: number = 0, min: number = 0
// for (let i: number = 0; i < nums.length; i++) {
//   if (nums[i] > max) {
//     max = nums[i]
//   }
// }
// console.log(max)

// let nums: number[] = [1, 3, 0, 10, 33, 0, 0, 6], newNums: number[] = []
// for (let i: number = 0; i < nums.length; i++) {
//   if (nums[i] != 0) {
//     // newNums.push(nums[i])
//     newNums[newNums.length] = nums[i]
//   }
// }
// console.log(newNums)

// function getNum(num1:number,num2:number) {
//   let resualt:number=num1+num2
//   console.log(resualt)
// }
// getNum(100,11)

// function getSum(nums:number[]) {
//   let resualt:number=0
//   for(let i:number=0;i<nums.length;i++){
//     resualt+=nums[i]
//   }
//   console.log(resualt)
// }

// getSum([1,2,3,4,5,6])

// function add(x: number, y: number, ...more: number[]): void {
//   let res: number = x + y
//   console.log(res)

//   for (let i of more) {
//     res += i
//   }
//   console.log(res)
// }

// add(10, 5)

// add(1, 3, 56, 7, 2, 8, 12, 7, 23, 48)

// class City {
//   cName: string;
//   cLevel: number;

//   constructor(name: string, level: number) {
//     this.cName = name;
//     this, this.cLevel = level
//   }

//   about() {
//     console.log(`欢迎来到${this.cName},此地危险系数为${this.cLevel}`)
//   }
// }

// let city1 = new City('p城', 5)
// city1.about()

// function fangfa(obj: object | null): void {
//   console.log(obj)
// }

// fangfa({ name:'cui'})
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);


// class a {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age
//   }

//   say() {
//     return "我的名字叫" + this.name + ",今年" + this.age + "."
//   }
// }

// class b extends a {

// }
// let c = new b('Cui', 18)
// console.log(c.say())
// c.say()


// function getMax(a: number, b: number): number {
//   if (a - b > 0) {
//     return a
//   } else {
//     return b
//   }
// }

// console.log(getMax(5, 6))


//创建一个栈类
class Stack {

  _items: any

  constructor() {
    this._items = []//储存数据
  }
  //向栈内压入一个元素
  push(item: any) {
    this._items.push(item)
  }
  //把栈顶元素弹出来
  pop() {
    return this._items.pop()
  }
  //返回栈顶元素
  peek() {
    return this._items[this._items.length - 1]
  }
  //判断栈是否为空
  isEmpty() {
    return !this._items.length;
  }
  //栈元素个数
  size() {
    return this._items.length
  }
  //清空栈
  clear() {
    this._items = []
  }
}

//将普通算数表达式（中缀表达式）转换成逆波兰表达式（后缀表达式）：
function rq(str: string) {
  //1.将字符串转换成字符串数组
  let arr: any[] = str.split('')
  //遍历数组，将复数拼接完成
  let numArr: any[] = []
  let num: any = ''
  // for (let i: number = 0; i < arr.length; i++) {
  //   if ((isNaN(arr[i]) === false && isNaN(arr[i + 1]) === false) || (arr[i] === '.' && isNaN(i + 1) === false) || (isNaN(arr[i]) === false && arr[i + 1] === '.')) {
  //     arr[i] = arr[i] + arr[i + 1]
  //     arr.splice(i + 1, 1)
  //   }
  // }
  //2.将运算符遍历出来，#用来分级，+-同一级，*/同一级，两级之间的位置差至少为2
  let ops: string[] = '+-#*/'.split('')
  //3.准备两个空数组（模拟栈的模式，即先进后出或者后进先出【push(),pop()】），result存结果，temp存运算符（暂存区）
  let result: any = [], temp: any = []

  for (let i: number = 0; i < arr.length; i++) {
    for (let j: number = 0; j < arr.length; j++) {
      if ((isNaN(arr[j]) === false && isNaN(arr[j + 1]) === false) || (isNaN(arr[j]) === false && arr[j + 1] === '.')) {
        arr[j] = arr[j] + arr[j + 1]
        arr.splice(j + 1, 1)
      }
    }
    console.log(arr)
  }
  //4.遍历字符串数组，判断元素
  arr.forEach(function (ele, index) {



    //判断元素；

    if (ele === '(') {//4.1 当元素为左括号(‘（’)时，将元素存入temp；
      temp.push(ele)
    } else if (ele === ')') {//4.2当元素为右括号（‘）’）时，依次弹出暂存区栈顶运算符直到左括号(‘（’)，并删除暂存区左括号(‘（’)
      let flag = true
      while (flag) {
        if (temp[temp.length - 1] != '(') {
          result.push(temp.pop())
        } else {
          temp.pop()
          flag = false
        }
      }
    } else if (ops.indexOf(ele) != -1) {//4.3当元素为非括号（‘（）’）的运算符情况下：
      cb(ele, temp)
      function cb(x: any, o: any): any {
        if (o.length == 0 || o[o.length - 1] == '(' || ops.indexOf(x) - ops.indexOf(o[o.length - 1]) > 2) {
          o.push(x)
        } else {
          result.push(o.pop());
          return cb(x, o)
        }
      }
    } else {
      result.push(ele)  //其余情况
    }
  })
  while (temp.length > 0) {
    if (temp[temp.length - 1] != '(') {
      result.push(temp.pop())
    } else {
      temp.pop()
    }
  }

  return result
}

function isOperator(str: string) {
  return ['+', '-', '*', '/'].includes(str)
}

//计算逆波兰表达式
function clacExp(exp: string) {
  let stack = new Stack()

  for (let i: number = 0; i < exp.length; i++) {
    let one = exp[i]
    if (isOperator(one)) {
      let operatNum1 = stack.pop()
      let operatNum2 = stack.pop()
      console.log(1)
      // let expStr = `${operatNum2}${one}${operatNum1}`
      // let res = eval(expStr)
      // stack.push(res)
      let res: number;
      switch (one) {
        case '+':
          res = Number(operatNum2) + Number(operatNum1)
          stack.push(res)
          break;
        case '-':
          res = Number(operatNum2) - Number(operatNum1)
          stack.push(res)
          break;
        case '*':
          res = Number(operatNum2) * Number(operatNum1)
          stack.push(res)
          break;
        case '/':
          res = Number(operatNum2) / Number(operatNum1)
          stack.push(res)
          break;
      }

    } else {
      stack.push(one)
    }
  }
  return stack.peek()
}

let arr = rq('10000*(5.7+2.8)-93.6')
let result = clacExp(arr)
// result = Math.round(result)
let a = 'hellow world'
let aArr = a.split('')

enum Str {
  A = 'hellow',
  B = 'world'
}

let hel: string = Str.A
let wor: string = Str.B

console.log(hel + ' ' + wor)

let person: {
  name: string;
  age: number;
  sayHi: (name: string) => void;
} = {
  name: '崔修静赟',
  age: 29,
  sayHi: (name: string) => {
    console.log(name + ' say:Hellow')
  }
}

enum Gender {
  man = '男',
  woman = '女',
}

interface IUer {
  name: string;
  age: number;
  gender: Gender;
  sayHi: () => void
}

let person1: IUer = {
  name: '崔云',
  age: 29,
  gender: Gender.man,
  sayHi: () => {
    console.log('你好')
  }
}

let people = person
people.name = 'CuixiuJingyun'
// console.log(people.sayHi(people.name))
let people1 = person1
people1.name = 'CuiYun';

let z: [number, string, boolean] = [1, '1', true]


interface IFace {
  (one: string, two: number): string
}

let face: IFace

face = function (one: string, two: number): string {
  return `${one}${two}`
}

class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

class Person {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  run(): string {
    return `${this.name}在运动`
  }
}
let p = new Person('李四');
// console.log(p.name)//[ts] 属性“name”受保护，只能在类“Person”及其子类中访问。
// console.log(p.run())


class Web extends Person {
  constructor(name: string) {
    super(name)
  }
  work(): string {
    return `${this.name}在工作`//[ts] 属性“name”为私有属性，只能在类“Person”中访问。
  }
}
let web = new Web('成龙')
console.log(web.name)//[ts] 属性“name”为私有属性，只能在类“Person”中访问。
console.log(p.name)

let arr12=[1,2,3]

arr12.