
let a = [1, 1];
let b = [3, 1];

function calcDistance(a, b){
    let distance = Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1], 2));
    console.log(distance);
}
calcDistance(a,b);

/* 
a et b sont nos 2 point dans un graphique, pour trouver la distance entre les deux points nous allons utiliser le théorème de Pythagore : a²+b²=c².
c représente la distance entre les deux points donc pour trouver c le calcul sera = la racine carré de (xb - xa)² + (yb - ya)².
Math.sqrt : donne la racine carré
Math.pow : dans le premier élément la valeur et dans le second élément la puissance donnée 
*/

