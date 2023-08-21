import React from 'react';
//  Native Base Components
import { useTheme, Box, Text, VStack, Button, Avatar } from 'native-base';
// Icons
import { Copy } from '@cd-next-gen-app/icons';

const SuccessReceipt = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <Box flex={1} bg="white">
      <Box m="24px" flex={1} justifyContent="center" alignItems="center">
        <VStack justifyContent="space-between" alignItems="center" space={4}>
          <Avatar variant="circle" bg="gray.300" p="70px">
            <Copy color="#1561E8" />
          </Avatar>
          <Text variant="h6" bold>
            Main label with max 32 Char(s)
          </Text>
          <Text variant="body" textAlign="center">
            Copy with max 90 Char(s). Up to 3 lines. Line 3, for example.
          </Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box m="16px">
        <Button mb="10px" onPress={() => navigation.navigate('Main List')}>
          CTA
        </Button>
        <Button
          variant="secondaryGray"
          onPress={() => navigation.navigate('Main List')}
        >
          Secondary CTA
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessReceipt;