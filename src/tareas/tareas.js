import React from "react";

function Tarea(props) {
    return(
        <li  key={props.id}> {props.tarea}
            {props.completar && ( <button onClick={() => props.completar(props.id)}>Completar</button> )}
        </li>
    );
}

export default Tarea;