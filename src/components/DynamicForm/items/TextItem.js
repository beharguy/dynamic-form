import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledFormItem from '../../StyledComponents/StyledFormItem';

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
    const { name, value, placeholder } = this.props;

    return (
      <StyledFormItem gridArea={name}>
        <input type="text" placeholder={placeholder} value={value} onChange={this.handleChange} />
      </StyledFormItem>
    );
  }

}