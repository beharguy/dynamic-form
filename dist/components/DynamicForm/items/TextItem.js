function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledFormItem from '../../StyledComponents/StyledFormItem';
import StyledFormItemLabel from '../../StyledComponents/StyledFormItemLabel';
import StyledFormItemContent from '../../StyledComponents/StyledFormItemContent';
export default class TextItem extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChange", event => {
      const {
        onChange
      } = this.props;
      onChange(event, event.target.value);
    });
  }

  render() {
    const {
      name,
      label,
      value,
      placeholder
    } = this.props;
    return /*#__PURE__*/React.createElement(StyledFormItem, {
      gridArea: name
    }, /*#__PURE__*/React.createElement(StyledFormItemLabel, null, label), /*#__PURE__*/React.createElement(StyledFormItemContent, null, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: placeholder,
      value: value,
      onChange: this.handleChange
    })));
  }

}

_defineProperty(TextItem, "propTypes", {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
});

_defineProperty(TextItem, "defaultProps", {
  value: '',
  onChange: () => {}
});