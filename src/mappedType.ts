export {}
interface Person {
    name: string;
    age: number;
}

type T1 = { [K in 'a' | 'b']?: boolean }
const ab: T1 = {}
const mustAB: T1 = { a: true, b: false }

type makeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: makeBoolean<Person> = {}
pMap.age = true;

type T2 = Person['name'];
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
type Partial<T> = { [P in keyof T]?: T[P] };
type T3 = Partial<Person>;
type T4 = ReadOnly<Person>;

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
interface Human {
    name: string;
    age: number;
    language: string;
}

type T5 = Pick<Human, 'name' | 'language'>

type Record<K extends string, T> = { [P in K]: T }
type T6 = Record<'p1' | 'p2', Human>
type T7 = Record<'p1' | 'p2', number>
