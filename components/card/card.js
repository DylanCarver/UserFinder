import Box from 'components/box';
import styled from 'styled-components';

const Card = styled(Box).attrs({
  p: '25px',
  display: 'flex',
  borderRadius: '8px',
  flexDirection: 'column',
})`
  transition: 0.3s;
  box-shadow: 2px 2px 7px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 5px 10px 35px 0 rgba(0, 0, 0, 0.05);
  }
`;

export default Card;
