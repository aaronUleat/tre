import React from "react";
import ListaTareas from "./tareas/lista-tareas";
import NuevaTarea from "./tareas/nueva-tarea";

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tareas: [
                {id: 0, tarea: "Estudiar ES6", estado: 'pendiente'},
                {id: 1, tarea: "Estudiar React", estado: 'completa'},
                {id: 2, tarea: "Estudiar Vue", estado: 'pendiente'}
            ]
        }
    }

    agregaTarea = tarea => {
      let tareas = this.state.tareas;
      let nuevoId = tareas[tareas.length - 1].id+1;
      tareas.push({id: nuevoId, tarea: tarea, estado: 'pendiente'});
      this.setState({
          tareas
      })

    };

    completar = id => {
        console.log(this.state.tareas);
        const objIndex = this.state.tareas.findIndex(tarea => tarea.id === id);
        let tareas = this.state.tareas;

        tareas[objIndex].estado = "completa";

         this.setState({
             tareas
         });
    }

    render() {
        const pendientes = this.state.tareas.filter(tarea => tarea.estado === 'pendiente');
        const completadas = this.state.tareas.filter(tarea => tarea.estado === 'completa');
        return (
            <div className="master">
                <h1>Administrador de tareas</h1>
                <NuevaTarea agregaTarea={this.agregaTarea} />
                <ListaTareas tareas={pendientes} titulo="Pendientes" completar={this.completar}/>
                <ListaTareas tareas={completadas} titulo="Completadas"/>
            </div>
        );
    }
}

export default Master;