import React, { useState } from 'react';
import FormView from '../../styles/FormView';
import ForgotPasswordForm from '../../forms/ForgotPasswordForm';
import Typography from '../../components/Typography';

import { Container } from './styles';

const sleep = (ms: any): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

const ForgotPassword: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  async function onSubmit(values: any): Promise<void> {
    await sleep(1000);
    setEmail(values.email);
    setSuccess(true);
  }

  if (success) {
    return (
      <Container style={{ flex: 1, justifyContent: 'center' }}>
        <Typography center bold>
          {email}
        </Typography>
        <Typography center>E-mail enviado para alteração de senha!</Typography>
      </Container>
    );
  }

  return (
    <FormView>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </FormView>
  );
};

export default ForgotPassword;
