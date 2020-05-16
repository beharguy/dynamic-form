import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as types from '../consts/types';
import { getGridTemplateAreas } from '../../../utils/grid';

import TextItem from './TextItem';
import CheckboxItem from './CheckboxItem';
import ObjectItem from './ObjectItem';

import StyledFormItem from '../../StyledComponents/StyledFormItem';

export class FormItem extends Component {

  static propTypes = {
    item: PropTypes.object,
    value: PropTypes.any,
    path: PropTypes.array,
    onChange: PropTypes.func.isRequired
  };

  handleChange = (path) => (event, newValue) => {
    const { onChange } = this.props;

    console.log(path);

    onChange(event, path, newValue);
  };

  renderItem = () => {
    const { item, value, path, onChange } = this.props;

    switch (item.type) {
      case types.TEXT:
        return <TextItem {...item} value={value} onChange={this.handleChange([...path, item.name])} />;

      case types.BOOLEAN:
        return <CheckboxItem {...item} value={value} onChange={this.handleChange([...path, item.name])} />;

      case types.OBJECT:
        return <ObjectItem {...item} value={value || {}} path={[...path, item.name]} onChange={onChange} />;

      default:
        return null;
    }
  };

  render() {
    return this.renderItem();
  }

}