const checkMedia = (nota1, nota2, nota3, nota4) => {
  if (
    typeof nota1 !== 'number' ||
    typeof nota2 !== 'number' ||
    typeof nota3 !== 'number' ||
    typeof nota4 !== 'number'
  ) {
    {
      throw new Error('A nota precisa ser um número');
    }
  }
};

const mediaNotas = (nota1, nota2, nota3, nota4) => {
  try {
    checkMedia(nota1, nota2, nota3, nota4);
    let somaNotas = nota1 + nota2 + nota3 + nota4;
    let media = somaNotas / 4;
    return media;
  } catch (error) {
    return error.message;
  }
};

console.log(mediaNotas(10, 10, 10, '10'));
