# 类与接口

[之前学习过](../basics/type-of-object-interfaces.md)，接口（Interfaces）可以用于对「对象的形状（Shape）」进行描述。

这一章主要介绍接口的另一个用途，对类的一部分行为进行抽象。

## 类实现接口

实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现。这个特性大大提高了面向对象的灵活性。

举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：

```ts
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```

一个类可以实现多个接口：

```ts
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

上例中，`Car` 实现了 `Alarm` 和 `Light` 接口，既能报警，也能开关车灯。

## 接口继承接口

接口与接口之间可以是继承关系：

```ts
interface Alarm {
    alert(): void;
}

interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
```

这很好理解，`LightableAlarm` 继承了 `Alarm`，除了拥有 `alert` 方法之外，还拥有两个新方法 `lightOn` 和 `lightOff`。

## 接口继承类

常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

为什么 TypeScript 会支持接口继承类呢？

实际上，当我们在声明 `class Point` 时，除了会创建一个名为 `Point` 的类之外，同时也创建了一个名为 `Point` 的类型（实例的类型）。

所以我们既可以将 `Point` 当做一个类来用（使用 `new Point` 创建它的实例）：

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const p = new Point(1, 2);
```

也可以将 `Point` 当做一个类型来用（使用 `: Point` 表示参数的类型）：

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function printPoint(p: Point) {
    console.log(p.x, p.y);
}

printPoint(new Point(1, 2));
```

这个例子实际上可以等价于：

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface PointInstanceType {
    x: number;
    y: number;
}

function printPoint(p: PointInstanceType) {
    console.log(p.x, p.y);
}

printPoint(new Point(1, 2));
```

上例中我们新声明的 `PointInstanceType` 类型，与声明 `class Point` 时创建的 `Point` 类型是等价的。

所以回到 `Point3d` 的例子中，我们就能很容易的理解为什么 TypeScript 会支持接口继承类了：

```ts
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface PointInstanceType {
    x: number;
    y: number;
}

// 等价于 interface Point3d extends PointInstanceType
interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

当我们声明 `interface Point3d extends Point` 时，`Point3d` 继承的实际上是类 `Point` 的实例的类型。

换句话说，可以理解为定义了一个接口 `Point3d` 继承另一个接口 `PointInstanceType`。

所以「接口继承类」和「接口继承接口」没有什么本质的区别。

值得注意的是，`PointInstanceType` 相比于 `Point`，缺少了 `constructor` 方法，这是因为声明 `Point` 类时创建的 `Point` 类型是不包含构造函数的。另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。

换句话说，声明 `Point` 类时创建的 `Point` 类型只包含其中的实例属性和实例方法：

```ts
class Point {
    /** 静态属性，坐标系原点 */
    static origin = new Point(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}

interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
}

let p1: Point;
let p2: PointInstanceType;
```

上例中最后的类型 `Point` 和类型 `PointInstanceType` 是等价的。

同样的，在接口继承类的时候，也只会继承它的实例属性和实例方法。

## 参考

- [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Interfaces.html)）
