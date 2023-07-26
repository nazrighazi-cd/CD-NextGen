import React from 'react';
//  Native Base Components
import { useTheme, Box, Text } from 'native-base';

const OpenLink = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text
          variant="body"
          color="gray.500"
          onPress={() => navigation.navigate('Receipt')}
        >
          Open Link
        </Text>
      </Box>
    </>
  );
};

export default OpenLink;
