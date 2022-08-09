export {}

function identity<T extends number | string | boolean>(p1: T): T {
    return p1;
}

identity(1);
identity('a');
identity(true);
//identity([]) -> error

interface Person {
    name: string;
    age: number;
}

type T1 = keyof Person
