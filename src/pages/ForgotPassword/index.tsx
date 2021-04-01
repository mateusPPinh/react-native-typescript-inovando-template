import React from 'react';

import { Container, Logo } from './styles';
import ForgotPasswordForm from '../../forms/ForgotPasswordForm';

import inovandoLogo from '../../assets/inovando-logo-full.png';

const ForgotPassword: React.FC = () => (
  <Container>
    <Logo source={inovandoLogo} />

    <ForgotPasswordForm />
  </Container>
);

export default ForgotPassword;
