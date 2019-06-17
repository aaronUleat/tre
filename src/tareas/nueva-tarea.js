import React from "react";

class NuevaTarea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit = () => {
        this.props.agregaTarea(this.state.value);
    };

    render() {
        return(
            <div className="nuevaTarea">
                <label>
                    Agregar nueva tarea:
                    <input value={this.state.value} onChange={this.handleChange} type="text"/>
                </label>
                <button type="submit" value="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default NuevaTarea;