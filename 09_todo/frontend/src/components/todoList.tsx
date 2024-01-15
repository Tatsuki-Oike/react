import { TodoType } from "../type/todo";
import useTodo from "../hooks/UseTodo"

type TodoListProps = {
    todoListArray: TodoType
}

export default function TodoList({todoListArray}: TodoListProps) {

    const { putData, deleteData } = useTodo()

    return (
        <div className="mt-3">
            <h2> Todo List </h2> 
            <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Content</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoListArray.map(item => (
                        <tr className="align-middle" key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.content}</td>
                            <td>{item.status}</td>
                            <td>
                                <button className="btn btn-primary"
                                    onClick={() => putData(item)}>
                                        Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                    onClick={() => deleteData(item)}>
                                        DELETE
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
