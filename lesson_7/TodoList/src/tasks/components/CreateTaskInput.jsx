import React from 'react';

class CreateTaskInput extends React.Component {
    state = {
        value: '',
    };
    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }
    handleTaskCreate = () => {
        this.props.onCreate(this.state.value);
        this.setState({ value: '' })
    }
    render() {
        return(
            <div className="create-task">
                <input 
                  type="text" 
                  className="create-task__input"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleTaskCreate} className="btn">Create</button>
            </div>
        )
    }
}
export default CreateTaskInput;