import { useReducer, useState } from 'react'

const HookUseReducer = () => {
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    const initialTasks = [
        {id: 1, text: "Estudar React"},
        {id: 2, text: "Estudar spring boot"},
        {id: 3, text: "Estudar Python"},
        {id: 4, text: "Estudar lógica de programação"}
    ];

    const [taskText, setTaskText] = useState();

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                const newTask = { id: Math.random(), text: taskText };
                setTaskText("");
                return [...state, newTask];
            case "DELETE":
                return state.filter((task) => task.id !== action.id) ;
            default:
                return state;
        }
    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatchTasks({type: "ADD"});
    }

    const removeTask = (id) =>{
        dispatchTasks({type: "DELETE", id});
    }

    return (
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch}>Alterar o valor!</button>
            <hr />

            <h2>Lista de tarefas</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                <input type="submit" value="Adicionar tarefa" />
            </form>
            {tasks.map((task) => (
                <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.id} - {task.text}</li>
            ))}
            <hr />
        </div>
    );
}

export default HookUseReducer;