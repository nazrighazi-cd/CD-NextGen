import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <View>
      <Text>This is button from the lib comp!</Text>
    </View>
  );
}

export default Button;
