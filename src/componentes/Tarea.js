import React,{Component} from 'react';

class Tarea extends Component {

    eliminarTarea = () => {
        this.props.borrarTarea(this.props.info.id);
    }

    render() {
        const {fecha, materia, tarea, descripcion} = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{tarea}</h3>
                    <p className="card-text"><span>Materia:  </span> {materia} </p>
                    <p className="card-text"><span>Fecha de Entrega:  </span> {fecha} </p>
                    <p className="card-text"><span>Descripción: </span> </p>
                    <p className="card-text"> {descripcion} </p>

                    <button onClick = {this.eliminarTarea} className="btn btn-warning">
                        Borrar &times;
                    </button>
                </div>
            </div>
        );
    }
}

export default Tarea;