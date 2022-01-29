interface ITodo {
  //name: any
  [x: string]: any
  _id: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

interface TodoProps {
  todo: ITodo
}

type ApiDataType = {
  [x: string]: any
  message: string
  //error?: any
  status: string
  todos: ITodo[]
  todo?: ITodo
}
