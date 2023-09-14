import {
  TextInput,
} from 'react-native';
import React, { useRef } from 'react';
import { useFocusState } from './useForcusState';
import { useIsFocused } from '@react-navigation/native';
import { Box, Input, Pressable, Text } from 'native-base';
import { useTimeout } from './useTimeout';
import { useKeyboard } from './useKeyboard';

export interface RenderCellOptions {
  symbol: string;
  index: number;
  isFocused: boolean;
}

const DEFAULT_CELL_COUNT = 6;

const truncateString = (codeValue: string, codeLength: number): Array<string> =>
  codeValue.substring(0, codeLength).split('');

const emptyCell = (codeLength: number) =>
  new Array<string>(codeLength).fill('');

const getCells = (codeValue: string, codeLength: number) =>
  new Array<string>()
    .concat(truncateString(codeValue, codeLength))
    .concat(emptyCell(codeLength))
    .slice(0, codeLength);

function CellComponent({
  onBlur,
  onFocus,
  value,
  isOpen,
  isError,
  onChangeText,
  cellCount = DEFAULT_CELL_COUNT,
}: any) {

  let clearInput = false;
  const focusState = useFocusState(onBlur, onFocus);
  const itemsRef = useRef<TextInput | null>(null);
  const isFocused = useIsFocused();
  const isVisible = useKeyboard();

  useTimeout(
    () => {
      const input = itemsRef.current;
      if (input) {
        input.focus();
      }
    },
    isFocused && isOpen ? 100 : null
  );

  const getBorderColor = (focus) => {
    if (isError) return 'error.500';

    return focus ? 'primary.600' : 'gray.300';
  };

  const cells = getCells(value, cellCount).map(
    (textValue, index, symbols) => {
      const focus = focusState.isFocused && symbols.indexOf('') === index;
      return (
        <Pressable
          key={index}
          mx={2}
          borderRadius={'md'}
          borderColor={getBorderColor(focus)}
          alignItems={'center'}
          justifyContent={'center'}
          borderWidth={1}
          flex={1}
          onPress={() => {
            if (isVisible === null) {
              itemsRef.current.blur();
              itemsRef.current.focus();
            }
          }}
        >
          <Text>{textValue}</Text>
          {index === 0 && (
            <Input
              ref={(el) => (itemsRef.current = el)}
              disableFullscreenUI
              caretHidden={false}
              spellCheck={false}
              autoCorrect={false}
              blurOnSubmit={false}
              position={'absolute'}
              left={0}
              top={0}
              bottom={0}
              right={0}
              opacity={0}
              clearButtonMode="never"
              autoCapitalize="characters"
              underlineColorAndroid="transparent"
              maxLength={cellCount}
              onChangeText={(text) => {
                if(clearInput) {
                  onChangeText('');
                  clearInput = false
                  return
                }
                onChangeText(text.replace(/[^0-9]/g, ''));
              }}
              value={value}
              keyboardType={'numeric'}
              onBlur={focusState.onBlur}
              onFocus={focusState.onFocus}
              onKeyPress={(event) => {
                if (event.nativeEvent.key === 'Backspace' && isError) {
                  clearInput = true
                  return null
                }
              }}
              textContentType="oneTimeCode"
            />
          )}
        </Pressable>
      );
    }
  );

  return (
    <Box justifyContent={'space-between'} h={'55px'} flexDirection={'row'}>
      {cells}
    </Box>
  );
}

export default CellComponent;
