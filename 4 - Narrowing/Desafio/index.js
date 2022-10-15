"use strict";
// ## Desafio 03
function showUserReview(review) {
    if (!review) {
        console.log("Voce nao avaliou o produto!");
        return;
    }
    console.log(`Sua nota foi ${review}, Obrigado!`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
