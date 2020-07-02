# 字符串字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

## 简单的例子

```ts
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

// index.ts(7,47): error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
```

上例中，我们使用 `type` 定了一个字符串字面量类型 `EventNames`，它只能取三种字符串中的一种。

注意，**类型别名与字符串字面量类型都是使用 `type` 进行定义。**

## 参考

- [Advanced Types # Type Aliases](http://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types)（[中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#字符串字面量类型)）
