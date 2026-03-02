/**
 * Practice of array methods
 * 配列の合計を算出する
 */
// const initialValue =0;
// const sumArray= (numbers) => {
// return numbers.reduce ((accumulator, currentValue) => accumulator + currentValue, initialValue);
// }
// console.log(sumArray([1,2,3,4]));

/**
 * 偶数の合計を算出する
 */
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

/**
 * 偶数の合計を算出する（三項演算子使用）
 */
// const initialValue = 0;
// const sumEven = (numbers) => {
//     return numbers.reduce((accumulator,currentValue) => {
//         return currentValue %2 == 0
//   ?  accumulator+ currentValue
//   :  accumulator
//     },initialValue)
// }
// console.log(sumEven([1,2,3,4]));

/**
 * 偶数の合計を算出する（filter使用）
 */
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

/**
 * age が 20以上の人の年齢合計を出す関数
 */
// const person = [
//   { name: "A", age: 18 },
//   { name: "B", age: 25 },
//   { name: "C", age: 30 },
// ];
// const extraPersons = person.filter((p) => {
//   return p.age >= 20;
// });
// console.log(extraPersons);

// const initialValue = 0;
// const sumAgeNum = (extraPersons) => {
//   return extraPersons.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.age,
//     initialValue,
//   );
// };
// console.log(sumAgeNum(extraPersons));

/**
 * age が 20以上の人の年齢合計を出す関数
 * filterとreduceをまとめる
 */
// const person = [
//   { name: "A", age: 18 },
//   { name: "B", age: 25 },
//   { name: "C", age: 30 },
// ];
// const sumAgeNum2 = (persons) => {
//   return persons
//     .filter((p) => p.age >= 20)
//     .reduce((acc, cur) => acc + cur.age, 0);
// };

// console.log(sumAgeNum2(person));

/**
 * age が 20以上の人の年齢合計を出す関数
 * filterとreduceをまとめる
 */

const person = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

const initialValue = 0;
const sumAgeNum3 = (person) => {
  return person.reduce((accumulator, currentValue) => {
    //person.ageにしていたがpersonは配列なのでageは見れない
    //currentValueはオブジェクト一つを見ている
    if (currentValue.age >= 20) {
      return accumulator + currentValue.age;
    } else {
      return accumulator;
    }
  }, initialValue);
};

console.log(sumAgeNum3(person));

/**
 *  全ユーザーの likes の合計を出す関数を書いてください。
 */
const users = [
  {
    name: "A",
    posts: [
      { title: "a1", likes: 10 },
      { title: "a2", likes: 5 },
    ],
  },
  {
    name: "B",
    posts: [{ title: "b1", likes: 20 }],
  },
];
