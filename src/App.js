import React from 'react';
import Card from "./components/Card"
import NuevoIngreso from "./components/Form";
import './App.scss';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tareas:[
                {id: 0, nombre: "tarea 1", descripcion: "Descripcion del tarea 1", fecha_inicio: '05/25/2019', fecha_exp: '06/01/2019', prioridad: 'media', estado: 'baglog'},
                {id: 1, nombre: "tarea 2", descripcion: "Descripcion del tarea 2", fecha_inicio: '05/25/2018', fecha_exp: '06/01/2019', prioridad: 'baja', estado: 'todo'},
                {id: 2, nombre: "tarea 3", descripcion: "Descripcion del tarea 3", fecha_inicio: '05/25/2017', fecha_exp: '06/01/2019', prioridad: 'alta', estado: 'todo'},
                {id: 3, nombre: "tarea 4", descripcion: "Descripcion del tarea 4", fecha_inicio: '05/25/2016', fecha_exp: '06/01/2019', prioridad: 'media', estado: 'baglog'},
                {id: 4, nombre: "tarea 5", descripcion: "Descripcion del tarea 5", fecha_inicio: '05/25/2015', fecha_exp: '06/01/2019', prioridad: 'baja', estado: 'inprogress'},
                {id: 5, nombre: "tarea 6", descripcion: "Descripcion del tarea 6", fecha_inicio: '05/25/2014', fecha_exp: '06/01/2019', prioridad: 'alta', estado: 'done'},
                {id: 6, nombre: "tarea 7", descripcion: "Descripcion del tarea 7", fecha_inicio: '05/25/2013', fecha_exp: '06/01/2019', prioridad: 'baja', estado: 'baglog'},
                {id: 7, nombre: "tarea 8", descripcion: "Descripcion del tarea 8", fecha_inicio: '05/25/2012', fecha_exp: '06/01/2019', prioridad: 'media', estado: 'todo'},
            ],
        }
    }

    agregaTarea = (nombre, descripcion, inicio, exp, prioridad) => {
        let tareas = this.state.tareas;
        let nuevoId = tareas[tareas.length - 1].id+1;
        tareas.push({id: nuevoId, nombre: nombre, descripcion: descripcion, fecha_inicio: inicio, fecha_exp: exp, prioridad: prioridad, estado: 'baglog'});
        this.setState({
            tareas
        })

    };

    siguienteEstado = id => {
        const objIndex = this.state.tareas.findIndex(tarea => tarea.id === id);
        let tareas = this.state.tareas;
        console.log(console.log(id));
        if (tareas[objIndex].estado == 'baglog') {
            tareas[objIndex].estado = "todo";
        } else if(tareas[objIndex].estado == 'todo') {
            tareas[objIndex].estado = 'inprogress';
        } else if (tareas[objIndex].estado == 'inprogress') {
            tareas[objIndex].estado = 'done';
        }


        this.setState({
            tareas
        });
    }

    render() {
        const baglog = this.state.tareas.filter(tarea => tarea.estado === 'baglog');
        const todo = this.state.tareas.filter(tarea => tarea.estado === 'todo');
        const inprogress = this.state.tareas.filter(tarea => tarea.estado === 'inprogress');
        const done = this.state.tareas.filter(tarea => tarea.estado === 'done');
        return (
            <div className="App">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <NuevoIngreso agregaTarea={this.agregaTarea}/>
                        </div>
                        <div className="col-3 px-2">
                            <Card siguienteEstado={this.siguienteEstado} tareas={baglog} titulo={"baglog"} color={"bg-danger"}/>
                        </div>
                        <div className="col-3 px-2">
                            <Card siguienteEstado={this.siguienteEstado} tareas={todo} titulo={"To Do"} color={"bg-warning"}/>
                        </div>
                        <div className="col-3 px-2">
                            <Card siguienteEstado={this.siguienteEstado} tareas={inprogress} titulo={"In progress"} color={"bg-info"}/>
                        </div>
                        <div className="col-3 px-2">
                            <Card tareas={done} titulo={"Done"} color={"bg-success"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
