function rand10(min, max){
    return Math.floor(Math.random()*(max - min)+min);
}

console.log(rand10(1,10));

function multiRand(n) {
    let randomNum = [];
    for (let i = 0; i<n; i++) {
        randomNum.push(rand10(1, 10))
    }
    return randomNum;
}

console.log(multiRand(n))