import { todoSelector } from '../store/storeTodo';
import { useRecoilState } from 'recoil'

export default function Todo() {

    const [todo, setTodo] = useRecoilState(todoSelector)

    const editFunc = (item) => {
        setTodo({
            type: "edit",
            item
        })
    }

    const deleteFunc = (item) => {
        setTodo({
            type: "delete",
            item
        })
    }

    if (todo.length === 0){
        return <p> 表示できるデータが存在しません </p>
    }
    
    return (
        <div className="mt-5">
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
                        {todo.map(item => (
                            <tr className="align-middle" key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.content}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => editFunc(item)}>
                                            Edit
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => deleteFunc(item)}>
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
