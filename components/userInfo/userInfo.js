import styled from 'styled-components';

import Img from './img';

const Wrapper = styled.div`
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 0px;
`;
const Id = styled.p`
  color: #8b8b8b;
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 1.3px;
`;

const UserInfo = props => {
  const { user } = props;

  return (
    <Wrapper>
      <Row>
        <Img src={user.avatar_url} />
        <div>
          <Title>{user.name}</Title>
          <Id>{user.id}</Id>
        </div>
      </Row>
      <BottomRow>
        <div>{user.public_repos} Public repos</div>
        <div>{user.followers} Followers</div>
        <div>{user.following} Following</div>
      </BottomRow>
    </Wrapper>
  );
};

export default UserInfo;
