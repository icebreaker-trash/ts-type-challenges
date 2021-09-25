// 期望是一个 string 类型
type HelloWorld = string



/* _____________ 测试用例 _____________ */
import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]