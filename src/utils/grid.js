const isUndefined = o => typeof o === 'undefined';

export const getGridTemplateAreas = ({ gridTemplateAreas, items }) => {
  return isUndefined(gridTemplateAreas) ? 
  `"${items.map(item => item.name).join('" "')}"`
  : gridTemplateAreas;
};