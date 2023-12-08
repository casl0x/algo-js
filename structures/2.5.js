while  (true) {
    let favoriteNumber = Number(window.prompt("What is your favorite number ?",""));

    if (favoriteNumber !== 42){
        alert('Are you sure ? ');
    } else {
        break;
    }
}
