
import React from 'react';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  display:inline-block;
  border:none;
  background-color:#6D757D;
  color:#fff;
  padding:0 1rem;

  ${props =>
    props.size === 'large' && css`
      height: 3rem;
      font-size:1.25rem;
      // font-size:1.8rem;
      border-radius:4px;
    `
  }

  ${props =>
    props.size === 'medium' && css`
      height: 2.25rem;
      font-size:1rem;
      // font-size:1.4rem;
      border-radius:4px;
    `
  }

  ${props =>
    props.size === 'small' && css`
      height:1.75rem;
      font-size:0.875rem;
      // font-size:1.2rem;
      border-radius:4px;
    `
  }

  }
`;


function Buttons({ children, size }) {
  return (
    <StyledButton size={size}>{children}</StyledButton>
  )
}

export default Buttons;