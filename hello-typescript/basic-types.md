# Basic Types

TypeScript 提供了一系列数据结构，这是 TypeScript 的核心内容，基本类型的使用方式很简单，看代码即可：

```js
// Boolean
let isDone: boolean = false;

// Number
let height: number = 6;

// String
let name: string = "bob";
// template string
let sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`

// Array
var list:number[] = [1, 2, 3];
var list:Array<number> = [1, 2, 3];

// Tuple
// 后面再介绍

// Enum
// 后面再介绍

// Any
var notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

var list:any[] = [1, true, "free"];
list[1] = 100;

// Void
function warnUser(): void {
    alert("This is my warning message");
}
```

> Tip: 使用 `:` 指定变量的类型，`:` 的前后有没有空格都可以。

以上是所有 TypeScript 提供的 Basic Types，其中 Tuple 和 Enum 可能前端工程师不了解，将在后面再介绍。

Any 除了用于数组之外，还常用于对象：

```js
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

针对 `Object`，TypeScript 只会检测静态方法，所以此时用 `any` 比较合适。

Void 类型一般用于不返回任何内容的 `function`。

> Tip: `let` 是 es2015 中的关键字，和 `var` 类似，用于定义一个局部变量，具体可以参考：[let 和 const 命令](http://es6.ruanyifeng.com/#docs/let)
