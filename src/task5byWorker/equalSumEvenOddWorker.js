onmessage = (ticketsArray) => {
    let even, odd;
    let calcSum = (array) => array.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    let isEqualSum = (firstArray, secondArray) => calcSum(firstArray) === calcSum(secondArray);
    let result = ticketsArray.data.filter(str => {
        even = [], odd = [];
        [...str].forEach(e => e & 1 ? even.push(e) : odd.push(e));
        return isEqualSum(even, odd);
    });
    postMessage(result);
}