## Oque é narrowing?

- Narrowing é um recurso de TS para identificar tipos de dados

- Dando assim uma direção diferentes a execução do programa, baseada no tipo que foi identificado;

- Há situações em que os tipos podem ser imprevisíveis, e queremos executar algo para cada uma das possibilidades;

- Isso e fundamental também para evitar erros do compilador, identificando e resolvendo os possíveis erros na hora do desenvolvimento

## Typeof type guard

- O type guard é basicamente uma validação do tipo utilizando o typeof

- Desta maneira podemos comparar o retorno do operador com um possível tipo

- Todos os dados vem como string, exemplo: "string", "number", "boolean"

- E a partir disso realizamos as bifurcações

## Chegando se valor existe

- Em JavaScript podemos colocar uma variável em um if, e se houver algum valor recebemos um true

- Quando nao ha valor um false

- Desta maneira conseguimos realizar o narrowing também, e uma outra estrategia bem utilizada

## Operador instanceof

- Para além dos tipos primitivos, podemos trabalhar com instanceof

- Chegando se um dado pertence a uma determinada classe

- E ele vai servir ate para as nossas próprias classes

## Operador in

- O operador in e utilizado para checar se existe uma propriedade no objeto

- Outro recurso interessante para o narrowing

- Pois propriedades também podem ser opcionais
