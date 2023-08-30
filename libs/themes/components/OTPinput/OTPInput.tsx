import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import {Platform, TextInput} from 'react-native';
import {Keyboard} from 'react-native';

import {useTimeout} from './useTimeout';
import {
  Box,
  HStack,
  Input,
  Button,
  Modal,
  Text,
  Avatar,
  VStack,
} from 'native-base';
import Clipboard from '@react-native-clipboard/clipboard';
import {Lock01} from '../../../icons/src';

export interface IOTPInputProps {
  otpCodeChanged: (otpCode: string) => void;
}

type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: () => void;
};

const NUMBER_OF_INPUTS = 6;

export default function OTPInput({isOpen, onClose, onPress}: props) {
  const bottomInset = useKeyboard();
  const isFocused = useIsFocused();
  const [values, setValues] = React.useState<string[]>(
    Array(NUMBER_OF_INPUTS).fill(''),
  );
  const itemsRef = useRef<Array<TextInput | null>>([]);
  const [isError, setIsError] = useState(false)
  const applyOTPCodeToInputs = (code: string) => {
    const codeArray = code.split('');
    const lastInput = itemsRef.current[itemsRef.current.length - 1];
    if (lastInput) {
      lastInput.focus();
    }
    setValues(codeArray);
  };


  useTimeout(
    () => {
      // focus on the first input
      const firstInput = itemsRef.current[0];
      if (firstInput) {
        firstInput.focus();
      }
    },
    isFocused && isOpen ? 100 : null,
  );

  return (
    <Modal
      avoidKeyboard
      bottom={Platform.OS === 'android' ? bottomInset ?? null : null}
      onClose={() => {
        const firstInput = itemsRef.current[0];
        if (firstInput) {
          firstInput.focus();
        }
        setValues(Array(NUMBER_OF_INPUTS).fill(''));
        onClose(false);
      }}
      isOpen={isOpen}
      accessibilityLabel="Default Modal">
      <Modal.Content>
        <Modal.CloseButton />
        <Avatar mb={4}>
          <Lock01 />
        </Avatar>

        <VStack space={5}>
          <Text bold>Please provide your Dealer PIN</Text>
          <Box>
          <Text pb={1} color="gray.500" >Dealer Pin Code</Text>
          <HStack space={2} justifyContent={'space-between'}>
            {Array.from({length: NUMBER_OF_INPUTS}, (_, index) => (
              <Box key={index} flex={1}>
                {/* BLOCK OTHER INPUT TO BE TOUCHED */}
                {index !== 0 && (
                  <Box
                    w={'full'}
                    h={'full'}
                    position={'absolute'}
                    zIndex={10}
                  />
                )}
                <Input
                  ref={el => (itemsRef.current[index] = el)}
                  caretHidden
                  isInvalid={isError}
                  textAlign={'center'}
                  keyboardType={'numeric'}
                  borderColor={values[index] ? 'primary.600' : 'gray.300'}
                  value={values[index]}
                  defaultValue=""
                  color={isError ? 'error.500' : 'primary.600'}
                  fontWeight={'bold'}
                  _focus={{
                    borderColor: 'primary.600',
                  }}
                  _invalid={{
                    borderColor: 'error.500',
                  }}
                  // first input can have a length of 6 because they paste their code into it
                  maxLength={index === 0 ? NUMBER_OF_INPUTS : 1}
                  onChangeText={async text => {
                    if (text.length > 1) {
                      const copiedContent = await Clipboard.getString();
                      if (copiedContent === '') return;
                      const isPasted = text.includes(copiedContent);
                      if (isPasted) {
                        applyOTPCodeToInputs(text);
                        return;
                      }
                    }

                    // only continue one if we see a text of length 1 or 6
                    if (text.length === 0 || text.length === 1) {
                      if (text.length === 1 && index !== NUMBER_OF_INPUTS - 1) {
                        const nextInput = itemsRef.current[index + 1];
                        if (nextInput) {
                          nextInput.focus();
                        }
                      }
                    }

                    const newValues = [...values];
                    newValues[index] = text;
                    setValues(newValues);
                  }}
                  onKeyPress={event => {
                    if (event.nativeEvent.key === 'Backspace') {
                      // going backward:
                      if (index !== 0) {
                        if (values[index] !== '') {
                        }
                        const previousInput = itemsRef.current[index - 1];
                        if (previousInput) {
                          const newValues = [...values];
                          newValues[index - 1] = newValues[index - 1]
                            .split('')
                            .splice(0, newValues[index - 1].length - 1)
                            .join('');
                          setValues(newValues);
                          previousInput.focus();

                          return;
                        }
                      }
                    }
                  }}
                  textContentType="oneTimeCode"
                />
              </Box>
            ))}
          </HStack>
            {isError && <Text pt={1} color={"#F04438"}>Incorrect PIN Please try again</Text>}
          </Box>

          <Button
            onPress={() => onPress()}
            mr="1"
            mb="2">
            Procceed
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
