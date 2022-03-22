import React from 'react';

class Form extends React.Component{

    state = {
        submit: 'Submit',
        firstName:'',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    render(){
        const handleSubmit = (e) => {
            // alert(`${this.state.firstName} and ${this.state.lastName}`)
            e.preventDefault()
            console.log('>>>>Check input: ', this.state)
        }
        return(
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input type="text" placeholder='First Name' value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)}/>
                    <label>Last Name:</label>
                    <input type="text" placeholder='Last Name' value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)}/>

                   <button>{this.state.submit}</button>
                </form>
            </div>
        )
    }
}

export default Form;