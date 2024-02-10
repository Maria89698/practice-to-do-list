import { Todo } from "./Todo";

export function TodoList ({toDos}) {
    return (
        <ul>
            {
                toDos.map((Todo) => (
                    <Todo
                    key={Todo.id}
                    text={Todo.text}
                    completed={Todo.completed}/>
                ))
            }
        </ul>
    )
}