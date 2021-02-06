import { ButtonText, Container, DisabledContainer } from './styles';

import React from 'react';

const Button = ({ title, disabled = false, onPress }) => {
  return disabled ? (
    <DisabledContainer disabled>
      <ButtonText>{title}</ButtonText>
    </DisabledContainer>
  ) : (
    <Container onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </Container>
  )
};

export default Button;
