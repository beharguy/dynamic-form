import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledFormItem from '../../StyledComponents/StyledFormItem';
import StyledFormItemLabel from '../../StyledComponents/StyledFormItemLabel';
import StyledFormItemContent from '../../StyledComponents/StyledFormItemContent';

export default class CheckboxItem extends Component {

  static propTypes = {
    label: PropTypes.string,
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
    const { name, label, value } = this.props;

    return (
      <StyledFormItem gridArea={name} inline>
        <StyledFormItemLabel>
          {label}
        </StyledFormItemLabel>
        <StyledFormItemContent>
          <input type="checkbox" checked={value} onChange={this.handleChange} />
        </StyledFormItemContent>
      </StyledFormItem>
    );
  }

}