let n = Number(window.prompt('Give me a number',''));
let sum = 0
 
for (let i=0; i<n; i++) {
    let newN = Number(window.prompt('Give me a new number', ''));
    sum += newN;
}
alert(`The sum of all number is : ${sum}`);

