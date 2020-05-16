import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledFormItem from '../../StyledComponents/StyledFormItem';

export default class CheckboxItem extends Component {

  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: false,
    onChange: () => { }
  };

  handleChange = (event) => {
    const { onChange } = this.props;

    onChange(event, event.target.checked);
  };

  render() {
    const { name, value } = this.props;

    return (
      <StyledFormItem gridArea={name}>
        <input type="checkbox" checked={value} onChange={this.handleChange} />
      </StyledFormItem>
    );
  }

}