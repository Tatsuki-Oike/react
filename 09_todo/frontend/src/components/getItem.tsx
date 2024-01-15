import { useEffect } from "react"
import useTodo from "../hooks/UseTodo"
import TodoList from "./todoList";

export default function GetItem() {
    
    const { todoList, fetchData } = useTodo()

    useEffect(() => {
        fetchData()
    }, [])

    if (todoList.length === 0){
        return <p> 表示できるデータが存在しません </p>
    }
    
    return (
        <TodoList todoListArray={todoList}></TodoList>    
    );
}