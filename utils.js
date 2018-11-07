// await sleep(time in milliseconds)
function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(res, millis)
    });
}


// await syncForIn(array of basic data types, function);
function syncForIn(arr, func) {
    return new Promise((res, rej) => {
        for(var x in arr) {
            func(x, arr);
            if(x == arr.length - 1) res();
        }
    });
}
