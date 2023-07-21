import React from 'react';
// React Native Components
import { Linking } from 'react-native';
// Native Base Components
import {
  useTheme,
  Box,
  Text,
  HStack,
  Input,
  Checkbox,
  Button,
} from 'native-base';
// Icons
import MasterCard from '../../assets/icons/payment-methods/Mastercard.svg';
import Help from '../../assets/icons/help-circle.svg';

const AddCard = () => {
  const theme = useTheme();

  const handleTnC = () => {
    const url = 'https://www.example.com/terms-and-conditions';
    Linking.openURL(url);
  };

  return (
    <>
      {/* CARD DETAILS  */}
      <Box flex={1} m="16px">
        <Box variant="shadow">
          <Text variant="body2" bold mb="16px">
            Card Details
          </Text>

          {/* Credit Card Information */}
          <Box w="100%" mb="16px">
            <Input
              placeholder="Card Number"
              InputRightElement={
                <Box pr={2}>
                  <Help />
                </Box>
              }
              InputLeftElement={
                <Box pl={2}>
                  <MasterCard />
                </Box>
              }
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
            <Checkbox value="red" defaultIsChecked>
              <Text variant="h7" color="gray.700">
                Save this card
              </Text>
            </Checkbox>
            <Checkbox value="red">
              <Text variant="h7" color="gray.700">
                Save as default
              </Text>
            </Checkbox>
          </HStack>

          {/* Description Text */}
          <Text variant="label" px="16px" mt="16px">
            Your card may be charged to ensure it’s valid. The amount will be
            automatically refunded. By adding a card, you have read and agree to
            our{' '}
            <Text variant="label" color="primary.600" onPress={handleTnC}>
              terms and conditions.
            </Text>
          </Text>
        </Box>
      </Box>

      {/* FOOTER */}
      <Box mx="16px" mb="16px">
        <Button>Continue</Button>
      </Box>
    </>
  );
};

export default AddCard;
