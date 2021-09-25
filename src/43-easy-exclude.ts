type MyExclude<T, U> = T extends U ? never : T

/* _____________ 测试用例 _____________ */
import { Equal, Expect } from '@type-challenges/utils'

type sss = MyExclude<string | number | (() => void), Function>

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, Exclude<'a' | 'b' | 'c', 'a'>>>,
  Expect<
    Equal<
      MyExclude<'a' | 'b' | 'c', 'a' | 'b'>,
      Exclude<'a' | 'b' | 'c', 'a' | 'b'>
    >
  >,
  Expect<Equal<sss, Exclude<string | number | (() => void), Function>>>
]
