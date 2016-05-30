interface Person {
  name: string;
  age?: number;
  [propName: string]: number;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  age: 25,
  github: 'https://github.com/xcatliu',
};
