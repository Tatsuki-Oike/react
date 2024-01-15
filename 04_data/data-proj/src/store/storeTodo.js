import { atom, selector } from "recoil"

export const todoAtom = atom({
    key: "todoAtom",
    default: []
})

export const todoSelector = selector({
    key: "todoSelector",
    get: ({ get }) => {
        return get(todoAtom)
    },
    set: ({ get, set }, { type, item }) => {
        switch (type) {
            case "add":
                set(todoAtom, oldTodoList => [...oldTodoList, item]);
                break
            case "edit":
                const currentTodoList = get(todoAtom);
                const updatedTodoList = currentTodoList.map(todo =>
                todo.id === item.id ? { ...todo, status: "done" } : todo
                );
                set(todoAtom, updatedTodoList);
                break
            case "delete":
                const filteredTodoList = get(todoAtom).filter(todo => todo.id !== item.id);
                set(todoAtom, filteredTodoList);
                break
            default:
                throw new Error("Type is invalid")
        }
    }
})
