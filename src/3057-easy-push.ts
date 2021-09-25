// type Push<T extends unknown[], U extends unknown> = [...T, U]

type Push<T, U> = T extends [...infer R] ? [...R, U] : never

/* _____________ Test Cases _____________ */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
