# 装饰器

写在前面：本章只介绍 TypeScript 5.0+ 的装饰器用法，对于 5.0 以下的版本，请参考 [TypeScript 官方文档](https://www.typescriptlang.org/docs/handbook/decorators.html)

## 什么是装饰器

首先，什么是装饰器呢？[维基百科](https://en.wikipedia.org/wiki/Decorator_pattern)是这么说的：

> In [object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming), the **decorator pattern** is a [design pattern](https://en.wikipedia.org/wiki/Design_pattern_(computer_science)) that allows behavior to be added to an individual [object](https://en.wikipedia.org/wiki/Object_(computer_science)), dynamically, without affecting the behavior of other instances of the same [class](https://en.wikipedia.org/wiki/Class_(computer_science)).

本人的蹩足翻译：在 OOP (面向对象编程)中，装饰器模式是一种允许动态地往一个对象上添加自定义行为，而又不影响该对象所属的类的其他实例的一种设计模式。

> 什么是 OOP 和类？[前面的章节](https://ts.xcatliu.com/advanced/class.html)做过介绍。

这句话未免过于拗口了，我们不妨换个角度去切入。

## 装饰器的使用场景

要知道，一切设计模式的诞生，都是为了解决某个问题。在 JavaScript 的世界中，装饰器通常出现于以下场景：

1. 提供一种易读且容易实现的方式，修改类或者类的方法，避免出现大量重复的代码。
    
    下面以修改类的方法为例。
    
    首先，假设我们有一个 `Animal` 类：
    
    ```ts
    class Animal {
      type: string
      constructor(type: string) {
    	  this.type = type
      }
      
      greet() {
        console.log(`Hello, I'm a(n) ${this.type}!`)
      }
    }
    
    const xcat = new Animal('cat')
    xcat.greet() // Hello, I'm a(n) cat!
    ```
    
    该类有一个 greet 方法，和调用方打招呼。
    
    假如说，我还希望根据不同的 `type`，往 console 打印不同动物的叫声呢？
    
    聪明的你或许想到了，这不就是**类的继承**吗！在子类的 `greet()` 方法中，实现不同的逻辑，再调用 `super.greet()` 即可。
    
    ```ts
    class Xcat extends Animal {
      constructor() {
        super('cat')
      }
      
      greet() {
        console.log('meow~ meow~')
        super.greet()
      }
    }
    
    const xcat = new Xcat()
    xcat.greet() // meow~ meow~
                 // Hello, I'm a(n) cat!
    ```
    
    用装饰器实现，也不妨为一种思路，比如在 `Animal` 类中，为 `greet()` 方法添加「打印不同动物叫声的」行为:
    
    ```ts
    class Animal {
      type: string
      constructor(type: string) {
    	  this.type = type
      }
    
      @yelling
      greet() {
        console.log(`Hello, I'm a(n) ${this.type}!`)
      }
    }
    
    const typeToYellingMap = {
      cat: 'meow~ meow~'
    }
    
    function yelling(originalMethod: any, context: ClassMethodDecoratorContext) {
      return function(...args: any[]) {
        console.log(typeToYellingMap[this.type])
        originalMethod.call(this, ...args)
      }
    }
    
    const xcat = new Animal('cat')
    xcat.greet() // meow~ meow~
                 // Hello, I'm a(n) cat!
    ```
    
    在 `Animal.greet()` 方法上出现的 `@yelling` ，就是 TypeScript 中装饰器的写法，即 @ + 函数名的组合。
    
    上述示例对装饰器的应用属于**方法装饰器**，此类装饰器本身接收两个参数，一是被装饰的方法，二是方法装饰器的上下文。方法装饰器应返回一个函数，此函数在运行时真正被执行。在上述例子中，我们在装饰器返回的函数中做了两件事情：
    
    1. 打印相应类别的动物的叫声。
    2. 调用 `originalMethod.call(this, …args)` ，确保原方法（即装饰器所装饰的方法）能够正确地被执行。
2. 结合「**依赖注入**」这一设计模式，优化模块与 class 的依赖关系。
    
    什么是依赖注入呢？引用同事 [zio](https://github.com/ziofat) 的原话：
    
    > **依赖注入其实是将一个模块所依赖的部分作为参数传入，而不是由模块自己去构造。**
    
    可见，依赖注入解决了实际工程项目中，类、模块间依赖关系层级复杂的问题，将构造单例的行为交由实现依赖注入的框架去处理。
    
    举个例子：

    ```ts
    @injectable
    class Dog implements IAnimal {
      sayHi() {
        console.log('woof woof woof')
      }
    }
    
    @injectable
    class Cat implements IAnimal {
      sayHi() {
        console.log('meow meow meow')
      }
    }
    
    class AnimalService {
      constructor(
        @inject dog: Dog
        @inject cat: Cat
      ) {
        this._dog = dog
        this._cat = cat
      }
      
      sayHiByDog() {
        this._dog.sayHi()
      }
      
      sayHiByCat() {
        this._cat.sayHi()
      }
    }
    ```
    
    在上述代码中，`@injectable` 将一个类标记为「可被注入的」，在面向业务的类（即 `AnimalService`）中，使用 `@inject` 注入此类的单例，实现了「依赖倒置」。注意到这里的 `implements IAnimal` 用法，也是实战中依赖注入运用的精妙之处 —— 关心接口，而非具体实现。
    
3. 实现「AOP」，即 Aspect-oriented programming，面向切面编程。
    
    所谓的「切面」，可以理解成，在复杂的各个业务维度中，只关注一个维度的事务。
    
    例如，使用装饰器，实现对类的某个方法的执行时间记录：
    
    ```ts
    class MyService {
      @recordExecution
      myFn() {
        // do something...
      }
    }
    
    function recordExecution(originalMethod: any, context: ClassMethodDecoratorContext) {
      return function(...args: any[]) {
        console.time('mark execution')
        originalMethod.call(this, ...args)
        console.timeEnd('mark execution')
      }
    }
    ```
    
