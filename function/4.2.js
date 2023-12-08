function rand10(min, max){
    return Math.floor(Math.random()*(max - min)+min);
}

console.log(rand10(1,10));

// la function nous donne un nombre aléatoire entier entre 2 nombre qui sont donné dans console.log