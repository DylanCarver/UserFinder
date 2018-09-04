import styled from 'styled-components';
import SearchCard from 'components/searchCard';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const App = () => (
  <Wrapper>
    <SearchCard />
  </Wrapper>
);

export default App;
