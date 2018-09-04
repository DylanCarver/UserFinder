import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 200px;
  border: none;
  outline: none;
  font-size: 12px;
  transition: 0.3s;
  padding: 10px 5px;
  border-bottom: 1px solid #eee;

  ::placeholder {
    color: #000;
    opacity: 0.3;
  }

  &:focus {
    border-bottom: 1px solid #6eadcf;
    ${props =>
      props.invalid &&
      `
    border-bottom: 1px solid red;
    `};
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
