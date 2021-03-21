import React, { useCallback, useRef } from 'react';
import { Alert, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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
import getValidationErrors from '../../utils/getValidationErrors';

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSign = useCallback(async (data: unknown) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required().email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória').min(6),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      // eslint-disable-next-line no-console
      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro ao tentar logar',
        'Cheque suas credencias e tente novamente',
      );
    }
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
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}
            />
            <Input
              ref={passwordInputRef}
              name="password"
              icon="lock"
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
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
