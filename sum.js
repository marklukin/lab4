//for
const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

//for... of
const sum2 = (...args) => {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }
    return sum;
}

//while
const sum3 = (...args) => {
    let sum = 0;
    let i = 0;
    while (i < args.length) {
        sum += args[i];
        i++;
    }
    return sum;
}
//do while
const sum4 = (...args) => {
    let sum = 0;
    let i = 0;
    do {
        sum += args[i];
        i++
    } while (i < args.length);
    return sum;
}
//Array.prototype.reduce()
 const sum5 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
 }

