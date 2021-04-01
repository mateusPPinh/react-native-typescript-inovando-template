import React from 'react';
import { Formik } from 'formik';

import { Container, Input, ButtonLogin, ButtonText } from './styles';
import schema from './schema';

const SignInForm: React.FC = () => (
  // const password = useRef(null);
  // const cpf = useRef(null);

  <Formik
    initialValues={{ nome: '', email: '' }}
    onSubmit={values => console.log(values)}
    validationSchema={schema}
  >
    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
      <Container>
        <Input
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="Seu E-mail"
          returnKeyType="next"
          keyboardType="email-address"
        />

        <Input
          onChangeText={handleChange('nome')}
          onBlur={handleBlur('nome')}
          value={values.nome}
          placeholder="Seu Nome"
        />

        <ButtonLogin onPress={handleSubmit} loading={isSubmitting}>
          <ButtonText>Login</ButtonText>
        </ButtonLogin>
      </Container>
    )}
  </Formik>
);
export default SignInForm;
