
function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a*factorial(a-1)
    }
}
console.log(factorial(4))


/* 
récursivité : c’est quand une fonction s’appelle elle-même jusqu’à atteindre une condition d’arrêt.
factorisation : n! = n*(n-1)*(n-2)*... → 4! = 4*(4-1)*(4-2)*(4-3) = 24
factorielle de 0! = 1 et 1! = 1
if a est égale à 0 ou 1 ça retourne la reponse 1, else elle répète la formule de la factorisation jusqu'à avoir *(a-1)
*/
