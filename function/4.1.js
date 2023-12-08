function calcSurface(length, width) {
    return length*width;
}

let length = Number(window.prompt("Give me the length of a rectangle:", ""));
let width = Number(window.prompt("Give me the width of a rectangle:", ""));

alert(calcSurface(length, width));

// la function multiplie le largueur par la longueur, on demande ensuite à l'utilisateur de donner les dimention du rectange pour lui donner ensuite sa surface calculer par la function. 