import React from "react";

class NuevoIngreso extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nombre_value: '',
            descripcion_value: '',
            inicio_value: '',
            exp_val: '',
            prioridad_val: ''
        }

    }
    handleNombre = event => {
        this.setState({
            nombre_value: event.target.value
        })
    };

    handleDescripcion = event => {
        this.setState({
            descripcion_value: event.target.value
        })
    };

    handleInicio = event => {
        this.setState({
            inicio_value: event.target.value
        })
    };

    handleExp = event => {
        this.setState({
            exp_val: event.target.value
        })
    };

    handlePrioridad = event => {
        this.setState({
            prioridad_val: event.target.value
        })
    };

    handleSubmit = () => {
        if (this.state.nombre_value !== '' && this.state.descripcion_value !== ''
            && this.state.inicio_value !== '' && this.state.exp_val !== ''
            && this.state.prioridad_val !== '') {
            this.props.agregaTarea(this.state.nombre_value, this.state.descripcion_value, this.state.inicio_value , this.state.exp_val, this.state.prioridad_val);
        }
    };

    render() {
        return(
            <div className="formulario">
                    <h5>Genere una nueva tarea</h5>
                    <div className="row">
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="">Nombre</label>
                                <input value={this.state.nombre_value} onChange={this.handleNombre} className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="">Descripcion</label>
                                <input value={this.state.descripcion_value} onChange={this.handleDescripcion} className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="">Fecha Inicio</label>
                                <input value={this.state.inicio_value} onChange={this.handleInicio} className="form-control" type="date"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="">Fecha de Expiracion</label>
                                <input value={this.state.exp_val} onChange={this.handleExp} className="form-control" type="date"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group">
                                <label htmlFor="">Prioridad</label>
                                <select value={this.state.prioridad_val} onChange={this.handlePrioridad} className={`form-control`}>
                                    <option value="">Selecciona una prioridad</option>
                                    <option value="baja">Baja</option>
                                    <option value="media">Media</option>
                                    <option value="media">Alta</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group clearfix">
                                <button onClick={this.handleSubmit} className={`btn btn-primary float-right`}>Generar Tarea</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}


export default NuevoIngreso;