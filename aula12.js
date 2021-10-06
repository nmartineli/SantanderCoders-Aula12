/* 
Crie uma função de alta ordem chamada maiorQue. 
Essa função deve retornar funções que verificam se um valor é maior do que o outro, e permitir a criação de outras como: "maiorQue10" e "maiorQue20
*/

const greaterThan = (initialValue) => (compareToInitialValue) =>
  compareToInitialValue > initialValue;

const greaterThan10 = greaterThan(10);

console.log(greaterThan10(35));

const greaterThan2 = (firstParameter) => {
  return (secondParameter) => {
    return secondParameter > firstParameter;
  };
};

const greaterThan210 = greaterThan2(10);

console.log(greaterThan210(20));

function greaterThan3(x) {
  return function (y) {
    return y > x;
  };
}

/* 
Função executora
Uma função que recebe outra função e a executa.
*/

function executora(fn) {
  fn(5);
  fn(10);
}

executora(console.log);

function tabuada(x) {
  for (let i = 0; i <= 10; i += 1) {
    console.log(i, x * i);
  }
}

executora(tabuada);

/* Every */

let people = [
  {
    isTeacher: false,
    name: 'Marcos',
  },
  {
    isTeacher: true,
    name: 'Murillo',
  },
];

people.every((person) => person.isTeacher);

function newEvery(array, callbackFn) {
  for (const val of array) {
    if (!callbackFn(val)) {
      return false;
    }
    return true;
  }
}
