import React from 'react';

class MyComponent extends React.Component{

    state = {
        name: 'Example',
        web: 'webappdt.com'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleClickButton = () => {
        alert('Click Me');
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={(event) => this.handleOnChangeName(event)} />
                <div>hello my name : {this.state.name}</div>
                <span>my website: {this.state.web}</span>
                <div className="click">
                    <button onClick={ ()=> this.handleClickButton() }>Click me</button>
                </div>
            </div>
        )
    }
}

export default MyComponent;