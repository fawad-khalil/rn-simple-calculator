import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ buttonStyle, contentStyle, children, disabled, pressHandlerParams, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...buttonStyle,
      }}
      disabled={disabled}
      onPress={() => onPress({ ...pressHandlerParams })}
    >
      <Text style={{ ...contentStyle }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
