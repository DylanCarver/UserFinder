import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  outline: none;
  color: #6eadcf;
  background: none;
  margin-top: 35px;
  transition: opacity 0.3s;
  text-decoration: underline;
  opacity: ${props => (props.show ? 1 : 0)};
`;

const BackButton = props => (
  <StyledButton {...props}>Search for someone else</StyledButton>
);

export default BackButton;
