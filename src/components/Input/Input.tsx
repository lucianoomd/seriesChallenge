import { Container, TextInput } from './styles';

import React from 'react';

const Input = ({
  text,
  changeText,
  isPassword,
  placeholder,
  maxLength,
  keyboardType = 'default',
  onSubmit = () => {},
}) => (
  <Container>
    <TextInput
      defaultValue={text}
      onChangeText={changeText}
      placeholderTextColor="#afafaf"
      placeholder={placeholder}
      autoCorrect={false}
      secureTextEntry={isPassword}
      maxLength={maxLength}
      key={JSON.stringify(changeText)}
      keyboardType={keyboardType}
      onSubmitEditing={onSubmit}
    />
  </Container>
);

export default Input;
