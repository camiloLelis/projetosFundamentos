/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
// codigo feito com ajuda do estudante Gabriel Pereira-turma10-tribo-A (chamada via slack)

const createStudent = (name) => {
  let student = {
    name,
    feedback: () => ('Eita pessoa boa!'),
  };
  return student;
};
// const estudante = createStudent('ze');
// console.log(estudante.name);
module.exports = createStudent;
