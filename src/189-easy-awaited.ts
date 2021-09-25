/* _____________ 你的代码 _____________ */

type Awaited<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R
  : never

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>
]

// @ts-expect-error
type error = Awaited<number>

// export {}
// type Parameters<T> = T extends (...args: infer R) => any ? R : any;
// type T0 = Parameters<() => string>;  // []
// type T1 = Parameters<(s: string) => void>;  // [string]
// type T2 = Parameters<(<T>(arg: T) => T)>;  // [unknown]
