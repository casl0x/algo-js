let inputAr = ["Alexis", "Alexis D", "Alice", "Aurélien", "Cassidy", "Damien", "Denis", "Giuseppe", "Hanen", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Maoro", "Marvin", "Noé", "Otman", "Tess", "Thomas", "Ugur", "Winona"];
let n = Math.floor(Math.random()*inputAr.length);

function pickLearner(inputAr, n) {
    let randomLearner = [];
    for (let i=0; i<n; i++){
        let selectLearner = Math.floor(Math.random()*inputAr.length);
        randomLearner.push(inputAr[selectLearner]);
    }
    console.log(randomLearner);
}

pickLearner(inputAr,n)