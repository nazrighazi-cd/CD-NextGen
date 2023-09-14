import * as React from 'react';
import {useState } from 'react';
import {Platform} from 'react-native';
import {
  Box,
  HStack,
  Button,
  Modal,
  Text,
  Avatar,
  VStack,
} from 'native-base';
import {Lock01} from '../../../icons/src';
import CellComponent from './CellComponent'
import {useKeyboard} from './useKeyboard'

type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: () => void;
};

export default function OTPInput({isOpen, onClose, onPress}: props) {
  const isVisible = useKeyboard();
  const [values, setValues] = React.useState<string>('');
  const [isError, setIsError] = useState(false)

  return (
    <Modal
      avoidKeyboard
      bottom={Platform.OS === 'android' ? isVisible ?? null : null}
      onClose={() => {
        setValues('');
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

          </HStack>
            <CellComponent isError={isError} isOpen={isOpen} value={values} onChangeText={setValues}/>
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

