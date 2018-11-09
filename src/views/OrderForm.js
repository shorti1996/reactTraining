import React, { Component } from 'react';
import SubmitOrder from '../services/SubmitOrder';

class OrderForm extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
        email: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        // console.log(this.props.location.state);
        SubmitOrder(this.state.name, this.state.surname, this.props.location.state.ingredients)
    };

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    };
    
    render() {
        return (
            <form className="order-form" onSubmit={this.handleSubmit} >
                <div>
                    <label>Name</label>
                    <input name="name" value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Address</label>
                    <input name="address" value={this.state.address} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Phone</label>
                    <input name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    };
};

export default OrderForm;