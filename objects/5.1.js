
function askTvSerie(){
   let tvSeries = {
    name: prompt('give me the name of a serie'),
    prodYear: prompt('give me the year of production'),
    cast: []
    } 
    // demande le nom des acteurs, il peut y en avoir plusieur s'arrête si il n'y a pas de réponse
    let castMembers = prompt('give me the main actors');
    while (castMembers !== ''){
        tvSeries.cast.push(castMembers); // pousse les données recolté dans l'object dans la key → cast 
        castMembers = prompt('give me the main actors');
    }
    return tvSeries;

}
console.log(askTvSerie())