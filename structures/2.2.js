let min = Number(window.prompt("Enter the minimum number: ",""));
let max = Number(window.prompt("Enter the maximum number: ",""));
let current = Number(window.prompt("Enter the current number: ",""));

if (min > max) {
    alert("Error: min number cannot be greater then the max. Please reconsider your inputs");
} else {
    if ((current > min) && (current < max)){
        alert(`The current number ${current} is between the max and the min number`);
    } else {
        alert(`The current number ${current} is NOT between the max and the min number`);
    }
}
