import styled, { css } from 'styled-components';
export default styled.div`
  display: grid;

  grid-template-rows: auto;
  grid-area: content;

  ${props => props.gridTemplateColumns ? css`
    grid-template-columns: ${props.gridTemplateColumns};
  ` : css`
    grid-template-columns: 1fr;
  `}

  ${props => props.gridTemplateAreas && css`
    grid-template-areas: ${props.gridTemplateAreas};
  `}
`;