import React from "react";
function Tarea(props) {

    function alertType() {
        if (props.prioridad == 'baja') {
            return 'alert-success'
        } else if(props.prioridad == 'media') {
            return 'alert-warning'
        }
        return 'alert-danger'
    }

    function buttonIfState() {
        if (props.estado == 'done') {
            return 'd-none'
        }
    }


    return(
        <div className={`alert ${alertType()}`} key={props.id} id={props.id}>
            <p className={`my-0`}>{props.nombre}</p>
            <p className={`my-0`}>{props.descripcion}</p>
            <p className={`my-0`}>{props.inicio}</p>
            <p className={`my-0`}>{props.exp}</p>
            <button onClick={ () => props.siguienteEstado(props.id)} className={`btn btn-primary btn-block ${buttonIfState()}`} type={`button`}>Continuar al Siguiente Estado</button>
        </div>
    );
}


export default Tarea;