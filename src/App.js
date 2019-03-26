import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddressBook from './AddressBook/AddressBook';
//import { generate } from 'randomstring';

class App extends Component {
  state = {
    addresses: [
      {
        key: 1,
        firstName: 'Cathy',
        lastName: 'Pierce',
        birthday: '9/14/1996',
        telephone: '200-910-8132'
      },
      {
        key: 2,
        firstName: 'Alfonso',
        lastName: 'Cooley',
        birthday: '8/10/1973',
        telephone: '200-657-9362'
      },
      {
        key: 3,
        firstName: 'Victor',
        lastName: 'Gordon',
        birthday: '8/3/1970',
        telephone: '200-661-9407'
      },
      {
        key: 4,
        firstName: 'Colleen',
        lastName: 'Wright',
        birthday: '10/28/1967',
        telephone: '200-250-7949'
      },
      {
        key: 5,
        firstName: 'James',
        lastName: 'Johnston',
        birthday: '5/11/1972',
        telephone: '200-645-3176'
      },
      {
        key: 6,
        firstName: 'Anna',
        lastName: 'Reyes',
        birthday: '9/10/1975',
        telephone: '200-707-8670'
      }
    ],
    // more attributes
    //"collapse": false,
    formKey: 6,
    formFist: '',
    formLast: '',
    formBirth: '',
    formTele: ''
  };

  addAddressHandler = (event) => {
    event.preventDefault();
    let newAddress = {
      key: this.state.formKey + 1,
      firstName: this.state.formFist,
      lastName: this.state.formLast,
      birthday: this.state.formBirth,
      telephone: this.state.formTele
    };
    this.setState({ addresses: [...this.state.addresses, newAddress] });
    this.setState({ formKey: this.state.formKey + 1 });
    this.setState({ formFist: '' });
    this.setState({ formLast: '' });
    this.setState({ formBirth: '' });
    this.setState({ formTele: '' });
  }

  deleteAddresshandler = (e, key) => {
    let addresses = [...this.state.addresses];
    let deleteIndex = addresses.findIndex((item) => item.key === key);
    const confirm = window.confirm('Are you sure you wish to delete this address?');
    if (confirm) {
      addresses.splice(deleteIndex, 1);
    }
    this.setState({ addresses: addresses });
  }


  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Address Book</h1>
          </header>

          <AddressBook
            addresses={this.state.addresses}
            delete={this.deleteAddresshandler}>
          </AddressBook>

          <h3 className='text-left'>Add a new address</h3>
          <Form className="text-left" onSubmit={this.addAddressHandler}>
            <Form.Group controlId="formAddress">

              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"
                placeholder="Enter First Name"
                value={this.state.formFist}
                onChange={(e) => this.setState({ formFist: e.target.value })} />

              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"
                placeholder="Enter Last Name"
                value={this.state.formLast}
                onChange={(e) => this.setState({ formLast: e.target.value })} />

              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date"
                placeholder="Enter Birthday"
                value={this.state.formBirth}
                onChange={(e) => this.setState({ formBirth: e.target.value })} />

              <Form.Label>Telephone</Form.Label>
              <Form.Control type="telephone"
                placeholder="Enter telephone number"
                value={this.state.formTele}
                onChange={(e) => this.setState({ formTele: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit" >Add Address</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
