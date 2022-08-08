let v1: undefined = undefined;
let v2: null = null;

// v1 = 1; error
let v3: number | undefined = undefined;
v3 = 3;

let v4: 10 | 20 | 30 = 10;
v4 = 20;
// v4 = 25; error

let v5: '경찰관' | '소방관' = '경찰관';
// v5 = '의사'; error
