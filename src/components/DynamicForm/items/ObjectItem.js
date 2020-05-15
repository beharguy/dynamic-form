import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './index';

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
    const { items } = this.props;

    return items.map(this.renderItem);
  }

}