import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Field } from 'formik';

export const Container = styled.View`
  flex-direction: column;
`;

export const Input = styled(Field).attrs({
  placeholderTextColor: '#333',
})`
  background: #c9cad9;
  height: 55px;
  width: 300px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 16px;
`;

export const ButtonLogin = styled(RectButton)`
  background: #212021;
  height: 55px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;
