import React from 'react';
// React Native Components
import { Linking } from 'react-native';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  Text,
  Input,
  Checkbox,
  Button,
  ScrollView,
} from 'native-base';
// Icons
import { Mastercard, HelpCircle } from '@cd-next-gen-app/icons';

// Components
import FloatingInput from '../../../../../libs/themes/components/FloatingInput';

const AddCard = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  const handleTnC = () => {
    const url = 'https://www.example.com/terms-and-conditions';
    Linking.openURL(url);
  };

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        {/* CARD DETAILS  */}
        <Box flex={1} m="16px">
          <Box variant="shadow">
            <Text variant="h7" bold mb="16px">
              Card Details
            </Text>

            {/* Credit Card Information */}
            <Box w="100%" mb="16px">
              <Input
                placeholder="Card Number"
                InputRightElement={
                  <Box pr={2}>
                    <HelpCircle color="#98A2B3" />
                  </Box>
                }
                InputLeftElement={
                  <Box pl={2}>
                    <Mastercard />
                  </Box>
                }
              />
            </Box>
            <HStack justifyContent="space-between">
              <Box w="48%">
                <FloatingInput label="Exp. Date" placeholder="Expiry Date" />
              </Box>
              <Box w="48%">
                <FloatingInput label="CVV/CVC" placeholder="CVV/CVC" />
              </Box>
            </HStack>

            {/* Checkbox */}
            <HStack justifyContent="space-between" mt="8px" px="5px">
              <Checkbox value="red" defaultIsChecked>
                <Text variant="body" color="gray.700">
                  Save this card
                </Text>
              </Checkbox>
              <Checkbox value="red">
                <Text variant="body" color="gray.700">
                  Save as default
                </Text>
              </Checkbox>
            </HStack>

            {/* Description Text */}
            <Text variant="label" px="16px" mt="16px">
              Your card may be charged to ensure it’s valid. The amount will be
              automatically refunded. By adding a card, you have read and agree
              to our{' '}
              <Text variant="label" color="primary.600" onPress={handleTnC}>
                terms and conditions.
              </Text>
            </Text>
          </Box>
        </Box>
      </ScrollView>
      {/* FOOTER */}
      <Box mx="16px" mb="16px">
        <Button onPress={() => navigation.navigate('Select Card')}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default AddCard;
