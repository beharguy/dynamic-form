import styled, { css } from 'styled-components'

export default styled.div`
  display: grid;
  
  ${props => props.gridArea && css`
    grid-area: ${props.gridArea};
  `}

  grid-template-rows: auto;

  ${props => props.gridTemplateColumns ? css`
    grid-template-columns: ${props.gridTemplateColumns};
  ` : css`
    grid-template-columns: 1fr;
  `}

  ${props => props.gridTemplateAreas && css`
    grid-template-areas: ${props.gridTemplateAreas};
  `}
`;