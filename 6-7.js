//6
const max = (arr) => {
    return Math.max(...arr.flat());
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);

//7
const ages = (persons) => {
    const lifeSpans = {};

    for (const person in persons) {
        if (persons.hasOwnProperty(person)) {
            const born = persons[person].born;
            const died = persons[person].died;
            lifeSpans[person] = died - born;
        }
    }

    return lifeSpans;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }