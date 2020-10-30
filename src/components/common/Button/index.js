import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ testID, buttonStyle, contentStyle, children, disabled, pressHandlerParams, onPress }) => {
  return (
    <TouchableOpacity
      testID={testID}
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

Button.defaultProps = {
  buttonStyle: {},
  contentStyle: {},
  pressHandlerParams: {},
  onPress: () => null,
};

export default Button;
