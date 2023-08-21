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

export const PayOthers = ({ navigation }: { navigation: any }) => {
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
      pages: 'Select Card',
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
              Select or Enter Mobile Number
            </Text>
            <FloatingInput
              placeholder="+60"
              label="Mobile Number"
              InputRightElement={
                <Contact
                  color="#667085"
                  onPress={() => navigation.navigate('Choose Recipient')}
                />
              }
            />
          </Box>

          {/* Amount to Pay */}
          <Box variant="shadow" mt="3">
            <Text variant="h8" bold mb="2">
              Enter Amount to Pay
            </Text>
            <FloatingInput
              placeholder="Payment Amount"
              label="Payment Amount"
            />
            <Text variant="body2" color="gray.600" mt="1">
              Current outstanding balance: RM 428.00
            </Text>
          </Box>

          <Box variant="shadow" mt="3">
            <Text variant="h8" bold>
              Select Payment Method
            </Text>
            {rowsPayment.map((row, index) => (
              <HStack key={index} justifyContent="space-between" mt="4">
                {row.map((payment, itemIndex) => (
                  <Pressable
                    onPress={() => navigation.navigate(payment.pages)}
                    key={itemIndex}
                  >
                    {({ isPressed }) => {
                      return (
                        <Box
                          variant="border"
                          key={itemIndex}
                          w="96px"
                          h="72px"
                          px="4px"
                          justifyContent="center"
                          alignItems="center"
                          bg={isPressed ? 'primary.5' : 'white'}
                          borderColor={isPressed ? 'primary.600' : 'gray.300'}
                          borderWidth={isPressed ? '2' : '1'}
                        >
                          <Text variant="h8" bold textAlign="center">
                            {payment.method.length > max_length
                              ? payment.method.replace(/(.{7})/g, '$1\n')
                              : payment.method}
                          </Text>
                          {/* Tag  */}
                          {payment.tag ? (
                            <Badge
                              variant="popular"
                              position="absolute"
                              top={isPressed ? '-11' : '-10'}
                            >
                              {payment.tag}
                            </Badge>
                          ) : null}
                        </Box>
                      );
                    }}
                  </Pressable>
                ))}
              </HStack>
            ))}
          </Box>
        </Box>
      </ScrollView>

      {/* Footer */}
      <Box m="16px">
        {/* Total Payment */}
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Total Payment</Text>
            <Text variant="h6" bold color="primary.600">
              RM 0.00
            </Text>
          </Box>
          <Button
            // isDisabled={!form.mobile}
            onPress={() => navigation.navigate('Select Card')}
          >
            Continue
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default PayOthers;
