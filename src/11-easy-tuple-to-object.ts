const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key
}

const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases =  Equal<TupleToObject<typeof tuple>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}>

