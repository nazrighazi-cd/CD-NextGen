import React from 'react';
//  Native Base Components
import { useTheme, Box, Text } from 'native-base';

const BankPortal = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text
          variant="body"
          color="gray.500"
          onPress={() => navigation.navigate('Receipt')}
        >
          Deduct: RM 120.00
        </Text>
      </Box>
    </>
  );
};

export default BankPortal;
