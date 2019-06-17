
/*
El nombre de la tarea
Descripción corta
La fecha de creación
La fecha de expiración
Prioridad: verde (prioridad baja), amarillo (prioridad media) y rojo (prioridad alta). La
prioridad debe mostrarse por medio del color de fondo o un ícono.
* */
import React from "react";
import Tarea from "../components/Tarea";
function Card(props) {

    return(
        <div className="listaTareas">
            <div className="card">
                <h5 className={`card-header ${props.color} text-white text-uppercase`}>{props.titulo}</h5>
                <div className="card-body px-1">
                    <Tarea tareas={props.tareas}/>
                    {props.tareas.length > 0 ? (
                        props.tareas.map(tarea => <Tarea id={tarea.id}
                                                         key={tarea.id}
                                                         nombre={tarea.nombre}
                                                         descripcion={tarea.descripcion}
                                                         inicio={tarea.fecha_inicio}
                                                         exp={tarea.fecha_inicio}
                                                         prioridad={tarea.prioridad}
                                                         estado={tarea.estado}
                                                         siguienteEstado={props.siguienteEstado}/>)
                    ) : (
                        <h5> No hay tareas pendientes </h5>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Card;