'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let soma = 0;

  return function adder(numero) {
    if (numero !== undefined) {
      soma += numero;

      return adder;
    } else {
      const somaAtual = soma;

      soma = 0;

      return somaAtual;
    }
  };
}

module.exports = makeInfinityAdder;
