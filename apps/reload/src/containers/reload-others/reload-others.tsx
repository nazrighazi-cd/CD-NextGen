import React, { useState } from 'react';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Badge,
  Input,
  Pressable,
  ScrollView,
} from 'native-base';
// Icons
import { Contact } from '@cd-next-gen-app/icons';
// Components
import FloatingInput from 'libs/themes/components/FloatingInput';

const ReloadOthers = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Payment Method Max
  const max_length = 12;

  // Input Disable
  const [form, setForm] = useState({ mobile: null });

  // Mock Data
  const reloadAmount = [
    { id: '1', price: '5', validity: 'Valid for 5 Days', tag: 'Popular' },
    { id: '2', price: '6', validity: 'Valid for 5 Days', tag: null },
    { id: '3', price: '7', validity: 'Valid for 5 Days', tag: 'Popular' },
    { id: '4', price: '8', validity: 'Valid for 5 Days', tag: null },
    { id: '5', price: '9', validity: 'Valid for 5 Days', tag: null },
    { id: '6', price: '10', validity: 'Valid for 5 Days', tag: null },
  ];

  const paymentMethod = [
    {
      method: 'e-Wallet',
      extra: 'Extra Perks',
      pages: 'Select eWallet',
      tag: 'Popular',
    },
    {
      method: 'Credit Card',
      extra: 'Extra Perks',
      pages: 'Select Card',
      tag: 'Popular',
    },
    { method: 'Online Banking', extra: null, pages: 'Select Banks', tag: null },
  ];

  const rowsAmount = [];
  for (let i = 0; i < reloadAmount.length; i += 3) {
    const row = reloadAmount.slice(i, i + 3);
    rowsAmount.push(row);
  }

  const rowsPayment = [];
  for (let i = 0; i < paymentMethod.length; i += 3) {
    const row = paymentMethod.slice(i, i + 3);
    rowsPayment.push(row);
  }

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* RELOAD CARD - OTHERS */}
          <Box variant="shadow" rounded="lg">
            <Text variant="h8" bold pb="16px">
              1. Select or Enter Mobile Number
            </Text>
            <FloatingInput
              label="Mobile Number"
              placeholder="+60"
              InputRightElement={<Contact color="#667085" />}
              type="number"
              value={form.mobile}
              changeText={(e: number) => setForm({ mobile: e })}
            />
          </Box>
          {/* SELECT AMOUNT CARD */}
          <Box variant="shadow" mt="16px">
            <Text variant="h8" bold pb="16px">
              2. Select Amount
            </Text>
            {/* Card Reload */}
            <VStack justifyContent="center">
              {rowsAmount.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
                  {row.map((amount, itemIndex) => (
                    <Pressable key={itemIndex}>
                      {({ isPressed }) => {
                        return (
                          <Box
                            variant="border"
                            key={itemIndex}
                            w="94px"
                            h="72px"
                            px="4px"
                            justifyContent="center"
                            alignItems="center"
                            mb="16px"
                            bg={isPressed ? 'primary.5' : 'white'}
                            borderColor={isPressed ? 'primary.600' : 'gray.300'}
                            borderWidth={isPressed ? '2' : '1'}
                          >
                            <Text variant="h6" bold>
                              RM{amount.price}
                            </Text>
                            <Text variant="label">{amount.validity}</Text>
                            {/* Tag */}
                            {amount.tag ? (
                              <Badge
                                variant="popular"
                                position="absolute"
                                top={isPressed ? '-11' : '-10'}
                              >
                                {amount.tag}
                              </Badge>
                            ) : null}
                          </Box>
                        );
                      }}
                    </Pressable>
                  ))}
                </HStack>
              ))}
            </VStack>
            {/* Additional Text */}
            <Text variant="label" pb="8px" color="gray.500">
              Non-Malaysians will be subjected to 6% SST.
            </Text>
          </Box>
          {/* SELECT PAYMENT METHOD CARD */}
          <Box variant="shadow" mt="16px">
            <Text variant="h8" bold pb="16px">
              3. Select Payment Method
            </Text>
            {/* Payment Option Card */}
            <VStack justifyContent="center">
              {rowsPayment.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
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
                            w="94px"
                            h="72px"
                            px="4px"
                            justifyContent="center"
                            alignItems="center"
                            mb="16px"
                            bg={isPressed ? 'primary.5' : 'white'}
                            borderColor={isPressed ? 'primary.600' : 'gray.300'}
                            borderWidth={isPressed ? '2' : '1'}
                          >
                            <Text variant="h8" bold textAlign="center">
                              {payment.method.length > max_length
                                ? payment.method.replace(/(.{7})/g, '$1\n')
                                : payment.method}
                            </Text>
                            {payment.extra ? (
                              <Text variant="label" color="primary.600">
                                {payment.extra}
                              </Text>
                            ) : null}

                            {/* Tag  */}
                            {payment.tag ? (
                              <Badge
                                variant="info"
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
            </VStack>
          </Box>
        </Box>
      </ScrollView>

      {/* FOOTER */}
      <Box m="16px">
        {/* Total Payment */}
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Total Payment</Text>
            <Text variant="h6" bold color="primary.600">
              RM XXX
            </Text>
          </Box>
          <Button
            isDisabled={!form.mobile}
            onPress={() => navigation.navigate('Select Card')}
          >
            Continue
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};
export default ReloadOthers;
