import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f4f7f5;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 120px;
  resize-mode: contain;
`;

export const Form = styled.View`
  flex-direction: column;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#f3f3f3',
})`
  height: 55px;
  background: #575a5e;
  margin-top: 25px;
  width: 300px;
  border-radius: 4px;
  padding: 5px 15px;
`;

export const ForgotPasswordButtton = styled.TouchableOpacity`
  margin-left: auto;
  margin-top: 4px;
  color: #333;
`;

export const ForgotPasswordButtonText = styled.Text``;

export const LoginButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: #7289da;
  height: 55px;
  border-radius: 4px;
`;

export const LoginButtonText = styled.Text`
  color: #ffff;
`;
