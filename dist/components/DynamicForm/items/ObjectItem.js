function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormItem } from './index';
import { getGridTemplateAreas } from '../../../utils/grid';
import StyledFormItem from '../../StyledComponents/StyledFormItem';
import StyledFormItemLabel from '../../StyledComponents/StyledFormItemLabel';
import StyledFormItemContent from '../../StyledComponents/StyledFormItemContent';
export default class ObjectItem extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItem", (item, itemIndex) => {
      const {
        path,
        value,
        onChange
      } = this.props;
      return /*#__PURE__*/React.createElement(FormItem, {
        key: itemIndex,
        path: path,
        item: item,
        value: value[item.name],
        onChange: onChange
      });
    });
  }

  render() {
    const {
      name,
      label,
      gridTemplateColumns,
      gridTemplateAreas,
      items
    } = this.props;
    return /*#__PURE__*/React.createElement(StyledFormItem, {
      gridArea: name
    }, /*#__PURE__*/React.createElement(StyledFormItemLabel, null, label), /*#__PURE__*/React.createElement(StyledFormItemContent, {
      gridTemplateColumns: gridTemplateColumns,
      gridTemplateAreas: getGridTemplateAreas({
        gridTemplateAreas,
        items
      })
    }, items.map(this.renderItem)));
  }

}

_defineProperty(ObjectItem, "propTypes", {
  path: PropTypes.array,
  value: PropTypes.any,
  items: PropTypes.array,
  onChange: PropTypes.func
});