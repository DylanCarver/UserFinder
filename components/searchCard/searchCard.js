import React from 'react';
import Card from 'components/card';
import fetch from 'isomorphic-fetch';
import UserInfo from 'components/userInfo';

import Form from './form';
import BackButton from './backButton';

class SearchCard extends React.Component {
  state = {
    user: null,
    username: '',
    validUsername: null,
  };

  updateInput = e => {
    this.setState({ username: e.target.value });
  };

  validateUser = user => {
    if (user.message === 'Not Found') {
      this.setState({ username: '' });
      this.setState({ validUsername: false });
    } else {
      this.setState({ user });
      this.setState({ validUsername: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(user => this.validateUser(user))
      .catch(err => console.error(err));
  };

  resetUser = () => {
    this.setState({
      user: null,
      username: '',
      validUsername: null,
    });
  };

  render() {
    const { user, validUsername, username } = this.state;

    return (
      <>
        <style jsx global>{`
          body {
            margin: 0;
            font-family: rubik;
          }
        `}</style>
        <Card>
          {user && validUsername ? (
            <UserInfo user={user} />
          ) : (
            <Form
              valid={validUsername}
              onSubmit={this.handleSubmit}
              value={username}
              onChange={this.updateInput}
            />
          )}
        </Card>
        <BackButton show={user && validUsername} onClick={this.resetUser} />
      </>
    );
  }
}

export default SearchCard;
