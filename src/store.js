import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
    tasks: [{ title: 'TestTask', state: "PLANNED" }],
    draggedTask: null,
    addTask: (title, state) => set((store) => ({ tasks: [...store.tasks, { title, state }] }), false, 'addTask'),
    deleteTask: (title) =>
        set((store) => ({
            tasks: store.tasks.filter((task) => task.title !== title)
        })),
    setDraggedTask: (title) => set({ draggedTask: title }),
    moveTask: (title, state) => set((store) => ({
        tasks: store.tasks.map((task) =>
            task.title === title ? { title, state } : task
        )
    }))
})

export const useStore = create(persist(devtools(store), {name: "store"}))