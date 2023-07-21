import React from 'react';

//  React Native Components
import { TouchableOpacity } from 'react-native';

//  Native Base Components
import {
  useTheme,
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
      <Box m="16px">
        {/* Reload Card */}
        <Box variant="shadow" bg="#4481ED">
          <HStack space={[2, 3]} justifyContent="space-between">
            <Box>
              <Icon bg="white" p="22px"></Icon>
            </Box>
            <Box>
              <Text color="white" variant="h6" pb="1.5">
                60 19 23456789
              </Text>
              <Text bold color="white" fontSize="10px">
                Reload before 28/07/2023
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="flex-end">
              <Badge variant="success">Active</Badge>
              <Text bold variant="h5" color="#FFFFFF">
                RM XX.XX
              </Text>
            </Box>
          </HStack>
        </Box>

        {/* Select Amount Card */}
        <Box mt="16px" variant="shadow">
          <Text bold variant="body2" pb="16px">
            2. Select Amount
          </Text>
          {/* Card Reload */}
          <VStack justifyContent="center">
            {rowsAmount.map((row, index) => (
              <HStack key={index} justifyContent="space-between">
                {row.map((amount, itemIndex) => (
                  <Box
                    variant="border"
                    key={itemIndex}
                    w="94px"
                    h="72px"
                    px="4px"
                    justifyContent="center"
                    alignItems="center"
                    mb="16px"
                  >
                    <Text bold variant="h6">
                      RM{amount.price}
                    </Text>
                    <Text variant="label">{amount.validity}</Text>
                    {/* Tag */}
                    {amount.tag ? (
                      <Badge variant="popular" position="absolute" top="-10">
                        {amount.tag}
                      </Badge>
                    ) : null}
                  </Box>
                ))}
              </HStack>
            ))}
          </VStack>
          {/* Additional Text */}
          <Text variant="label" pb="8px" color="gray.500">
            Non-Malaysians will be subjected to 6% SST.
          </Text>
        </Box>

        {/* Select Payment Method Card */}
        <Box mt="16px" variant="shadow">
          <Text bold variant="body2" pb="16px">
            3. Select Payment Method
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
                      variant="border"
                      key={itemIndex}
                      w="94px"
                      h="72px"
                      px="4px"
                      justifyContent="center"
                      alignItems="center"
                      mb="16px"
                    >
                      <Text bold variant="body2">
                        {payment.method}
                      </Text>
                      {payment.extra ? (
                        <Text variant="label" color="primary.600">
                          {payment.extra}
                        </Text>
                      ) : null}

                      {/* Tag  */}
                      {payment.tag ? (
                        <Badge variant="info" position="absolute" top="-10">
                          {payment.tag}
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
              <Text variant="body2">Total Payment</Text>
              <Text bold variant="h6" color="primary.600">
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
  );
};
export default ReloadWallet;
