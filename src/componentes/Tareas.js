import React,{Component} from 'react';
import Tarea from './Tarea';

class Tareas extends Component {

    render() {
        const tareas = this.props.tareas;

        const mensaje = Object.keys(tareas).length === 0 ? "No hay tareas" : "Administra tus tareas aquí";
        return (
            <div className="card mt-5 ">
                <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-tareas">
                        {Object.keys(this.props.tareas).map(tarea => (
                            <Tarea 
                                key = {tarea}
                                info = {this.props.tareas[tarea]}
                                borrarTarea = {this.props.borrarTarea}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Tareas;