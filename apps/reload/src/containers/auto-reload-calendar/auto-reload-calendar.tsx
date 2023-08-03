import React, { useState } from 'react';
// Calendar
import { Calendar } from 'react-native-calendars';

// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Badge,
  Input,
  Button,
  Spacer,
  Modal,
  ScrollView,
  Pressable,
} from 'native-base';
import { Calendars, Copy } from '@cd-next-gen-app/icons';

// Icons

const AutoReloadCalendar = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // CALENDAR
  const [defaultModal, setDefaultModal] = useState(false);
  const [selected, setSelected] = React.useState(null);
  //date today
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;

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
    <>
      <Box flex={1} bg="white">
        <ScrollView>
          <Box flex={1} m="16px">
            {/* RELOAD CARD */}
            <Box variant="shadow" bg="#4481ED">
              <HStack space={[4, 3]} justifyContent="space-between">
                <Box variant="iconRounded">
                  <Copy width={14} height={14} color="#1561E8" />
                </Box>
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

            {/* DATE MONTH */}
            <Box variant="shadow" mt="16px">
              <Text variant="h8" bold pb="16px">
                1. Date of the month
              </Text>
              {/* Amount Input */}
              <Box pb="5px">
                <Input
                  placeholder="Choose between 1 and 28 of the month"
                  InputRightElement={
                    <Box pr={3}>
                      <Calendars
                        color="#667085"
                        onPress={() => setDefaultModal(true)}
                      />
                    </Box>
                  }
                  value={selected?.slice(-2)}
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
          // isDisabled={!number || !isNaN || number < 5 || number > 100}
          >
            Continue
          </Button>
        </Box>
      </Box>

      {/* CALENDAR MODAL */}
      <Modal
        isOpen={defaultModal}
        onClose={() => setDefaultModal(false)}
        accessibilityLabel="Default Modal"
      >
        <Modal.Content
          justifyContent="flex-end"
          width="90%"
          bgColor="white"
          p="10px"
        >
          <Text variant="body" bold>
            Select Activation Date
          </Text>
          <Modal.CloseButton />
          <Calendar
            hideArrows={true}
            hideDayNames={true}
            customHeaderTitle={<Text></Text>}
            onDayPress={(day) => setSelected(`${day.dateString}`)}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#1561E8',
              },
              [today]: {
                selected: true,
                selectedColor: '#FFFFFF',
                selectedTextColor: '#1561E8',
              },
            }}
          />
          <Text py="10px" variant="body2" color="gray.500">
            *Next auto reload will be performed on 19th June 2023
          </Text>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default AutoReloadCalendar;
