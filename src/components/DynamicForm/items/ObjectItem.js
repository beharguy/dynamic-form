import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './index';

import { getGridTemplateAreas } from '../../../utils/grid';

import StyledFormItem from '../../StyledComponents/StyledFormItem';
import StyledFormItemLabel from '../../StyledComponents/StyledFormItemLabel';
import StyledFormItemContent from '../../StyledComponents/StyledFormItemContent';

export default class ObjectItem extends Component {

  static propTypes = {
    path: PropTypes.array,
    value: PropTypes.any,
    items: PropTypes.array,
    onChange: PropTypes.func
  };

  renderItem = (item, itemIndex) => {
    const { path, value, onChange } = this.props;

    return <FormItem key={itemIndex}
      path={path}
      item={item}
      value={value[item.name]}
      onChange={onChange}
    />;
  };

  render() {
    const { name, label, gridTemplateColumns, gridTemplateAreas, items } = this.props;

    return (
      <StyledFormItem gridArea={name}>
        <StyledFormItemLabel>
          {label}
        </StyledFormItemLabel>
        <StyledFormItemContent
          gridTemplateColumns={gridTemplateColumns}
          gridTemplateAreas={getGridTemplateAreas({ gridTemplateAreas, items })}
        >
          {items.map(this.renderItem)}
        </StyledFormItemContent>
      </StyledFormItem>
    );
  }

}