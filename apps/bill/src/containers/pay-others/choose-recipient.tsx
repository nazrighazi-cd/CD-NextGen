import React from 'react';
// Native Base
import {
  Badge,
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Pressable,
  ScrollView,
} from 'native-base';

import FloatingInput from '../../../../../libs/themes/components/FloatingInput';

import { Contact } from '@cd-next-gen-app/icons';

export const ChooseRecipient = ({ navigation }: { navigation: any }) => {
  // Payment Method Max
  const max_length = 12;

  // Payment Methods Data
  const paymentMethod = [
    {
      method: 'e-Wallet',
      pages: 'Select Wallet',
      tag: 'Popular',
    },
    {
      method: 'Credit Card',
      pages: 'Select Cards',
    },
    { method: 'Online Banking', pages: 'Select Banks', tag: null },
  ];

  const rowsPayment = [];
  for (let i = 0; i < paymentMethod.length; i += 3) {
    const row = paymentMethod.slice(i, i + 3);
    rowsPayment.push(row);
  }

  // Contact Data
  const msisdnNumber = [
    {
      id: '1',
      msisdn: '019-9980004',
      name: 'Eloise Bridgerton',
    },
    {
      id: '2',
      msisdn: '019-9980004',
      name: 'Hermione Granger',
    },
  ];

  return (
    <Box bg="white" h="100%">
      <ScrollView>
        <Box m="16px">
          {/* Mobile Number */}
          <Box variant="shadow">
            <Text variant="h8" bold mb="2">
              Enter a Name or Mobile Number
            </Text>
            <FloatingInput
              placeholder="Name or Mobile Number"
              label="Name or Mobile Number"
              InputRightElement={<Contact color="#667085" />}
            />
          </Box>

          {/* Contacts List */}
          <Text variant="h8" bold mt="3" mb="1.5">
            Recent Contacts
          </Text>
          <Box variant="shadow" pt="0" py="1">
            {msisdnNumber.map((item, index) => (
              <Box
                key={index}
                borderBottomWidth={index === msisdnNumber.length - 1 ? 0 : 1}
                borderColor="#ddd"
                py="4"
              >
                <Text>{item.name}</Text>
                <Text variant="body2" color="gray.600">
                  {item.msisdn}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default ChooseRecipient;
