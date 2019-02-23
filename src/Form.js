import React, { Component } from 'react';

class Form extends Component {

    state = {
        name: '',
        description: '',
        imageUrl: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
    }

    componentDidMount() {
        const beerId = this.props.match.params.beerId
        if (beerId){
            fetch('https://beers-bunkier.firebaseapp.com/api/v1/beers/')
            .then(response=> response.json())
            .then (data=>{
                this.setState({
                    name: data.name,
                    description: data.description,
                    imageUrl: data.imageUrl
                })
            })
        }
      }
    


    render() {
        return (
            <div>
                <div>
                    name: <input defaultValue={this.state.name} onChange={this.state} type="text" name='name' />
                </div>

                <div>
                    description: <input defaultValue={this.state.description} onChange={this.handleChange} type="text" name='description' />
                </div>

                <div>
                    image url: <input defaultValue={this.state.imageUrl} onChange={this.handleChange} type="text" name='imageUrl' />
                </div>

                <div>
                    <button onClick={this.handleSubmit}>submit</button>
                </div>
            </div>
        )
    }
}

export default Form;

