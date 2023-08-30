import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import {Platform, TextInput, View} from 'react-native';
import {Keyboard, KeyboardEvent} from 'react-native';

import {
  Box,
  HStack,
  Input,
  Button,
  Modal,
  Text,
  Avatar,
  VStack,
  KeyboardAvoidingView,
} from 'native-base';
import {Lock01} from '../../../icons/src';
import FloatingInput from '../../../themes/components/FloatingInput';


type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: () => void;
};

const NUMBER_OF_INPUTS = 6;

export default function CPPInput({isOpen, onClose, onPress}: props) {
  //   const {otpCodeChanged} = props;
  const bottomInset = useKeyboard();


  return (
    <Modal
      avoidKeyboard
      bottom={Platform.OS === 'android' ? bottomInset ?? null : null}
      onClose={() => {
        onClose(false);
      }}
      isOpen={isOpen}
      accessibilityLabel="Default Modal">
      <Modal.Content>
        <Modal.CloseButton />
        <Avatar >
          <Lock01  />
        </Avatar>

        <VStack space={1} pb={5}>

        <Text variant="h6" bold >CPP Confirmation</Text>
          <Text>Please authenticate your orders.</Text>
        </VStack>
        <VStack space={4}>
          
          <FloatingInput changeText={text => {}} label="CCP Code" placeholder="CCP Code" />
          <FloatingInput InputRightElement={<Lock01/>} changeText={text => {}} type="number" label="Password" placeholder="Password" />

          <Button
            onPress={() => {
              console.log('hello world');
            }}
            mr="1"
            mb="2">
            Authorise
          </Button>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}

export function useKeyboard() {
  const [isKeyboardVisible, setKeyboardVisible] = useState<any>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardVisible(e.endCoordinates.height / 2);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(null);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
}
