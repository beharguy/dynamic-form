import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledFormItem from '../../StyledComponents/StyledFormItem';
import StyledFormItemLabel from '../../StyledComponents/StyledFormItemLabel';
import StyledFormItemContent from '../../StyledComponents/StyledFormItemContent';

export default class TextItem extends Component {

  static propTypes = {
    label: PropTypes.string,
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
    const { name, label, value, placeholder } = this.props;

    return (
      <StyledFormItem gridArea={name}>
        <StyledFormItemLabel>
          {label}
        </StyledFormItemLabel>
        <StyledFormItemContent>
          <input type="text" placeholder={placeholder} value={value} onChange={this.handleChange} />
        </StyledFormItemContent>
      </StyledFormItem>
    );
  }

}