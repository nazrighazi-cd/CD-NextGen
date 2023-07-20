import React from 'react';

// Native Base Components
import {
  useTheme,
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  AddIcon,
} from 'native-base';

const SelectCard = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <NativeBaseProvider>
      {/* Add Payment Card */}
      <Box m="16px">
        <Box bg="#F9FAFB" p="16px" rounded="lg">
          <HStack space={2} alignItems="center">
            <AddIcon />
            <Text
              fontSize="12px"
              color="#1561E8"
              onPress={() => navigation.navigate('Add Card')}
            >
              Add Card
            </Text>
          </HStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default SelectCard;
