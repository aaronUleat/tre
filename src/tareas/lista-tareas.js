import React from "react";
import Tarea from  "./tareas"
function ListaTareas(props) {
    return(
        <div className="listaTareas">
            <h2>{props.titulo}</h2>
            <ul>
            { props.tareas.length > 0 ? (
                props.tareas.map(tarea =>  <Tarea tarea={tarea.tarea} key={tarea.id} id={tarea.id} completar={props.completar}/> )
            ) : (
                <h4>No hay tareas</h4>
            ) }
            </ul>
        </div>
    );
}

export default ListaTareas;