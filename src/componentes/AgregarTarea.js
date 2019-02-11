import React, { Component } from "react";
import uuid from 'uuid';

class AgregarTarea extends Component {

  // Refs
  materiaRef = React.createRef();
  tareaRef = React.createRef();
  fechaRef = React.createRef();
  descripcionRef = React.createRef();

  state = {
    error: false
  };

  crearNuevaTarea = e => {
    e.preventDefault();

    const tarea = this.tareaRef.current.value,
      materia = this.materiaRef.current.value,
      fecha = this.fechaRef.current.value,
      descripcion = this.descripcionRef.current.value;

    if (
      tarea === "" ||
      materia === "" ||
      fecha === "" ||
      descripcion === ""
    ) {
      this.setState({
        error: true
      });
    } else {
      const nuevaTarea = {
        id: uuid(),
        tarea,
        materia,
        fecha,
        descripcion
      };

      // Se envía el objeto hacia el padre para reiniciar el state
      this.props.crearTarea(nuevaTarea);

      // Reiniciar el formulario
      e.currentTarget.reset();

      // Eliminar el error
      this.setState({
        error: false
      });
    }
  };
  render() {
    const existeError = this.state.error;
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las Tareas Aquí</h2>
          <form onSubmit={this.crearNuevaTarea}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Materia</label>
                <div className="col-sm-8 col-lg-6  mb-4 mb-lg-0">
                    <select ref={this.materiaRef} className="form-control">
                        <option defaultValue>Seleccione la Materia</option>
                        <option value="Cálculo Integral">Cálculo Integral</option>
                        <option value="Física I">Física I</option>
                        <option value="POO">POO</option>
                        <option value="Estructura de Datos">Estructura de Datos</option>
                        <option value="Matemáticas Discretas">Matemáticas Discretas</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Tarea
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  ref={this.tareaRef}
                  type="text"
                  className="form-control"
                  placeholder="Tarea"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha de Entrega</label>
              <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                <input
                  ref={this.fechaRef}
                  type="date"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Descripción
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea ref={this.descripcionRef} className="form-control" />
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-3">
                <button type="submit" className="btn btn-success w-100">
                  Agregar
                </button>
              </div>
            </div>
          </form>
          {existeError ? (
            <div className="alert alert-warning text-center">
              Debes llenar todos los campos.
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default AgregarTarea;
