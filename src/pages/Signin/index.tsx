import React from 'react';

import {
  Container,
  FormContainer,
  Logo,
  Form,
  Input,
  ForgotPasswordButtton,
  ForgotPasswordButtonText,
  LoginButton,
  LoginButtonText,
} from './styles';
import inovandoLogo from '../../assets/inovando-logo-full.png';

const Signin: React.FC = () => (
  <Container>
    <FormContainer>
      <Logo source={inovandoLogo} />

      <Form>
        <Input placeholder="Seu melhor e-mail" />
        <Input placeholder="Seu cpf" />
        <Input placeholder="Sua senha segura" />

        <ForgotPasswordButtton>
          <ForgotPasswordButtonText>
            Esqueci minha senha
          </ForgotPasswordButtonText>
        </ForgotPasswordButtton>

        <LoginButton>
          <LoginButtonText>Logar</LoginButtonText>
        </LoginButton>
      </Form>
    </FormContainer>
  </Container>
);

export default Signin;
