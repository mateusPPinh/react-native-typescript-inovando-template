import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo, ForgotPasswordButton, ForgotText } from './styles';
import SignInForm from '../../forms/SignIn';

import inovandoLogo from '../../assets/inovando-logo-full.png';

const Signin: React.FC = () => {
  const navigation = useNavigation();

  const handleForgotPassword = useCallback(() => {
    navigation.navigate('Forgot');
  }, [navigation]);

  return (
    <Container>
      <Logo source={inovandoLogo} />

      <SignInForm />
      <ForgotPasswordButton onPress={handleForgotPassword}>
        <ForgotText>Esqueci minha senha</ForgotText>
      </ForgotPasswordButton>
    </Container>
  );
};

export default Signin;
