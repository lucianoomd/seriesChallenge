import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const Icon = ({ name, size = 20, color = '#FFF' }) => (
  <MaterialCommunityIcon
    style={{
      color: color,
      fontSize: size
    }}
    name={name}
  />
);

export default Icon;
