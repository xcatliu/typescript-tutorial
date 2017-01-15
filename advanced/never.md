# Never 类型

`never` 表示永远不存在值的类型，一般用于错误处理函数：

```ts
// 返回 never 的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
```

## 参考

- [Handbook - Basic Types # Never](http://www.typescriptlang.org/docs/handbook/basic-types.html#never) | [中文版](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never)
