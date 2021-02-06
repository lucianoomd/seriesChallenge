import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #3F3F3F;
  border-bottom-width: 1px;
  border-bottom-color: #FFF;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;

export const IconContainer = styled.View`
  margin-right: 4px;
`;

export const ClearIconContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size: 14px;
`;
