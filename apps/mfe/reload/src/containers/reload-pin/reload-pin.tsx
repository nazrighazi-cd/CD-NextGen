import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  Icon,
  Badge,
  Input,
  Button,
  Spacer,
} from 'native-base';

// Icons
import {ChevronRightIcon} from 'native-base';

const ReloadPin = ({navigation}: {navigation: any}) => {
  return (
    <NativeBaseProvider>
      <Box flex={9} m="16px">
        {/* Reload Card */}
        <Box bg="#4481ED" p="16px" rounded="lg">
          <HStack space={[2, 3]} justifyContent="space-between">
            <Box>
              <Icon bg="#FFFFFF" p="16px"></Icon>
            </Box>
            <Box>
              <Text color="#FFFFFF" fontSize="16px">
                60 19 23456789
              </Text>
              <Text bold color="#FFFFFF" fontSize="10px" pt="10px">
                Reload before 28/07/2023
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="flex-end">
              <Badge>Active</Badge>
              <Text bold color="#FFFFFF" fontSize="20px">
                RM XX.XX
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Enter Digit */}
        <Box bg="#F9FAFB" p="16px" rounded="lg" mt="16px">
          <HStack>
            <Text bold fontSize="12px" pb="16px" pr="10px">
              Enter 16-Digit Reload PIN
            </Text>
            <ChevronRightIcon></ChevronRightIcon>
          </HStack>
          <Input placeholder="16-Digit Pin Number" py={4} />
        </Box>
      </Box>
      <Box flex={1} mx="16px">
        <Button onPress={() => navigation.navigate('Reload Via Pin')}>
          Continue
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default ReloadPin;
