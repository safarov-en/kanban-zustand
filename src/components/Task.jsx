import classNames from 'classnames'
import './Task.css'
import { useStore } from '../store'
import { shallow } from 'zustand/shallow'
import trash from '../assets/trash-2.svg'

export default function Task({title}) {
    const task = useStore((store) =>
        store.tasks.find((task) => task.title === title),
        shallow
    )
    const setDraggedTask = useStore((store) => store.setDraggedTask)
    const deleteTask = useStore((store) => store.deleteTask)
    return (
        <div
            className="task"
            draggable
            onDragStart={() => {
                setDraggedTask(task.title)
            }}
        >
            <div>{task.title}</div>
            <div className='bottomWrapper'>
                <div>
                    <img src={trash} onClick={() => deleteTask(task.title)} />
                </div>
                <div className={classNames('status', task.state)}>{task.state}</div>
            </div>
        </div>
    )
}