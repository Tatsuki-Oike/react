import { useRecoilState } from "recoil" 
import { TodoItem, TodoType } from "../type/todo"
import { todoAtom } from "../store/storeTodo"

const baseUrl = "http://127.0.0.1:8000/api/task/"

export default function useTodo(){

    const [todoList, setTodoList] = useRecoilState(todoAtom)
    
    const fetchData = async () => {
        const response = await fetch(baseUrl)
        if (response.ok) {
            const todoList = await response.json() as TodoType
            console.log("Fetch")
            setTodoList(todoList)
        }
    }

    const addData = async (item: TodoItem) => {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
          })
          
        if (response.ok) {
            console.log("Add")
            await fetchData()
        }
    }

    const putData = async (item: TodoItem) => {
        const status = {
            ...item,
            "status": "done"
        }
        const response = await fetch(`${baseUrl}${item.id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(status),
          })
          
        if (response.ok) {
            console.log("Add")
            await fetchData()
        }
    }

    const deleteData = async (item: TodoItem) => {
        const response = await fetch(`${baseUrl}${item.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          
        if (response.ok) {
            console.log("Delete")
            await fetchData()
        }
    }

    return { todoList, fetchData, addData, putData, deleteData }
}
