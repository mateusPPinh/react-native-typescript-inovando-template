import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 320px;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
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
