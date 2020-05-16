import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './items';

import { getGridTemplateAreas } from '../../utils/grid';

import StyledForm from '../StyledComponents/StyledForm';
export default class SchemaForm extends Component {

  static propTypes = {
    path: PropTypes.array,
    items: PropTypes.array,
    data: PropTypes.object,
    gridTemplateAreas: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
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
    const { items, gridTemplateAreas, gridTemplateColumns } = this.props;
    const computedGridTemplateAreas = gridTemplateAreas ? gridTemplateAreas : getGridTemplateAreas(this.props);

    return <StyledForm gridTemplateAreas={computedGridTemplateAreas} gridTemplateColumns={gridTemplateColumns}>
      {this.renderItems(items)}
    </StyledForm>;
  }

}