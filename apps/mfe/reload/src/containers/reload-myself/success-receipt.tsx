import React from 'react';

//  Native Base Components
import {
  useTheme,
  NativeBaseProvider,
  Avatar,
  Box,
  Text,
  VStack,
  Button,
} from 'native-base';

const SuccessReceipt = () => {
  const theme = useTheme();

  return (
    <NativeBaseProvider>
      <Box m="24px" flex={1} justifyContent="center" alignItems="center">
        <VStack justifyContent="space-between" alignItems="center" space={4}>
          <Avatar></Avatar>
          <Text bold fontSize="16px">
            Main label with max 32 Char(s)
          </Text>
          <Text fontSize="14px">
            Copy with max 90 Char(s). Up to 3 lines. Line 3, for example.
          </Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box m="16px">
        <Button bg="#1561E8" mb="10px">
          CTA
        </Button>
        <Button>Secondary CTA</Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default SuccessReceipt;
