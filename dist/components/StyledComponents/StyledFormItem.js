import React from 'react';
import styled, { css } from 'styled-components';
const StyledFormItemDiv = styled.div`
  display: grid;
  align-items: center;

  ${props => props.gridArea && css`
    grid-area: ${props.gridArea};
  `}

  ${props => props.inline ? css`
    grid-template-areas: "content label";
    grid-template-columns: auto 1fr;
  ` : css`
    grid-template-areas: 
      "label"
      "content";
  `} 
`;
const StyledFormItemLabel = styled.label`
  display: grid;
  align-items: center;

  ${props => props.gridArea && css`
    grid-area: ${props.gridArea};
  `}

  ${props => props.inline ? css`
    grid-template-areas: "content label";
    grid-template-columns: auto 1fr;
  ` : css`
    grid-template-areas: 
      "label"
      "content";
  `} 
`;
export default function StyledFormItem(props) {
  return props.inline ? /*#__PURE__*/React.createElement(StyledFormItemLabel, props) : /*#__PURE__*/React.createElement(StyledFormItemDiv, props);
}
;