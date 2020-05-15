import React, { Component } from 'react';
import './App.css';

import { set } from './utils';

import DynamicForm, { types } from './components/DynamicForm';

class App extends Component {

  state = {
    items: [
      { name: 'firstName', type: types.TEXT, title: 'First Name: ', placeholder: 'First Name' },
      { name: 'lastName', type: types.TEXT, title: 'Last Name: ', placeholder: 'Last Name' },
      { name: 'agree', type: types.BOOLEAN, title: 'Agree: ' },
      {
        name: 'address', type: types.OBJECT, title: 'Address: ', items: [
          { name: 'city', type: types.TEXT, title: 'City: ', placeholder: 'City' },
        ]
      }
    ],
    data: {
      firstName: 'Guy'
    }
  };

  render() {
    const { items, data } = this.state;

    console.log(data);

    return (
      <div className="App">
        <DynamicForm
          items={items}
          data={data}
          onChange={(event, path, newValue) => {
            console.log(path);
            this.setState({
              data: set(this.state.data, path, newValue)
            })
          }}
        />
      </div>
    );
  }
}

export default App;
