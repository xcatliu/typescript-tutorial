export function unique(arr) {
    return Array.from(new Set(arr));
}
export function classnames(...args) {
    let classList = [];
    for (const arg of args) {
        if (typeof arg === 'string') {
            classList.push(arg);
        }
        else {
            classList = [...classList, ...Object.keys(arg).filter((key) => arg[key])];
        }
    }
    return unique(classList).join(' ');
}
