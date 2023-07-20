import React from 'react';

//  React Native Components
import { TouchableOpacity } from 'react-native';

//  Native Base Components
import {
  useTheme,
  NativeBaseProvider,
  Box,
  Text,
  Button,
  Icon,
  Badge,
  HStack,
  VStack,
  Spacer,
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
    <ScrollView>
      <NativeBaseProvider>
        <Box m="16px">
          {/* Reload Card */}
          <Box bg="#4481ED" p="16px" rounded="lg">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Box>
                <Icon bg="#FFFFFF" p="16px"></Icon>
              </Box>
              <Box>
                <Text color="#FFFFFF" fontSize="16px">
                  60 19 23456789
                </Text>
                <Text bold color="#FFFFFF" fontSize="10px" pt="10px">
                  Reload before 28/07/2023
                </Text>
              </Box>
              <Spacer></Spacer>
              <Box alignItems="flex-end">
                <Badge>Active</Badge>
                <Text bold color="#FFFFFF" fontSize="20px">
                  RM XX.XX
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* Select Amount Card */}
          <Box mt="16px" bg="#F9FAFB" pt="16px" px="16px" rounded="lg">
            <Text bold fontSize="12px" pb="16px">
              2. Select Amount
            </Text>
            {/* Card Reload */}
            <VStack justifyContent="center">
              {rowsAmount.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
                  {row.map((amount, itemIndex) => (
                    <Box
                      key={itemIndex}
                      bg="#FFFFFF"
                      w="94px"
                      h="72px"
                      px="4px"
                      borderWidth="1"
                      borderRadius="md"
                      borderColor="#EAECF0"
                      justifyContent="center"
                      alignItems="center"
                      mb="16px"
                    >
                      <Text bold fontSize="16px">
                        RM{amount.price}
                      </Text>
                      <Text fontSize="10px">{amount.validity}</Text>
                      {/* Tag */}
                      {amount.tag ? (
                        <Badge position="absolute" top="-10">
                          <Text fontSize="8px">{amount.tag}</Text>
                        </Badge>
                      ) : null}
                    </Box>
                  ))}
                </HStack>
              ))}
            </VStack>
            {/* Additional Text */}
            <Text fontSize="10px" pb="8px" color="#667085">
              Non-Malaysians will be subjected to 6% SST.
            </Text>
          </Box>

          {/* Select Payment Method Card */}
          <Box mt="16px" bg="#F9FAFB" pt="16px" px="16px" rounded="lg">
            <Text bold fontSize="12px" pb="16px">
              2. Select Payment Method
            </Text>
            {/* Payment Option Card */}
            <VStack justifyContent="center">
              {rowsPayment.map((row, index) => (
                <HStack key={index} justifyContent="space-between">
                  {row.map((payment, itemIndex) => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate(payment.pages)}
                    >
                      <Box
                        key={itemIndex}
                        bg="#FFFFFF"
                        w="94px"
                        h="72px"
                        px="4px"
                        borderWidth="1"
                        borderRadius="md"
                        borderColor="#EAECF0"
                        justifyContent="center"
                        alignItems="center"
                        mb="16px"
                      >
                        <Text bold fontSize="12px">
                          {payment.method}
                        </Text>
                        {payment.extra ? (
                          <Text fontSize="10px" color="#1561E8">
                            {payment.extra}
                          </Text>
                        ) : null}

                        {/* Tag  */}
                        {payment.tag ? (
                          <Badge position="absolute" top="-10">
                            <Text fontSize="8px">{payment.tag}</Text>
                          </Badge>
                        ) : null}
                      </Box>
                    </TouchableOpacity>
                  ))}
                </HStack>
              ))}
            </VStack>
          </Box>
        </Box>

        {/* Footer */}
        <Box m="16px" mt="6px">
          {/* Total Payment */}
          <Box mt="16px">
            <HStack justifyContent="space-between">
              <Box>
                <Text fontSize="12px">Total Payment</Text>
                <Text bold fontSize="16px" color="#1561E8">
                  RM XXX
                </Text>
              </Box>
              <Button
                bg="#1561E8"
                onPress={() => navigation.navigate('Select eWallet')}
              >
                <Text color="#FFFFFF"> Continue </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      </NativeBaseProvider>
    </ScrollView>
  );
};
export default ReloadWallet;
