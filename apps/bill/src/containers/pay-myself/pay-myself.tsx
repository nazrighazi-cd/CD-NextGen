import React, { useState } from 'react';
// Native Base
import {
  Box,
  Text,
  HStack,
  VStack,
  Badge,
  Radio,
  Spacer,
  Button,
  ScrollView,
  Pressable,
} from 'native-base';
import { Check, ChevronRight, Edit } from '@cd-next-gen-app/icons';

export const PayMyself = ({ navigation }) => {
  const [value, setValue] = useState('one');
  const [selectedRadios, setSelectedRadios] = useState({});
  const [selectedCard, setSelectedCard] = useState({});

  // Mock Data
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
        {
          msisdn: '019-9980002',
          amount: '40.00',
        },
        {
          msisdn: '019-9980003',
          amount: '40.00',
        },
      ],
    },
    {
      id: '2',
      msisdn: '019-9980001',
      tag: 'Suspended',
      tagLine: null,
      amount: '466.00',
      due: '30 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '3',
      msisdn: '019-9980002',
      tag: 'Active',
      tagLine: null,
      amount: '98.00',
      due: '15 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '4',
      msisdn: '019-9980003',
      tag: 'Active',
      tagLine: null,
      amount: '230.00',
      due: '2 August 2023',
      supplementaryLine: null,
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

  const rowsPayment = [];
  for (let i = 0; i < paymentMethod.length; i += 3) {
    const row = paymentMethod.slice(i, i + 3);
    rowsPayment.push(row);
  }

  // Payment Method Max
  const max_length = 12;

  // Handle radio click
  const handleRadioClick = (index) => {
    const updatedSelectedRadios = {
      ...selectedRadios,
    };
    updatedSelectedRadios[index] = !updatedSelectedRadios[index];
    setSelectedRadios(updatedSelectedRadios);
  };

  // Handle card click
  const handleCardClick = (itemIndex) => {
    const updatedSelectedCard = {
      ...selectedCard,
    };
    updatedSelectedCard[itemIndex] = !updatedSelectedCard[itemIndex];
    setSelectedCard(updatedSelectedCard);
  };

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* SELECT ACCOUNT TO PAY */}
          <Box variant="shadow">
            <HStack justifyContent="space-between" mb={2}>
              <Text variant="h8" bold>
                Select Account To Pay
              </Text>
              <Pressable
                onPress={() => navigation.navigate('Myself Bill Details')}
              >
                <Box flexDirection="row" alignItems="center">
                  <Text variant="body2" color="primary.600">
                    More Info
                  </Text>
                  <ChevronRight width={16} color="#1561E8" />
                </Box>
              </Pressable>
            </HStack>
            {/* List */}
            {msisdnNumber.map((item, index) => {
              const isSelected = selectedRadios[index];
              return (
                <Pressable key={index}>
                  <Box
                    variant="border"
                    mb="8px"
                    bg={isSelected ? 'primary.5' : 'white'}
                    borderColor={isSelected ? 'primary.600' : 'gray.300'}
                    borderWidth={isSelected ? '2' : '1'}
                  >
                    <HStack>
                      <Box>
                        <Text variant="body" bold>
                          {item.msisdn}
                        </Text>
                        <Text variant="body">RM {item.amount}</Text>
                      </Box>
                      <Spacer />
                      <Box alignItems="flex-end" mr={3}>
                        <HStack space={2}>
                          <Badge
                            variant={
                              item.tag === 'Suspended' ? 'warning' : 'success'
                            }
                          >
                            {item.tag}
                          </Badge>
                          {item.tagLine ? <Badge>{item.tagLine}</Badge> : null}
                        </HStack>
                        <Text variant="label" mt={1}>
                          Due on {item.due}
                        </Text>
                      </Box>
                      <Box mt={2}>
                        <Radio.Group
                          name="myRadioGroup"
                          value={isSelected ? 'one' : 'two'}
                          onChange={(value) => handleRadioClick(index)}
                        >
                          <Radio
                            value="one"
                            accessibilityLabel="CheckButton"
                            icon={<Check />}
                            color={isSelected ? 'primary.600' : '#D0D5DD'}
                          ></Radio>
                        </Radio.Group>
                      </Box>
                    </HStack>
                  </Box>
                </Pressable>
              );
            })}
          </Box>

          {/* SELECT PAYMENT METHOD CARD */}
          <Box variant="shadow" mt="16px">
            <Text variant="h8" bold pb="16px">
              Select Payment Method
            </Text>
            {/* Payment Option Card */}
            <VStack justifyContent="center">
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
            </VStack>
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

export default PayMyself;
