function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './items';
import { getGridTemplateAreas } from '../../utils/grid';
import StyledForm from '../StyledComponents/StyledForm';
export default class SchemaForm extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItem", (item, itemIndex) => {
      const {
        path,
        data,
        onChange
      } = this.props;
      return /*#__PURE__*/React.createElement(FormItem, {
        key: itemIndex,
        path: path,
        item: item,
        value: data[item.name],
        onChange: onChange
      });
    });

    _defineProperty(this, "renderItems", items => {
      return items.map(this.renderItem);
    });
  }

  render() {
    const {
      items,
      gridTemplateAreas,
      gridTemplateColumns
    } = this.props;
    const computedGridTemplateAreas = gridTemplateAreas ? gridTemplateAreas : getGridTemplateAreas(this.props);
    return /*#__PURE__*/React.createElement(StyledForm, {
      gridTemplateAreas: computedGridTemplateAreas,
      gridTemplateColumns: gridTemplateColumns
    }, this.renderItems(items));
  }

}

_defineProperty(SchemaForm, "propTypes", {
  path: PropTypes.array,
  items: PropTypes.array,
  data: PropTypes.object,
  gridTemplateAreas: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  onChange: PropTypes.func
});

_defineProperty(SchemaForm, "defaultProps", {
  path: [],
  items: [],
  data: {},
  onChange: () => {}
});