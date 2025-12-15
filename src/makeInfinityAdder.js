'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let soma = 0;

  return function proximo(numero) {
    if (numero !== undefined) {
      soma += numero;

      return proximo;
    } else {
      const somaAtual = soma;

      soma = 0;

      return somaAtual;
    }
  };
}

module.exports = makeInfinityAdder;
