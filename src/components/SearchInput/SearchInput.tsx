import {
  ClearIconContainer,
  Container,
  IconContainer,
  TextInput
} from './styles';

import Icon from '../Icon/Icon';
import React from 'react';

const SearchInput = ({
  text,
  changeText,
  placeholder,
  handleSearch,
 }) => {
   const clearText = () => {changeText('')}

  return (
    <Container>
      <IconContainer>
        <Icon name="magnify" color="#FFF" />
      </IconContainer>
      <TextInput
        defaultValue={text}
        onChangeText={changeText}
        placeholder={placeholder}
        onSubmitEditing={handleSearch}
        placeholderTextColor="#AAA"
      />
      <ClearIconContainer onPress={clearText}>
        <Icon name="close" color="#FFF" />
      </ClearIconContainer>
    </Container>
)};

export default SearchInput;
