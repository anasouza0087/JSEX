/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
person = {
... name: 'Ana',
... lastName: 'Bezerra',
... age: 33
... }
{ name: 'Ana', lastName: 'Bezerra', age: 33 }


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
books.push({name:'LOTR', pages:200});
books.push({name:'HP', pages:220});
books.push({name:'LOTF', pages:300});

/*
Mostre no console todos os livros.
*/
console.log('Lista de livros: \n' + books[0].name + '\n' + books[1].name + '\n' + books[2].name);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop())

/*
Mostre no console os livros restantes.
*/
console.log(books)

/*
Converta os objetos que ficaram em `books` para strings.
Mostre os livros nesse formato no console:
*/
// ?
console.log(JSON.stringify(books));

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (props in books) {
console.log('Name: ' + books[props].name);
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
myName.push('A','N','A');
console.log('Meu nome é: ' + myName.join(''));

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

myName.join('');

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
myName.reverse();

/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort();