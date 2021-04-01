import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Container, Input, ButtonLogin, ButtonText } from './styles';

const ForgotPasswordForm: React.FC = ({ onSubmit = () => {} }) => {
  const navigation = useNavigation();

  const handleSendMail = useCallback(() => {
    Alert.alert(
      'E-mail Enviado!',
      'Um e-mail foi enviado para você recuperar sua senha',
    );
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <Formik initialValues={{ email: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Container>
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            onSubmitEditing={handleSubmit}
            value={values.email}
            placeholder="Seu E-mail"
          />

          <ButtonLogin onPress={handleSendMail}>
            <ButtonText>Enviar E-mail</ButtonText>
          </ButtonLogin>
        </Container>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
