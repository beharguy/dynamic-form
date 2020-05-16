function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../consts/types';
import TextItem from './TextItem';
import CheckboxItem from './CheckboxItem';
import ObjectItem from './ObjectItem';
export class FormItem extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", path => (event, newValue) => {
      const {
        onChange
      } = this.props;
      console.log(path);
      onChange(event, path, newValue);
    });

    _defineProperty(this, "renderItem", () => {
      const {
        item,
        value,
        path,
        onChange
      } = this.props;

      switch (item.type) {
        case types.TEXT:
          return /*#__PURE__*/React.createElement(TextItem, _extends({}, item, {
            value: value,
            onChange: this.handleChange([...path, item.name])
          }));

        case types.BOOLEAN:
          return /*#__PURE__*/React.createElement(CheckboxItem, _extends({}, item, {
            value: value,
            onChange: this.handleChange([...path, item.name])
          }));

        case types.OBJECT:
          return /*#__PURE__*/React.createElement(ObjectItem, _extends({}, item, {
            value: value || {},
            path: [...path, item.name],
            onChange: onChange
          }));

        default:
          return null;
      }
    });
  }

  render() {
    return this.renderItem();
  }

}

_defineProperty(FormItem, "propTypes", {
  item: PropTypes.object,
  value: PropTypes.any,
  path: PropTypes.array,
  onChange: PropTypes.func.isRequired
});