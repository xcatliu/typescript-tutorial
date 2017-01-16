interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let xcatliu: Person = {
  name: 'Xcat Liu',
  website: 'http://xcatliu.com',
};

xcatliu.id = 89757;
