import React, { useState } from 'react';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Icon,
  Badge,
  Input,
  Button,
  Spacer,
  Modal,
  ScrollView,
  Pressable,
} from 'native-base';
// Icons
import CalendarIcon from '../../assets/icons/calendar.svg';

const AutoReloadCalendar = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  const [defaultModal, setDefaultModal] = useState(false);

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

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (date) => {
    setShowDatePicker(false);

    console.log(date.getDate());
  };

  return (
    <>
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

            {/* DATE MONTH */}
            <Box variant="shadow" mt="16px">
              <Text variant="body2" bold pb="16px">
                1. Date of the month
              </Text>
              {/* Amount Input */}
              <Box pb="5px">
                <Input
                  placeholder="Choose between 1 and 28 of the month"
                  InputRightElement={
                    <Box pr={3}>
                      <CalendarIcon
                        color="#667085"
                        onPress={() => setDefaultModal(true)}
                      />
                    </Box>
                  }
                  onChangeText={onChangeNumber}
                  value={number}
                  keyboardType="numeric"
                ></Input>
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
                              borderColor={
                                isPressed ? 'primary.600' : 'gray.300'
                              }
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

          {/* FOOTER */}
          <Box m="16px">
            <Button
            // isDisabled={!number || !isNaN || number < 5 || number > 100}
            >
              Continue
            </Button>
          </Box>
        </ScrollView>
      </Box>

      {/* CALENDAR MODAL */}
      <Modal
        isOpen={defaultModal}
        onClose={() => setDefaultModal(false)}
        accessibilityLabel="Default Modal"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Text variant="h6" bold>
            Select Activation Date
          </Text>
          <Box>Calendar</Box>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default AutoReloadCalendar;
