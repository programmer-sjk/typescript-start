export {};

enum Fruit {
    Apple,
    Banana,
    Orange
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Orange = Fruit.Apple;

enum Language {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp'
}

