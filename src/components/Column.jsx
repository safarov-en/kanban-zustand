import { useStore } from 'zustand'
import './Column.css'
import Task from './Task'

export default function Column({state}) {
    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state)
    )
    return (
        <div className="column">
            <p>{state}</p>
            <Task title="Todo" />
        </div>
    )
}