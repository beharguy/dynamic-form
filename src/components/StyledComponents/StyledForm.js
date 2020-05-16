import styled, { css } from 'styled-components'

export default styled.div`
  display: grid;
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 10px;

  ${props => props.gridTemplateColumns ? css`
    grid-template-columns: ${props.gridTemplateColumns};
  ` : css`
    grid-template-columns: 1fr;
  `}

  ${props => props.gridTemplateAreas && css`
    grid-template-areas: ${props.gridTemplateAreas};
  `}
`;