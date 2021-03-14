import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f4f7f5;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 120px;
  resize-mode: contain;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  flex-direction: column;
`;

export const ForgotPasswordButtton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 4px;
`;

export const ForgotPasswordButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 13px;
  color: #313131;
`;
