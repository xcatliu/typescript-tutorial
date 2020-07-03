# 安装 TypeScript

TypeScript 的命令行工具安装方法如下：

```bash
npm install -g typescript
```

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。

编译一个 TypeScript 文件很简单：

```bash
tsc hello.ts
```

我们约定使用 TypeScript 编写的文件以 `.ts` 为后缀，用 TypeScript 编写 React 时，以 `.tsx` 为后缀。

## 编辑器

TypeScript 最大的优势之一便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

主流的编辑器都支持 TypeScript，这里我推荐使用 [Visual Studio Code](https://code.visualstudio.com/)。

它是一款开源，跨终端的轻量级编辑器，内置了对 TypeScript 的支持。

另外它本身也是[用 TypeScript 编写的](https://github.com/Microsoft/vscode/)。

下载安装：https://code.visualstudio.com/

获取其他编辑器或 IDE 对 TypeScript 的支持：

- [Sublime Text](https://github.com/Microsoft/TypeScript-Sublime-Plugin)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [Vim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)
- [Emacs](https://github.com/ananthakumaran/tide)
- [Eclipse](https://github.com/palantir/eclipse-typescript)
- [Atom](https://atom.io/packages/atom-typescript)
- [Visual Studio 2019](https://marketplace.visualstudio.com/search?term=TypeScriptTeam&target=VS&category=All%20categories&vsVersion=vs2019&sortBy=UpdatedDate)
- [Visual Studio 2017](https://marketplace.visualstudio.com/search?term=TypeScriptTeam&target=VS&category=All%20categories&vsVersion=vs15&sortBy=UpdatedDate)
