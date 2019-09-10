onmessage = (context) => {
    let result = [];
    let {min, max} = context.data;
    let lengthMax = String(max).length;         
    let lengthMin = String(min).length;         
    if (lengthMax !== lengthMin) {
        let blank = '0'.repeat(lengthMax - 1);
        for (let i = min; i <= max; i++) {
            result.push( (blank + i).slice(-lengthMax) );
        }
    } else {
        for (let i = min; i <= max; i++) {
            result.push( String(i) );
        }  
    };
    postMessage(result);
}