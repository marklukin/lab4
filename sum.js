//for
const sum = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5));

//for... of
const sum2 = (...args) => {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }
    return sum;
}

console.log(sum2(0));

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

console.log(sum3());

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

console.log(sum4(1, -1, 1));
//Array.prototype.reduce()
 const sum5 = (...args) => {
    return args.reduce((a, b) => a + b, 0);
 }

console.log(sum5(10, -1, -1, -1));
