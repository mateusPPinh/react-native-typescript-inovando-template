import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container,
  Logo,
  FormContainer,
  ForgotPasswordButtton,
  ForgotPasswordButtonText,
} from './styles';
import inovandoLogo from '../../assets/inovando-logo-full.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSign = useCallback((data: unknown) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Logo source={inovandoLogo} />

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSign}>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
            />

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>

            <ForgotPasswordButtton>
              <ForgotPasswordButtonText>
                Esqueci minha senha
              </ForgotPasswordButtonText>
            </ForgotPasswordButtton>
          </Form>
        </FormContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Signin;
