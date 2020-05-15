import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './items';

export default class SchemaForm extends Component {

  static propTypes = {
    path: PropTypes.array,
    items: PropTypes.array,
    data: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    path: [],
    items: [],
    data: {},
    onChange: () => { }
  };

  renderItem = (item, itemIndex) => {
    const { path, data, onChange } = this.props;

    return <FormItem key={itemIndex}
      path={path}
      item={item}
      value={data[item.name]}
      onChange={onChange}
    />;
  };

  renderItems = (items) => {
    return items.map(this.renderItem);
  };

  render() {
    const { items } = this.props;

    return <div>
      {this.renderItems(items)}
    </div>;
  }

}