import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  padding: 25px;
  transition: 0.3s;
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 5px 10px 35px 0 rgba(0, 0, 0, 0.05);
  }
`;

const Card = props => <StyledCard {...props} />;

export default Card;
