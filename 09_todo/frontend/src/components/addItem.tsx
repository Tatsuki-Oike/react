import { useRef } from "react"
import useTodo from "../hooks/UseTodo"

export default function AddItem() {

    const { addData } = useTodo()
    const content = useRef<HTMLInputElement>(null)
    
    const submitForm = (e: any) => {
        e.preventDefault()
        if (content.current && content.current.value) {
            addData({
                content: content.current.value,
                status: "todo"
            });
            content.current.value = "";
        }
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
