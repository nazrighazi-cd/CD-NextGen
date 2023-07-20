import React from 'react';

//  Native Base Components
import {
  useTheme,
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  Input,
  Checkbox,
  Button,
  ScrollView,
} from 'native-base';

// Icons
import { ChevronRightIcon } from 'native-base';

const AddCard = () => {
  const theme = useTheme();

  return (
    <NativeBaseProvider>
      <Box flex={1} m="16px">
        <Box bg="#F9FAFB" p="16px" rounded="lg">
          <Text bold fontSize="12px" mb="16px">
            Card Details
          </Text>

          {/* Credit Card Information */}
          <Box w="100%" mb="16px">
            <Input
              placeholder="Card Number"
              InputRightElement={<ChevronRightIcon mr={2} />}
              InputLeftElement={<ChevronRightIcon ml={2} />}
              py={3}
              mx={2}
            />
          </Box>
          <HStack justifyContent="space-between">
            <Box w="50%">
              <Input placeholder="Expiry Date" mx={2} py={3} />
            </Box>
            <Box w="50%">
              <Input placeholder="CVV/CVC" mx={2} py={3} />
            </Box>
          </HStack>
          {/* Checkbox */}
          <HStack justifyContent="space-between" mt="16px" px="16px">
            <Checkbox value="red" size="sm" defaultIsChecked>
              <Text fontSize="14px" color="#344054">
                Save this card
              </Text>
            </Checkbox>
            <Checkbox value="red" size="sm">
              <Text fontSize="14px" color="#344054">
                Save as default
              </Text>
            </Checkbox>
          </HStack>
          {/* Description Text */}
          <Text fontSize="10px" px="16px" mt="16px">
            Your card may be charged to ensure it’s valid. The amount will be
            automatically refunded. By adding a card, you have read and agree to
            our terms and conditions.
          </Text>
        </Box>
      </Box>

      {/* Footer */}
      <Box mx="16px" mb="16px">
        <Button>Continue</Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default AddCard;
