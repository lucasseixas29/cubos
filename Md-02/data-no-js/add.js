const { add } = require('date-fns');

const date = new Date(2018, 2, 13, 12);
console.log(date)


console.log(add(date, {
    seconds: 2,
    days: 1
}))

//não muda o objeto original