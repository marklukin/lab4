//6
const max = (arr) => {
    let max = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
    }
    return max;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

//7
const ages = (persons) => {
    let result = {};

    for (const person in persons) {
        result[person] = persons[person].died - persons[person].born;
    }

    return result;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
