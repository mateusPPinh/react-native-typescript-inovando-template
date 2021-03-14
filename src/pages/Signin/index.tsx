import React from 'react';

import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  Container,
  Logo,
  Form,
  ForgotPasswordButtton,
  ForgotPasswordButtonText,
} from './styles';
import inovandoLogo from '../../assets/inovando-logo-full.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
  >
    <Container>
      <Logo source={inovandoLogo} />

      <Form>
        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input
          name="password"
          icon="lock"
          placeholder="Senha"
          secureTextEntry
        />

        <Button>Entrar</Button>

        <ForgotPasswordButtton>
          <ForgotPasswordButtonText>
            Esqueci minha senha
          </ForgotPasswordButtonText>
        </ForgotPasswordButtton>
      </Form>
    </Container>
  </KeyboardAvoidingView>
);

export default Signin;
