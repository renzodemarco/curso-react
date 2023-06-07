import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTasks } from '../services/services';


const Tasks = () => {

    const {category} = useParams();

    const [tasks, setTasks] = useState();

    useEffect(() => {
        getTasks(category).then(tasks => {
            setTasks(tasks)})
    }, [category])
    
    if (!tasks) return ('Cargando...');

    return (
        <>
        {tasks.map(task => (
                <div key={task.id} className="card">
                <Link to={`/product/${task.id}`}>
                    <img src={task.photo} className="card-img-top" alt="prenda actual"/>          
                    <div className="card-body">
                        <h2>{task.title}</h2>
                        <p className="card-text">${task.price}</p>
                    </div>
                </Link>
            </div>))
            }
        </>
    )
}

export default Tasks;