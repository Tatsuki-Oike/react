import { atom, RecoilState } from "recoil"
import { TodoType } from "../type/todo"

export const todoAtom: RecoilState<TodoType>  = atom({
    key: "todoAtom",
    default: [] as TodoType
})