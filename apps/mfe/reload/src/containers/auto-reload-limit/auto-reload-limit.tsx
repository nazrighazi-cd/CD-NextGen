import React from 'react';
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
} from 'native-base';
//Icons
import Copy from '../../assets/icons/copy-01.svg';

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
  const [number, onChangeNumber] = React.useState('');

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {/* RELOAD CARD */}
          <Box variant="shadow" bg="#4481ED">
            <HStack space={[4, 3]} justifyContent="space-between">
              <Box variant="iconRounded">
                <Copy width="14px" height="14px" />
              </Box>
              <Box>
                <Text variant="h6" color="white" pb="1.0">
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
            <Text variant="body2" bold pb="16px">
              1. Auto Reload when credit balance falls below:
            </Text>
            {/* Amount Input */}
            <Box pb="5px">
              <Input
                placeholder="Enter an amount"
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
            </Box>
            {/* Additional Text */}
            <Text variant="label" pb="8px" color="gray.500">
              Amount must be between RM5 - RM100
            </Text>
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
        </Box>
      </ScrollView>
      {/* FOOTER */}
      <Box m="16px">
        <Button
          isDisabled={!number || !isNaN || number < '5' || number > '100'}
          onPress={() => navigation.navigate('Select Cards')}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};
export default AutoReloadLimit;
