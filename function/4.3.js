function rand10(min, max){
    return Math.floor(Math.random()*(max - min)+min);
}

console.log(rand10(1,10));

let n = rand10(1,10);
function multiRand(n) {
    let randomNumber = [];
    for (let i = 0; i<n; i++) {
        randomNumber.push(rand10(1, 10))
    }
    console.log(randomNumber)
}

multiRand(n)