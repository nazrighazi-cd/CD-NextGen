import React from 'react';
import { Box, useTheme, Text } from 'native-base';

const Partners = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text
        variant="body"
        color="gray.500"
        onPress={() => navigation.navigate('Receipt')}
      >
        Open Link
      </Text>
    </Box>
  );
};

export default Partners;
