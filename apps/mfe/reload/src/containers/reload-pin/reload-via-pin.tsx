import React, { useState } from 'react';
// Native Base Components
import { useTheme, Box, HStack, Text, Input, Button, Modal } from 'native-base';
// Icons
import Contact from '../../assets/icons/contact.svg';
import Info from '../../assets/icons/info-circle.svg';

const ReloadViaPin = () => {
  const theme = useTheme();

  // Modal
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <>
      <Box flex={1} bg="white">
        <Box flex={1} m="16px">
          {/* ENTER MOBILE NUMBER */}
          <Box variant="shadow" rounded="lg">
            <Text variant="h8" bold pb="16px">
              1. Select or Enter Mobile Number
            </Text>
            <Input
              placeholder="+60"
              InputRightElement={
                <Box pr={3}>
                  <Contact color="#667085" />
                </Box>
              }
              py={4}
            ></Input>
          </Box>

          {/* ENTER RELOAD PIN */}
          <Box variant="shadow" mt="16px">
            <HStack>
              <Text variant="h8" bold pb="16px" pr={2}>
                2. Enter Reload PIN
              </Text>
              <Box mt={-0.5}>
                <Info
                  width="16px"
                  color="#000000"
                  onPress={() => setBottomModal(true)}
                />
              </Box>
            </HStack>
            <Input placeholder="16-Digit Pin Number" py={4} />
          </Box>
        </Box>
        <Box m="16px">
          <Button>Continue</Button>
        </Box>
      </Box>

      {/* PIN RELOAD MODAL */}
      <Modal
        variant="bottom"
        isOpen={bottomModal}
        onClose={() => setBottomModal(false)}
        accessibilityLabel="Default Modal"
      >
        <Modal.Content
          justifyContent="flex-end"
          width="100%"
          borderTopRadius="24px"
          borderBottomRadius="0px"
        >
          <Modal.CloseButton />
          <Text variant="h5" bold color="gray.900">
            What is PIN Reload
          </Text>
          <Text variant="body" color="gray.600" pt={2}>
            Copy Explaining PIN Reload and Steps to Reload Copy max 120 char
            with max 3 lines. Line 3 example.
          </Text>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ReloadViaPin;
