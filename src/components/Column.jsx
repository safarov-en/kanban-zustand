import { useStore } from '../store'
import './Column.css'
import Task from './Task'
import { shallow } from 'zustand/shallow'

export default function Column({state}) {
    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state),
        shallow
    )
    const addTask = useStore((store) => store.addTask)
    return (
        <div className="column">
            <div className='titleWrapper'>
                <p>{state}</p>
                <button onClick={() => addTask('gsrthrth' + state, state)}>Add</button>
            </div>
            {tasks.map((task) => (
                <Task title={task.title} key={task.title} />
            ))}
        </div>
    )
}