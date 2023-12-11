
function askTvSerie(){
    let tvSeries = {
     name: prompt('give me the name of a serie'),
     prodYear: prompt('give me the year of production'),
     cast: []
     } 
     let castMembers = prompt('give me the main actors');
     while (castMembers !== ''){
         tvSeries.cast.push(castMembers);
         castMembers = prompt('give me the main actors');
     }
     return tvSeries;
}
console.log(askTvSerie())

function randomizeCast(tvSeries){
    for (let i = tvSeries.cast.length; i>0; i++){
        let hasardCast = Math.floor(Math.random()*tvSeries.cast.length);
        hasardCast.push(tvSeries.cast[hasardCast]);
    }
    tvSeries.cast = hasardCast;
    console.log(tvSeries)
}

let tvSeries = askTvSerie();
randomizeCast(tvSeries)