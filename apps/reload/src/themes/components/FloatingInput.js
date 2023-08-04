import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon } from 'native-base';

const FloatingInput = ({ placeholder, value, label, InputRightElement }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputText, setInputText] = useState('');
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
        value={inputText}
        onChangeText={(username) => setInputText(username)}
        _focus={{
          paddingTop: '24px',
          paddingBottom: '12px',
          _android: {
            paddingTop: '17px',
            paddingBottom: '3px',
          },
        }}
        InputRightElement={
          InputRightElement && (
            <Icon as={InputRightElement} mr="2" color="gray.500" />
          )
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
