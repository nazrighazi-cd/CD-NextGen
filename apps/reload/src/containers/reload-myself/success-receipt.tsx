import React from 'react';
//  Native Base Components
import { useTheme, Icon, Box, Text, VStack, Button } from 'native-base';
// Icons
import { Copy } from '../../assets/icons';

const SuccessReceipt = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <>
      <Box m="24px" flex={1} justifyContent="center" alignItems="center">
        <VStack justifyContent="space-between" alignItems="center" space={4}>
          <Box variant="iconCircle" bg="gray.300" p="40px">
            <Copy color="#1561E8" />
          </Box>
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
        <Button mb="10px" onPress={() => navigation.navigate('Reload Myself')}>
          CTA
        </Button>
        <Button
          variant="secondaryGray"
          onPress={() => navigation.navigate('Reload Myself')}
        >
          Secondary CTA
        </Button>
      </Box>
    </>
  );
};

export default SuccessReceipt;
