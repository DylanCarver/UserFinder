import FadeIn from 'components/fadeIn';
import { Row, Column } from 'components/grid';

import Id from './id';
import Img from './img';
import Title from './title';

function numberOf(value, singular, plural) {
  if (value === 1) {
    return `${value} ${singular}`;
  }
  return `${value} ${plural}`;
}

const UserInfo = props => {
  const { user } = props;

  return (
    <Column minHeight="200px" justifyContent="space-between">
      <Row>
        <FadeIn>
          <Img src={user.avatar_url} />
        </FadeIn>
        <Column>
          <FadeIn delay={50}>
            <Title>{user.name}</Title>
          </FadeIn>
          <FadeIn delay={100}>
            <Id>{user.id}</Id>
          </FadeIn>
        </Column>
      </Row>
      <FadeIn delay={150}>
        <Row justifyContent="space-between">
          <div>
            {numberOf(user.public_repos, 'Public repo', 'Public repos')}
          </div>
          <div>{numberOf(user.followers, 'follower', 'followers')}</div>
          <div>{user.following} Following</div>
        </Row>
      </FadeIn>
    </Column>
  );
};

export default UserInfo;
