import React, { useState } from 'react';

// Native Base Components
import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  Icon,
  Input,
  Button,
  Modal,
} from 'native-base';

// Icons
import { ChevronRightIcon } from 'native-base';

const ReloadViaPin = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <NativeBaseProvider>
      <Box flex={9} m="16px">
        {/* Enter Mobile Number */}
        <Box bg="#F9FAFB" p="16px" rounded="lg" mt="16px">
          <Text bold fontSize="12px" pb="16px" pr="10px">
            1. Select or Enter Mobile Number
          </Text>
          <Input
            placeholder="+60"
            py={4}
            InputRightElement={<ChevronRightIcon mr={2} />}
          />
        </Box>
        {/* Enter Digit */}
        <Box bg="#F9FAFB" p="16px" rounded="lg" mt="16px">
          <HStack>
            <Text bold fontSize="12px" pb="16px" pr="10px">
              2. Enter Reload PIN
            </Text>
            <ChevronRightIcon></ChevronRightIcon>
          </HStack>
          <Input placeholder="16-Digit Pin Number" py={4} />
        </Box>
      </Box>
      <Box flex={1} mx="16px">
        <Button onPress={() => setShowModal(true)}>Continue</Button>
      </Box>

      {/* Pin Reload Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: '#000000',
          },
          bg: '#000000',
        }}
      >
        <Modal.Content
          marginBottom={0}
          marginTop="auto"
          width="100%"
          borderBottomRadius={0}
          borderTopRadius="20px"
        >
          <Modal.CloseButton />
          <Text bold fontSize="18px" p="16px" pb="8px">
            What is PIN Reload
          </Text>
          <Text fontSize="14px" color="#475467" p="16px" pt="0px">
            Copy Explaining PIN Reload and Steps to Reload Copy max 120 char
            with max 3 lines. Line 3 example.
          </Text>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

export default ReloadViaPin;
