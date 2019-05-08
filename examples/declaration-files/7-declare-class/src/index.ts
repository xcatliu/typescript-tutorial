declare class Animal {
    name: string;
    constructor(name: string);
    sayHi() {
        return `My name is ${this.name}`;
    }
    // ERROR: An implementation cannot be declared in ambient contexts.
}
