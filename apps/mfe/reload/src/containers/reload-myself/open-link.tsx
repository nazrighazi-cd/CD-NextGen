import React from 'react';

//  Native Base Components
import { useTheme, NativeBaseProvider, Box, Text } from 'native-base';

const OpenLink = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text
          fontSize="14px"
          color="#667085"
          onPress={() => navigation.navigate('Receipt')}
        >
          Open Link
        </Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default OpenLink;
