import React, { useState } from 'react'

type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" name="description" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false}> Add Todo
      </button>
    </form>
  )
}

export default AddTodo
