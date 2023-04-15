
// EXERCICIO NUMBER 11
// let number = 5;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach(e => {
//     let tabuada = number * e;
//     console.log(tabuada)
// });

// EXERCICIO NUMBER 12

// let palavra = 'Arroz'
// let qtd = "";
// for (let imprimir = 1; imprimir <= palavra.length; imprimir++) {
//     qtd+=palavra.toLowerCase();
//     console.log(qtd);
// }

// EXERCICIO NUMBER 13

// let QtdNumber = [];
// let numberInitial = 1;
// while (numberInitial !== 0){
//     numberInitial = parseInt(prompt('Digite qualquer numero, ou digite 0 para parar'));
//     if (numberInitial >= 100 && numberInitial <=200 ){
//         QtdNumber.push (numberInitial)
//     }
// }
// console.log("Foram digitados " + QtdNumber.length + " números entre 100 e 200.");

// EXERCICIO NUMBER 14

// let alturaChico = 1.50;
// let alturaJuca = 1.10;
// let QtdAnos = 0;
// while (alturaChico >= alturaJuca) {
//     alturaChico += 0.02;
//     alturaJuca += 0.03;
//     QtdAnos++;
// }
// console.log('A quantidade de anos necessario para juca atingir a altura de chico é de ' + QtdAnos + " anos");

// EXERCICIO NUMBER 16

// let numeros = [2, 4, 3, 7, 8, 1, 0, 6, 5, 9, 10, 12, 13, 15, 17];
//     numeros.forEach(el => {
//         if (el % 2 == 0) {
//             console.log(el + " é par");
//         }
//         else {
//             console.log(el + " é impar");
//         }
// });

// EXERCICIO NUMBER 17

// let numeros = [2, 4, 3, 7, 8, 1, -10, 6, 5, 9, 10, 12, 13, 15, 17, 2, 4, 3, 7, 8, 1, 0, 6, 5, 9, 10, 12, 13, 15, 17];
// let NumberMaior = numeros[0];
// let NumberMenor = numeros[0];
// let SomaNumberPar = 0;
// let QtdPar = 0;
// let SomaDaQtd = 0;
// numeros.forEach(el => {
//     if (el > NumberMaior) {
//         NumberMaior = el;
//     } else if (el < NumberMenor) {
//         NumberMenor = el;
//     }
//     else if (el % 2 == 0) {
//         SomaNumberPar += el;
//         QtdPar++;
//     }
//     SomaDaQtd += el;
// });
// let Porcentagem = (QtdPar / numeros.length)*100;
// console.log("Maior Numero " + NumberMaior);
// console.log("Menor Numero " + NumberMenor);
// console.log("Soma dos Numeros Pares " + SomaNumberPar);
// console.log("Percentual de números pares " +Porcentagem + " %");
// console.log ("Soma Total do Vetor foi de " + SomaDaQtd);


// EXERCICIO NUMBER 18

// let VtOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let VtTwo = [5.5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
// let vetorNaoComum = [];
// VtOne.forEach(num => {
//   if (!VtTwo.includes(num)) {
//     vetorNaoComum.push(num);
//   }
// });
// VtTwo.forEach(num => {
//   if (!VtOne.includes(num)) {
//     vetorNaoComum.push(num);
//   }
// });
// console.log(vetorNaoComum);

// EXERCICIO NUMBER 19

// let matriz = Array.from(Array(5), () => new Array(5).fill(0));
// for (let i = 0; i < 5; i++) {
//   matriz[i][i] = i + 1;
// }
// console.log("Elementos da diagonal principal:");
// for (let i = 0; i < 5; i++) {
//   console.log(matriz[i][i]);
// }




// EXERCICIO NUMBER 20
// let matriz = [];
// for (let i = 0; i < 5; i++) {
//   matriz.push([]);
//   for (let j = 0; j < 5; j++) {
//     matriz[i].push(Math.floor(Math.random() * 10) + 1);
//   }
// }
// console.log("Matriz completa:");
// for (let i = 0; i < 5; i++) {
//   console.log(matriz[i].join(" "));
// }
// let matrizImpares = [];
// for (let i = 0; i < 5; i++) {
//   matrizImpares.push([]);
//   for (let j = 0; j < 5; j++) {
//     if (matriz[i][j] % 2 !== 0) {
//       matrizImpares[i].push(matriz[i][j]);
//     } else {
//       matrizImpares[i].push(0);
//     }
//   }
// }
// console.log("Matriz gerada apenas com números ímpares:");
// for (let i = 0; i < 5; i++) {
//   console.log(matrizImpares[i].join(" "));
// }
// let matrizPares = [];
// for (let i = 0; i < 5; i++) {
//   matrizPares.push([]);
//   for (let j = 0; j < 5; j++) {
//     if (matriz[i][j] % 2 === 0) {
//       matrizPares[i].push(matriz[i][j]);
//     } else {
//       matrizPares[i].push(0);
//     }
//   }
// }
// console.log("Matriz gerada apenas com números pares:");
// for (let i = 0; i < 5; i++) {
//   console.log(matrizPares[i].join(" "));
// }


