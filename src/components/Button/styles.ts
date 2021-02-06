import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #FFF;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const DisabledContainer = styled(RectButton)`
  width: 100%;
  height: 50px;
  background: #aaa;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #3F3F3F;
  text-transform: uppercase;
  font-size: 14px;
`;
