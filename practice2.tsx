//=> の後に {} がなければ return は自動
//=> の後に {} があれば return は必要
//処理が2行以上は{}とreturnが必要

//出力は日本語と関数の間に「,」を入れる

type Item = {
    name: string;
    price: number;
};

const items: Item[] = [
    { name: "A", price: 100 },
    { name: "B", price: 200 },
    { name: "C", price: 300 }
];

/**
 * priceの合計値を取得する関数を作る
 */
const getTotalPrice = (items: Item[]) => {
    return items.reduce(
        (acc, item) => acc + item.price, 0)
}
console.log("getTotalPrice:", getTotalPrice(items));


/**
 * 最大の price を返す関数
 */
const getMaxPrice = (items: Item[]) => {
    return items.reduce((max, item) => Math.max(max, item.price), -Infinity)
}
console.log("getMaxPrice:", getMaxPrice(items));

/**
 * 一番安い price を返す関数
 */
const getMinPrice = (items: Item[]) => {
    return items.reduce((min, item) => Math.min(min, item.price), Infinity);
}
console.log("getMinPrice:", getMinPrice(items));


/**
 * 一番高い商品の「オブジェクト」を返す関数
 */
const getMaxPriceItem = (items: Item[]) => {
    return items.reduce((max, item) => {
        if (item.price > max.price) {
            return item;
        } else {
            return max;
        }
    }, { name: "", price: -Infinity })
}
console.log("getMaxPriceItem:", getMaxPriceItem(items));

//実務より
// const getMaxPriceItem = (items: Item[]) => {
//     return items.reduce(
//         (max, item) =>
//             item.price > max.price ? item : max,
//         { name: "", price: -Infinity }
//     );
// }


/**
 * 平均価格を返す関数
 */
const getAveragePrice = (items: Item[]) => {
    if (items.length === 0) {
        return 0;
    }
    const total = getTotalPrice(items);
    const average = total / items.length
    return average;
}
console.log("getAveragePrice:", getAveragePrice(items));

/**
 * price >= 200 の商品を配列で返す
 */
const getExpensiveItems = (items: Item[]) => {
    return items.filter((item) => item.price >= 200);
}
console.log("getExpensiveItems:", getExpensiveItems(items));


/**
 * price >= 200 の商品の件数を返す
 */
const countExpensiveItems = (items: Item[]) => {
    const itemNum = getExpensiveItems(items);
    const itemCount = itemNum.length
    return itemCount;
}
console.log("countExpensiveItems:", countExpensiveItems(items));

/**
 * price >= 200 の商品の合計金額を返す
 */
const getTotalExpensivePrice = (items: Item[]) => {
    const itemNum = getExpensiveItems(items);
    return itemNum.reduce(
        (acc, item) => acc + item.price, 0)
}
console.log("getTotalExpensivePrice:", getTotalExpensivePrice(items));