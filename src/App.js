import React, { Component } from 'react';
import AgregarTarea from './componentes/AgregarTarea';
import Tareas from './componentes/Tareas';

class App extends Component {

  state = {
    tareas: []
  }

  // Save the data in the local Storage.
  componentDidUpdate() {
    localStorage.setItem(
      'tareas',
      JSON.stringify(this.state.tareas)
    )
  }

  // Upload the data from the local Storage.
  componentDidMount() {
    const tareasLS = localStorage.getItem('tareas');
    if(tareasLS) {
      this.setState({
        tareas: JSON.parse(tareasLS)
      })
    }
  }

  crearTarea = (nuevaTarea) => {
    const tareas = [...this.state.tareas, nuevaTarea];

    this.setState({
      tareas
    });
  }

  borrarTarea = id => {
    // Obtener copia del state
    const tareasActuales = [...this.state.tareas];

    // Borrar el elemento del state
    const tareas = tareasActuales.filter(tarea => tarea.id !== id)

    // Actualizar el state
    this.setState({
      tareas
    })
  }

  render() {
    return (
      <div className="container">
        <header><h1>Tareas Pendientes</h1></header>
        <div className="row">
          <div className="text-white col-md-6">
            <AgregarTarea crearTarea={this.crearTarea}/>
          </div>
          <div className="text-white col-md-6">
            <Tareas
              tareas = {this.state.tareas}
              borrarTarea = {this.borrarTarea}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
