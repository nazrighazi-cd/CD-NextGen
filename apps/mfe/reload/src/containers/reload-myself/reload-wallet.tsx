import React from 'react';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Icon,
  Badge,
  Spacer,
  Pressable,
  ScrollView,
} from 'native-base';

const ReloadWallet = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

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
          {/* RELOAD CARD */}
          <Box variant="shadow" bg="#4481ED">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Box variant="iconRounded">
                <Icon></Icon>
              </Box>
              <Box>
                <Text variant="h6" color="white" pb="1.5">
                  60 19 23456789
                </Text>
                <Text variant="label" bold color="white">
                  Reload before 28/07/2023
                </Text>
              </Box>
              <Spacer />
              <Box alignItems="flex-end">
                <Badge variant="success">Active</Badge>
                <Text variant="h5" bold color="#FFFFFF">
                  RM XX.XX
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* SELECT AMOUNT CARD */}
          <Box variant="shadow" mt="16px">
            <Text variant="body2" bold pb="16px">
              2. Select Amount
            </Text>
            {/* Card Reload */}
            <VStack justifyContent="center">
              {rowsAmount.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
                  {row.map((amount, itemIndex) => (
                    <Pressable>
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
                                top="-10"
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
            <Text variant="body2" bold pb="16px">
              3. Select Payment Method
            </Text>
            {/* Payment Option Card */}
            <VStack justifyContent="center">
              {rowsPayment.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
                  {row.map((payment, itemIndex) => (
                    <Pressable
                      onPress={() => navigation.navigate(payment.pages)}
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
                            <Text variant="body2" bold>
                              {payment.method}
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
                                top="-10"
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

        {/* FOOTER */}
        <Box m="16px" mt="6px">
          {/* Total Payment */}
          <Box mt="16px">
            <HStack justifyContent="space-between">
              <Box>
                <Text variant="body2">Total Payment</Text>
                <Text variant="h6" bold color="primary.600">
                  RM XXX
                </Text>
              </Box>
              <Button onPress={() => navigation.navigate('Select eWallet')}>
                Continue
              </Button>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default ReloadWallet;
