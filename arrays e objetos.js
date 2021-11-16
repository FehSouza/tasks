const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["teste", "teste2"];
const arr3 = [[1], [1, 3, 4]];
const arr4 = [
  { name: "raul", age: 25 },
  { name: "Fernanda", age: 24 },
];

const obj = { persons: [{ name: "fernanda" }] };

// console.log(obj.persons[0].name)

// console.log(arr3[1][2])

let tasks = [];
const createTask = (name) => ({ name: name, completed: true });
tasks.push(createTask("teste"));
tasks.push(createTask("teste2"));
tasks.push(createTask("fernanda"));
tasks.push(createTask("teste3"));

// console.log(tasks[2].name);

const head = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const matrix = [head,[[head[5],head[4],head[7]]]]
/*
  [a, b, c], [f, e, h]
  [[abc],[[f,e,h]]]
  console.log([abc], [feh])
*/
// console.log(matrix)

const a = [['a', 'b', 'c'], ['f', 'e', 'h']]
const b = [['a', 'b', 'c'],[['f', 'e', 'h']]]

for (const i of a) {
  console.log('feh',i[0])
}
for (const i of b) {
  console.log('raul',i[0])
}
a[1][2]