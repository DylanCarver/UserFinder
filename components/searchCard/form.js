import React from 'react';
import Box from 'components/box';
import Input from 'components/input';
import styled from 'styled-components';
import FadeIn from 'components/fadeIn';

const Text = styled.p`
  font-size: 12px;
`;

const FormWrapper = props => (
  <Box
    height={200}
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    {...props}
  />
);

class Form extends React.Component {
  componentDidMount = () => {
    this.inputField.focus();
  };

  render() {
    const { onSubmit, value, onChange, valid } = this.props;

    return (
      <FormWrapper>
        <FadeIn>
          {valid === false ? (
            <Text>User not found. Please try again</Text>
          ) : (
            <Text>Search for a GitHub user</Text>
          )}
        </FadeIn>
        <Box my={20} />
        <FadeIn delay={100}>
          <form onSubmit={onSubmit}>
            <Input
              value={value}
              onChange={onChange}
              invalid={valid === false}
              placeholder="GitHub username"
              innerRef={input => {
                this.inputField = input;
              }}
            />
          </form>
        </FadeIn>
      </FormWrapper>
    );
  }
}

export default Form;
