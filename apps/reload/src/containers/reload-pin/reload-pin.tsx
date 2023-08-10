import React, { useState } from 'react';
import { Alert } from 'react-native';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  Text,
  Badge,
  Input,
  Button,
  Spacer,
  Modal,
  Avatar,
  ScrollView,
} from 'native-base';
// Icons
import { InfoCircle, Copy } from '@cd-next-gen-app/icons';

const ReloadPin = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Modal
  const [bottomModal, setBottomModal] = useState(false);

  //Input Disabled
  const [pinNumber, setPinNumber] = useState('');
  const onHandlePin = (pinNumber) => {
    setPinNumber(pinNumber);
  };

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* RELOAD CARD */}
          <Box variant="shadow" bg="#4481ED">
            <HStack space={[4, 3]} justifyContent="space-between">
              <Avatar variant="rounded">
                <Copy width={14} height={14} color="#1561E8" />
              </Avatar>
              <Box>
                <Text variant="body1" color="white" pb="1.0">
                  60 19 23456789
                </Text>
                <Text variant="label" bold color="white">
                  Reload before 28/07/2023
                </Text>
              </Box>
              <Spacer />
              <Box alignItems="flex-end">
                <Badge variant="success">Active</Badge>
                <Text variant="h5" bold color="#FFFFFF">
                  RM XX.XX
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* ENTER DIGIT */}
          <Box variant="shadow" mt="16px">
            <HStack alignContent="center">
              <Text variant="h8" bold pb="16px" pr={2}>
                Enter 16-Digit Reload PIN
              </Text>
              <Box mt={-0.5}>
                <InfoCircle
                  width="16px"
                  color="#000000"
                  onPress={() => setBottomModal(true)}
                />
              </Box>
            </HStack>
            <Input
              value={pinNumber}
              onChangeText={onHandlePin}
              placeholder="16-Digit Pin Number"
            />
          </Box>
        </Box>
      </ScrollView>

      {/* FOOTER */}
      <Box m="16px">
        <Button
          onPress={() => navigation.navigate('Reload Via Pin')}
          isDisabled={!pinNumber}
        >
          Continue
        </Button>
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
    </Box>
  );
};

export default ReloadPin;
