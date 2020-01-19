# 交叉类型

交叉类型（Intersection Types）和联合类型（Union Types）相反，表示该取值的类型属于多个类型的交集，可以使用的属性为这几个类型属性的并集。

## 简单的例子

```ts
interface A {
    a: string
}

interface B {
    b: string
}

let test: A & B = {
    a: 'test a',
    b: 'test b'
}
```

交叉类型使用 `&` 分隔每个类型。

这里 `let test: A & B` 的含义是，`test` 的类型同时属于 `A` 和 `B`，并且同时具有两者的属性 `a` 和 `b`。

## 使用联合类型定义 extend object

```ts
function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {
        ...first,
        ...second
    };
    return result as First & Second;
}
```

## 参考

- [Advanced Types # Intersection Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)([中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B))

---

- [上一章：声明合并](declaration-merging.md)
- [下一章：扩展阅读](further-reading.md)
