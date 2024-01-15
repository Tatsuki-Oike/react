import { useRef } from "react"
import { v4 as uuidv4 } from 'uuid';
import { todoSelector } from '../store/storeTodo';
import { useSetRecoilState } from 'recoil'

export default function TodoForm() {
    const setTodo = useSetRecoilState(todoSelector)
    const content = useRef("")
    const submitForm = (e) => {
        e.preventDefault()
        setTodo({
            type: "add",
            item: {
                id: uuidv4(),
                content: content.current.value,
                status: "todo"
            }
        })
        content.current.value = ""
    }
    return (
        <div className="mt-3">
            <h2> Todo Form </h2>
            <form className="mb-3">
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <input type="text" className="form-control" id="content" 
                        name="content" ref={content} placeholder="Task Content"/>
                </div>

                <button type="submit" className="btn btn-primary mb-3"
                        onClick={submitForm}>
                        Submit
                </button>
            </form>
        </div>
    );
}