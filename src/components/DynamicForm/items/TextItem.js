import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    onChange: () => { }
  };

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange(event, event.target.value);
  };

  render() {
    const {  value, placeholder } = this.props;

    return (
      <input type="text" placeholder={placeholder} value={value} onChange={this.handleChange} />
    );
  }

}