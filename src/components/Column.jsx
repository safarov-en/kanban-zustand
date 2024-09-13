import { useState } from 'react'
import { useStore } from '../store'
import './Column.css'
import Task from './Task'
import { shallow } from 'zustand/shallow'

export default function Column({state}) {
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state),
        shallow
    )
    const addTask = useStore((store) => store.addTask)
    return (
        <div className="column">
            <div className='titleWrapper'>
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>Add</button>
            </div>
            {tasks.map((task) => (
                <Task title={task.title} key={task.title} />
            ))}
            {open && <div className='Modal'>
                <div className='modalContent'>
                    <input onChange={(e) => setText(e.target.value)} value={text} />
                    <button
                        onClick={() => {
                            addTask(text, state)
                            setText('')
                            setOpen(false)
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>}
        </div>
    )
}