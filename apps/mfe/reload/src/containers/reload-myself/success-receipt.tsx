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
    <>
      <Box m="24px" flex={1} justifyContent="center" alignItems="center">
        <VStack justifyContent="space-between" alignItems="center" space={4}>
          <Avatar></Avatar>
          <Text bold variant="h6">
            Main label with max 32 Char(s)
          </Text>
          <Text variant="h7">
            Copy with max 90 Char(s). Up to 3 lines. Line 3, for example.
          </Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box m="16px">
        <Button mb="10px">CTA</Button>
        <Button variant="secondaryGray">Secondary CTA</Button>
      </Box>
    </>
  );
};

export default SuccessReceipt;
