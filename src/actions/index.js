export const INCREMENT = 'INCREMENT'; // reducer側でも利用するのでココでexportする。（正直好みの問題）
export const DECREMENT = 'DECREMENT'; // reducer側でも利用するのでココでexportする。（正直好みの問題）

//ActionCreatorを定義。viewで利用する。
export const increment = () => ({ 
    type: INCREMENT
});

//ActionCreatorを定義。viewで利用する。
export const decrement = () => ({
    type: DECREMENT
});