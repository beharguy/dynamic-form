import React, { Component } from 'react';
import './App.css';

import { set } from './utils';

import DynamicForm, { types } from './components/DynamicForm';

class App extends Component {

  state = {
    // gridTemplateAreas: `
    //   "firstName lastName"
    //   "agree agree"
    //   "address address"
    // `,
    // gridTemplateColumns: '1fr 1fr',
    items: [
      { name: 'firstName', type: types.TEXT, label: 'First Name', placeholder: 'First Name' },
      { name: 'lastName', type: types.TEXT, label: 'Last Name', placeholder: 'Last Name' },
      { name: 'agree', type: types.BOOLEAN, label: 'Agree' },
      {
        name: 'address', type: types.OBJECT, label: 'Address', items: [
          { name: 'city', type: types.TEXT, label: 'City', placeholder: 'City' },
          { name: 'street', type: types.TEXT, label: 'Street', placeholder: 'Street' }
        ],
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `"city street"`
      }
    ],
    data: {
      firstName: 'Guy'
    }
  };

  render() {
    const { items, data, gridTemplateAreas, gridTemplateColumns } = this.state;

    console.log(data);

    return (
      <div className="App">
        <DynamicForm
          items={items}
          data={data}
          gridTemplateAreas={gridTemplateAreas}
          gridTemplateColumns={gridTemplateColumns}
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
