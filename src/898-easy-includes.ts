// type Includes<T extends readonly any[], U> = {
//   [K in T[number]]: true
// }[U] extends true
//   ? true
//   : false

// type Includes<T extends readonly any[], U> = T extends [infer C, ...infer R] ?
//  [C, U] extends [U, C] ? true : Includes<R, U>
//  : false;


 type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
  ? [U, L] extends [L, U]
    ? true
    : Includes<R, U>
  : false


type y = Includes<[false, 2, 3, 5, 6, 7], false>

type yyy<T extends readonly any[], U> = {
  [K in T[number]]: true
}

type s = {
  false: true
}

/**
 * type t = {
    6: true;
    2: true;
    3: true;
    5: true;
    7: true;
}
 */
// 为啥 false 被去掉了?

type t = yyy<[false, 2, 3, 5, 6, 7], false>
/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>
  >,
  Expect<
    Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>
  >,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>
]
