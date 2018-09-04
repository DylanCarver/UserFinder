import React from 'react';
import Input from 'components/input';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 12px;
  margin-bottom: 40px;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 250px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

class Form extends React.Component {
  render() {
    const { onSubmit, value, onChange, valid, reset } = this.props;

    return (
      <FormWrapper>
        {valid === false ? (
          <Text>User not found. Please try again</Text>
        ) : (
          <Text>Search for a GitHub user</Text>
        )}

        <form onSubmit={onSubmit}>
          <Input
            invalid={valid === false}
            value={value}
            onChange={onChange}
            placeholder="GitHub username"
          />
        </form>
      </FormWrapper>
    );
  }
}

export default Form;
