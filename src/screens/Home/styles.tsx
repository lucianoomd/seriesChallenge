import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3F3F3F;
`;

export const FlatList = styled.FlatList``;

export const SerieItemContainer = styled.TouchableOpacity`
  padding: 15px 20px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #FFF;
  flex: 1;
  margin-left: 10px;
`;

export const FavoriteContainer = styled.TouchableOpacity`
  padding: 6px;
`;

export const ItemSeparator = styled.View`
  height: 2px;
  background-color: #FFF;
`;
