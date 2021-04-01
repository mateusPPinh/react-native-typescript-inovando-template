import React from 'react';
import { Container, ErrorText } from '../TextField/styles';
import { Input } from './styles';

// Accept all props from React Native Masked Text
// https://github.com/benhurott/react-native-masked-text

const MaskedField = (props: any): any => {
  const {
    field,
    form,
    innerRef,
    onChange: handleChange = () => {},
    editable = true,
    ...rest
  } = props;

  const { onChange, onBlur, value, name } = field;
  const { touched, errors } = form;

  return (
    <Container>
      <Input
        testID={name}
        ref={innerRef}
        onChangeText={(_maskedText: any, rawText: any) => {
          handleChange(rawText);
          onChange(name)(rawText);
        }}
        onBlur={onBlur(name)}
        value={value}
        placeholderTextColor="#808080"
        autoCapitalize="none"
        autoCorrect={false}
        editable={editable}
        includeRawValueInChangeText
        {...rest}
      />
      {touched[field.name] && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
    </Container>
  );
};

export default MaskedField;
