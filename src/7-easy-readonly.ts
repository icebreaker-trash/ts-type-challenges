interface Todo {
  title: string
  description: string
}
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
const todo1: MyReadonly<Todo> = {
  title: 'Hey',
  description: 'foobar'
}

todo1.title = 'Hello' // Error: cannot reassign a readonly property
todo1.description = 'barFoo' // Error: cannot reassign a readonly property
