const TodoItem = ({todo = {done: true, title: "Buy milk", status: "COMPLETED"}}) => {
    return (
        <li className="list-group-item">
            <input type="checkbox" className="me-2" defaultChecked={todo.done}></input>
            {todo.title} ({todo.status})
        </li>
    )
}

export default TodoItem;