import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Text } from './styles';

const Button = ({
  children,
  loading = false,
  stretch = false,
  outline = false,
  ...rest
}): any => (
  <Container loading={loading} stretch={stretch} outline={outline} {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : (
      <Text outline={outline}>{children}</Text>
    )}
  </Container>
);

export default Button;
