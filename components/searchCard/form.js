import React from 'react';
import Input from 'components/input';
import styled from 'styled-components';
import FadeIn from 'components/fadeIn';

const Text = styled.p`
  font-size: 12px;
  margin-bottom: 40px;
`;

const FormWrapper = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

class Form extends React.Component {
  componentDidMount = () => {
    this.inputField.focus();
  };

  render() {
    const { onSubmit, value, onChange, valid, reset } = this.props;

    return (
      <FormWrapper>
        <FadeIn>
          {valid === false ? (
            <Text>User not found. Please try again</Text>
          ) : (
            <Text>Search for a GitHub user</Text>
          )}
        </FadeIn>
        <FadeIn delay={100}>
          <form onSubmit={onSubmit}>
            <Input
              innerRef={input => {
                this.inputField = input;
              }}
              invalid={valid === false}
              value={value}
              onChange={onChange}
              placeholder="GitHub username"
            />
          </form>
        </FadeIn>
      </FormWrapper>
    );
  }
}

export default Form;
