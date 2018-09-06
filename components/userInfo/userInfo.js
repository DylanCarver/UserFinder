import styled from 'styled-components';

import Img from './img';

const Wrapper = styled.div`
  display: flex;
  min-height: 200px;
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

const Info = styled.div`
  flex: 1;
`;

function numberOf(value, singular, plural) {
  if (value === 1) {
    return `${value} ${singular}`;
  }
  return `${value} ${plural}`;
}

const UserInfo = props => {
  const { user } = props;

  return (
    <Wrapper>
      <Row>
        <Img src={user.avatar_url} />
        <Info>
          <Title>{user.name}</Title>
          <Id>{user.id}</Id>
        </Info>
      </Row>
      <BottomRow>
        <div>{numberOf(user.public_repos, 'Public repo', 'Public repos')}</div>
        <div>{numberOf(user.followers, 'follower', 'followers')}</div>
        <div>{user.following} Following</div>
      </BottomRow>
    </Wrapper>
  );
};

export default UserInfo;
