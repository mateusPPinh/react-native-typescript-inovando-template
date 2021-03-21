import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 320px;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #233129;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #21a179;
    `}
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#e8e8e8',
})`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'Roboto_Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
