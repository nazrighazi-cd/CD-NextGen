import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon } from 'native-base';

const FloatingInput = ({
  placeholder,
  value,
  label,
  InputLeftElement,
  InputRightElement,
  changeText,
  type = 'default',
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={type}
        keyboardType={type == 'number' ? 'number-pad' : type}
        value={value}
        onChangeText={(username) => changeText(username)}
        _focus={{
          paddingTop: '24px',
          paddingBottom: '12px',
          _android: {
            paddingTop: '17px',
            paddingBottom: '3px',
          },
        }}
        InputLeftElement={
          InputLeftElement ? (
            <Icon as={InputLeftElement} mr="3" color="gray.500" />
          ) : null
        }
        InputRightElement={
          InputRightElement ? (
            <Icon as={InputRightElement} mr="2" color="gray.500" />
          ) : null
        }
      ></Input>
      {isInputFocused ? (
        <Text variant="label" style={styles.floatingLabel}>
          {label}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  floatingLabel: {
    color: '#344054',
    marginTop: -47,
    marginLeft: 13,
  },
});

export default FloatingInput;
