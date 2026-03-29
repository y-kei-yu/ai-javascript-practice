// 最大値（>） → -Infinity
// 最小値（<） →  Infinity
// 合計        → 0
// 配列        → []
// オブジェクト → {}



const orders = [
    {
        id: 1,
        items: [
            { name: "apple", price: 100 },
            { name: "banana", price: 200 }
        ]
    },
    {
        id: 2,
        items: [
            { name: "orange", price: 300 }
        ]
    }
];
//配列を作成
const orderItems = orders.flatMap(order => order.items)
console.log(orderItems);

//特定のpriceを取得
const filterOrder = orderItems.filter((orderItem) => orderItem.price >= 200)
console.log(filterOrder)

//priceの合計
const total = filterOrder.reduce((acc, orderItem) => acc + orderItem.price, 0);
console.log(total);

//priceの最大値
const maxPrice = orderItems.reduce((max, orderItem) => Math.max(max, orderItem.price), -Infinity);
console.log(maxPrice);

//priceの最大値のオブジェクトを取得
const maxItem = orderItems.reduce((max, orderItem) => {
    if (orderItem.price > max.price) {
        return orderItem;
    } else {
        return max;
    }
}, { price: -Infinity }
);
console.log(maxItem)
//{ price: -Infinity } 
// max はオブジェクトだから初期値もオブジェクトにする
// { price: -Infinity } ではなぜ name がないのか
//比較に必要なのが price だけだからname は書いていない
//{ name: "", price: -Infinity }でも動く




// const items1 = [
//     { name: "A", price: 100 },
//     { name: "B", price: 200 },
//     { name: "C", price: 200 },
//     { name: "D", price: 300 }
// ];

// const filterItems = items1.filter((item) => {
//     return item.price >= 200;
// })
// console.log(filterItems.length)

