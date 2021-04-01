import React from 'react';
import { Image } from 'react-native';
import LoginForm from '../../forms/SignIn';
import FormView from '../../styles/FormView';

import { Container } from './styles';

const Login = ({ navigation }): any => {
  function handleSignIn(values: any): void {
    console.log(values);
  }

  return (
    <FormView>
      <Container>
        <Image
          // eslint-disable-next-line global-require
          source={require('../../assets/inovando-logo-full.png')}
          style={{ width: 150, height: 120 }}
          resizeMode="contain"
        />
      </Container>
      <LoginForm navigation={navigation} onSubmit={handleSignIn} />
    </FormView>
  );
};

export default Login;
