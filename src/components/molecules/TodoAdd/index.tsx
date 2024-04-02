import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Form/Input"
import { useRef, useState } from "react"

type TodoAppProps = {
  onCreate?: (task: string) => void
  onError?: () => void
}

const TodoAdd = ({ onCreate = () => { }, onError = () => { } }: TodoAppProps) => {
  const [task, setTask] = useState('')
  const inputRef = useRef<HTMLInputElement>()

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    inputRef.current.focus()
    event.preventDefault()

    if (!task.trim()) {
      onError()

      return
    }

    onCreate(task)
    setTask('')
  }

  return (
    <form
      className="flex gap-3"
      onSubmit={(event) => onSubmitHandler(event)}
    >
      <Input
        placeholder="What to do next?"
        className="flex-1"
        value={task}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        ref={inputRef}
      />

      <Button type="submit">Add a Task</Button>
    </form>
  )
}

export default TodoAdd
