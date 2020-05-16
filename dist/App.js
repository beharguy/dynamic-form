function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import './App.css';
import { set } from './utils';
import DynamicForm, { types } from './components/DynamicForm';

class App extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      // gridTemplateAreas: `
      //   "firstName lastName"
      //   "agree agree"
      //   "address address"
      // `,
      // gridTemplateColumns: '1fr 1fr',
      items: [{
        name: 'firstName',
        type: types.TEXT,
        label: 'First Name',
        placeholder: 'First Name'
      }, {
        name: 'lastName',
        type: types.TEXT,
        label: 'Last Name',
        placeholder: 'Last Name'
      }, {
        name: 'agree',
        type: types.BOOLEAN,
        label: 'Agree'
      }, {
        name: 'address',
        type: types.OBJECT,
        label: 'Address',
        items: [{
          name: 'city',
          type: types.TEXT,
          label: 'City',
          placeholder: 'City'
        }, {
          name: 'street',
          type: types.TEXT,
          label: 'Street',
          placeholder: 'Street'
        }],
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `"city street"`
      }],
      data: {
        firstName: 'Guy'
      }
    });
  }

  render() {
    const {
      items,
      data,
      gridTemplateAreas,
      gridTemplateColumns
    } = this.state;
    console.log(data);
    return /*#__PURE__*/React.createElement("div", {
      className: "App"
    }, /*#__PURE__*/React.createElement(DynamicForm, {
      items: items,
      data: data,
      gridTemplateAreas: gridTemplateAreas,
      gridTemplateColumns: gridTemplateColumns,
      onChange: (event, path, newValue) => {
        console.log(path);
        this.setState({
          data: set(this.state.data, path, newValue)
        });
      }
    }));
  }

}

export default App;