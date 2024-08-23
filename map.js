const notas = [10, 8, 8.75, 5, 9.5];

// const notasAtualizadas = notas.map(function (nota) {
//     if (nota < 9) {
//         return nota + 1;
//     } else {
//         return 10
//     }

// });

// const notasAtualizadas = notas.map( (nota) => {
//     if (nota < 9) {
//         return nota + 1;
//     } else {
//         return 10
//     }

// });

const notasAtualizadas = notas.map( (nota) => nota + 1 >= 10 ? 10 : nota + 1);

console.log(notasAtualizadas)
