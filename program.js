var sum = process.argv.slice(2).reduce(function (initial, next, index, arr) {
    return Number(initial || 0) + Number(next);
});
console.log(sum);