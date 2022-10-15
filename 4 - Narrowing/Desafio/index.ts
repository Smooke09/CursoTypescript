// ## Desafio 03

// 1 - Vamos criar uma função que recebe review dos usuários, precisamos utilizar o narrowing para receber o dado

// 2 - As possibilidades sao boolean e number

// 3 - Serão enviados números de 1 a 5(estrelas), prever uma mensagem para cada uma destas notas

// 4 - Ou false que e quando o usuário nao deixa uma review prever um retorno para este caso também

type Review = number | boolean;

function showUserReview(review: Review) {
  if (!review) {
    console.log("Voce nao avaliou o produto!");
    return;
  }

  console.log(`Sua nota foi ${review}, Obrigado!`);
}

showUserReview(false);
showUserReview(5);
showUserReview(2);
