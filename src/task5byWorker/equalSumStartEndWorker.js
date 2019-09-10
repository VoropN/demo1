onmessage = (ticketsArray) => {
    let calcSum = (array) => array.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    let isEqualSum = (firstArray, secondArray) => calcSum(firstArray) === calcSum(secondArray);
    let result = ticketsArray.data.filter(str => isEqualSum([...str.slice(0, 3)], [...str.slice(-3)]));
    postMessage(result);
}