// const initialValue =0;
// const sumArray= (numbers) => {
// return numbers.reduce ((accumulator, currentValue) => accumulator + currentValue, initialValue);
// }
// console.log(sumArray([1,2,3,4]));

// const initialValue = 0;
// const sumEven = (numbers) => {
//     return numbers.reduce((accumulator,currentValue) => {
//         if (currentValue %2 !==0) {
//             return accumulator
//         } else {
//             return accumulator+ currentValue
//         }
//     },initialValue)
// }

// console.log(sumEven([1,2,3,4]));

// const initialValue = 0;
// const sumEven = (numbers) => {
//     return numbers.reduce((accumulator,currentValue) => {
//         return currentValue %2 == 0
//   ?  accumulator+ currentValue
//   :  accumulator
//     },initialValue)
// }

// console.log(sumEven([1,2,3,4]));

// numbers =[1,2,3,4];
// const newNumbers = numbers.filter(value => {
//         return value % 2 === 0;
// });
// console.log (newNumbers);

// const initialValue =0;
// const sumEven=(numbers) => {
//     return newNumbers.reduce((accumulator,currentValue) =>accumulator+ currentValue,initialValue);
// };

// console.log(sumEven(numbers));

const person = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

const extraPersons = person.age.filter((age) => {
  return person.age >= 20;
});
console.log(extraPersons);
