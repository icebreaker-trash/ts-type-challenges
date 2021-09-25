type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: [...infer R]
) => any
  ? R
  : never

// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
  Expect<Equal<Parameters<typeof baz>, []>>
]
