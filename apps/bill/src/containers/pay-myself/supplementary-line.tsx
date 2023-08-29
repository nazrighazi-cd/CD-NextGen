import React, { useState } from 'react';
// Native Base
import {
  Box,
  Text,
  HStack,
  Badge,
  Pressable,
  Button,
  ScrollView,
} from 'native-base';
// Icons
import { Edit } from '@cd-next-gen-app/icons';

const SupplementaryLine = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = useState({});

  // Data
  const msisdnNumber = [
    {
      id: '1',
      msisdn: '019-9980004',
      tag: 'Active',
      tagLine: '6 lines',
      amount: '428.00',
      due: '20 Jun 2023',
      supplementaryLine: [
        {
          msisdn: '019-9980001',
          amount: '40.00',
        },
      ],
    },
  ];
  const paymentMethod = [
    {
      method: 'e-Wallet',
      extra: 'Extra Perks',
      pages: 'Select Wallet',
      tag: 'Popular',
    },
    {
      method: 'Credit Card',
      extra: 'Extra Perks',
      pages: 'Select Card',
      tag: null,
    },
    { method: 'Online Banking', extra: null, pages: 'Select Bank', tag: null },
  ];

  // Payment Method Max
  const max_length = 12;

  // Handle card click
  const handleCardClick = (itemIndex) => {
    const updatedSelectedCard = {
      ...selectedCard,
    };
    updatedSelectedCard[itemIndex] = !updatedSelectedCard[itemIndex];
    setSelectedCard(updatedSelectedCard);
  };

  const rowsPayment = [];
  for (let i = 0; i < paymentMethod.length; i += 3) {
    const row = paymentMethod.slice(i, i + 3);
    rowsPayment.push(row);
  }
  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* SELECT ACCOUNT TO PAY */}
          {msisdnNumber.map((item, index) => (
            <Box variant="shadow" key={index}>
              <Text variant="h8" bold pb="16px">
                Select Account To Pay
              </Text>
              <Box pb="13px">
                <HStack justifyContent="space-between">
                  <Text variant="body2">{item.msisdn}</Text>
                  <Text variant="body" bold>
                    RM {item.amount}
                  </Text>
                </HStack>
              </Box>
              <Box ml="16px">
                <Box flexDir="row" alignItems="center">
                  <Text variant="body2" mr={2}>
                    {item.supplementaryLine[0].msisdn}
                  </Text>
                  <Badge variant="success">{item.tag}</Badge>
                </Box>
                <Text variant="label" color="gray.500">
                  Due on {item.due}
                </Text>
              </Box>
            </Box>
          ))}

          {/* SELECT PAYMENT METHOD CARD */}
          <Box variant="shadow" mt="12px">
            <Text variant="h8" bold pb="16px">
              Select Payment Method
            </Text>
            {/* Payment Option Card */}
            {rowsPayment.map((row, index) => (
              <HStack key={index} justifyContent="space-between">
                {row.map((payment, itemIndex) => {
                  const isSelected = selectedCard[itemIndex];
                  return (
                    <Pressable
                      onPress={() => {
                        navigation.navigate(payment.pages);
                        handleCardClick(itemIndex);
                      }}
                      key={itemIndex}
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
                        bg={isSelected ? 'primary.5' : 'white'}
                        borderColor={isSelected ? 'primary.600' : 'gray.300'}
                        borderWidth={isSelected ? '2' : '1'}
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
                            top={isSelected ? '-11' : '-10'}
                          >
                            {payment.tag}
                          </Badge>
                        ) : null}
                      </Box>
                    </Pressable>
                  );
                })}
              </HStack>
            ))}
          </Box>
        </Box>
      </ScrollView>

      {/* FOOTER */}
      <Box m="16px">
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Total Payment</Text>
            <Box flexDir="row">
              <Text variant="h6" bold color="primary.600" mr={1}>
                RM 428.00
              </Text>
              <Edit
                width={18}
                color="#1561E8"
                onPress={() => navigation.navigate('Edit Total Payment')}
              />
            </Box>
          </Box>
          <Button>Continue</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default SupplementaryLine;
