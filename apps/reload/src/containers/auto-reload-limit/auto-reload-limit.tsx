import React, { useState } from 'react';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Input,
  Badge,
  Spacer,
  Pressable,
  ScrollView,
  Avatar,
} from 'native-base';
//Icons
import { Copy } from '@cd-next-gen-app/icons';
// Components
import FloatingInput from '../../themes/components/FloatingInput';

const AutoReloadLimit = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const reloadAmount = [
    { price: '5', validity: 'Valid for 5 Days', tag: 'Popular' },
    { price: '6', validity: 'Valid for 5 Days', tag: null },
    { price: '7', validity: 'Valid for 5 Days', tag: 'Popular' },
    { price: '8', validity: 'Valid for 5 Days', tag: null },
    { price: '9', validity: 'Valid for 5 Days', tag: null },
    { price: '10', validity: 'Valid for 5 Days', tag: null },
  ];

  const rowsAmount = [];
  for (let i = 0; i < reloadAmount.length; i += 3) {
    const row = reloadAmount.slice(i, i + 3);
    rowsAmount.push(row);
  }

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* RELOAD CARD */}
          <Box variant="shadow" bg="#4481ED">
            <HStack space={[4, 3]} justifyContent="space-between">
              <Avatar variant="rounded">
                <Copy width={14} height={14} color="#1561E8" />
              </Avatar>
              <Box>
                <Text variant="body1" color="white" pb="1.0">
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

          {/* AUTO RELOAD BALANCE FALLS */}
          <Box variant="shadow" mt="16px">
            <Text variant="h8" bold pb="16px">
              1. Auto Reload when credit balance falls below:
            </Text>
            {/* Amount Input */}
            <Box pb="8px">
              <FloatingInput
                label="Bill Amount"
                placeholder="Enter an amount"
                name="bill"
                type="number"
              />
            </Box>
            {/* Additional Text */}
            <Text variant="label" pb="8px" color="gray.500">
              Amount must be between RM5 - RM100
            </Text>
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
        </Box>
      </ScrollView>

      {/* FOOTER */}
      <Box m="16px">
        <Button
          // isDisabled={!isNumber}
          onPress={() => navigation.navigate('Select Cards')}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};
export default AutoReloadLimit;
