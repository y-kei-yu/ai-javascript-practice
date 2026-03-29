/**
 * Practice of array methods
 * 配列の合計を算出する
 */
const initialValue = 0;
const sumArray = (numbers) => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
};
console.log(sumArray([1, 2, 3, 4]));

/**
 * 偶数の合計を算出する
 */
const initialValue2 = 0;
const sumEven = (numbers) => {
  return numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 !== 0) {
      return accumulator;
    } else {
      return accumulator + currentValue;
    }
  }, initialValue2);
};
console.log(sumEven([1, 2, 3, 4]));

/**
 * 偶数の合計を算出する（三項演算子使用）
 */
const initialValue3 = 0;
const sumEven1 = (numbers) => {
  return numbers.reduce((accumulator, currentValue) => {
    return currentValue % 2 == 0 ? accumulator + currentValue : accumulator;
  }, initialValue3);
};
console.log(sumEven1([1, 2, 3, 4]));

/**
 * 偶数の合計を算出する（filter使用）
 */
numbers = [1, 2, 3, 4];
const newNumbers = numbers.filter((value) => {
  return value % 2 === 0;
});
console.log(newNumbers);

const initialValue4 = 0;
const sumEven2 = (numbers) => {
  return newNumbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue4,
  );
};
console.log(sumEven2(numbers));

/**
 * age が 20以上の人の年齢合計を出す関数
 */
const person = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];
const extraPersons = person.filter((p) => {
  return p.age >= 20;
});
console.log(extraPersons);

const initialValue5 = 0;
const sumAgeNum = (extraPersons) => {
  return extraPersons.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    initialValue5,
  );
};
console.log(sumAgeNum(extraPersons));

/**
 * age が 20以上の人の年齢合計を出す関数
 * filterとreduceをまとめる
 */
const person1 = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];
const sumAgeNum2 = (persons) => {
  return persons
    .filter((p) => p.age >= 20)
    .reduce((acc, cur) => acc + cur.age, 0);
};

console.log(sumAgeNum2(person1));

/**
 * age が 20以上の人の年齢合計を出す関数
 * filterとreduceをまとめる
 */

const person2 = [
  { name: "A", age: 18 },
  { name: "B", age: 25 },
  { name: "C", age: 30 },
];

const initialValue6 = 0;
const sumAgeNum3 = (person) => {
  return person.reduce((accumulator, currentValue) => {
    //person.ageにしていたがpersonは配列なのでageは見れない
    //currentValueはオブジェクト一つを見ている
    if (currentValue.age >= 20) {
      return accumulator + currentValue.age;
    } else {
      return accumulator;
    }
  }, initialValue6);
};

console.log(sumAgeNum3(person2));

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
const initialValue7 = 0;
const sumAllLikes = (users) => {
  return users.reduce((acc, user) => {
    const userLikes = user.posts.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.likes;
    }, initialValue7);

    return acc + userLikes;
  }, 0);
};
console.log(sumAllLikes(users));

//　実務用
// const sumAllLikes = (users) =>
//   users.reduce(
//     (acc, user) =>
//       acc +
//       user.posts.reduce((innerAcc, post) => innerAcc + post.likes, 0),
//     0
//   );

/**
 * オブジェクトの特定のデータ取り出し
 * 特定のデータを配列に
 * 特定のデータを合計にする
 */
const data = [
  {
    id: 1,
    comments: [
      { text: "A", likes: 2 },
      { text: "B", likes: 3 },
    ],
  },
  {
    id: 2,
    comments: [{ text: "C", likes: 5 }],
  },
];

data.map((item) => item.comments.length);

const numbers = [1, 2, 3, 4, 5];
// filter
const filterNumbers = numbers.filter((number) => number % 2 === 0);
console.log(filterNumbers);
//map
const mapNumber = filterNumbers.map((filterNumber) => filterNumber * 2);
console.log(mapNumber);
//reduce
const initialValue8 = 0;
const reduceNumber = (mapNumber) => {
  return mapNumber.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue8,
  );
};
console.log(reduceNumber(mapNumber));
