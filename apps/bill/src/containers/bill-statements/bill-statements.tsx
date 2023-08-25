import React, { useState } from 'react';
import moment from 'moment';

// Native Base Components
import {
  Box,
  Text,
  HStack,
  ScrollView,
  Spacer,
  Button,
  VStack,
  Pressable,
  Radio,
} from 'native-base';

// Icons
import { ChevronRight, Check } from '@cd-next-gen-app/icons';

//Mock Data
const billStat = [
  {
    id: '1',
    date: '2023-06-10',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },

  {
    id: '2',
    date: '2023-05-10',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
  {
    id: '3',
    date: '2023-04-10',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
  {
    id: '4',
    date: '2023-03-5',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
  {
    id: '5',
    date: '2023-02-10',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
  {
    id: '6',
    date: '2023-02-15',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
  {
    id: '7',
    date: '2022-02-15',
    title: 'Postpaid Bill Statement',
    total: 'RM42.20',
  },
];

// Sort data by date
const sortByDate = (a, b) => {
  const dateA = new Date(`${a.date}`).valueOf();
  const dateB = new Date(`${b.date}`).valueOf();
  if (dateA > dateB) {
    return -1;
  }
  return 1;
};

const BillStatement = ({ navigation }: { navigation: any }) => {
  const [selectedTab, setSelectedTab] = useState('monthly'); // 'monthly' or 'annually'

  // Sort data by date for 'Monthly tab'
  const sortedByDate = billStat.sort(sortByDate);

  // Group data by year
  const groupedDataByYear = sortedByDate.reduce((acc, item) => {
    const year = moment(item.date).format('YYYY');
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // Group data by month and year
  const groupedDataByMonth = sortedByDate.reduce((acc, item) => {
    const monthYear = moment(item.date).format('MMMM yyyy');
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(item);
    return acc;
  }, {});

  console.log(groupedDataByMonth);
  // Sort data by month and year in desc order
  for (const monthYear in groupedDataByMonth) {
    groupedDataByMonth[monthYear].sort(sortByDate);
  }

  // Grouped data on selected tab
  const selectedGroupedData =
    selectedTab === 'monthly' ? groupedDataByMonth : groupedDataByYear;

  const yearKeys = Object.keys(selectedGroupedData);
  if (selectedTab === 'annually') {
    yearKeys.reverse();
  }
  const toggleTab = (tab) => setSelectedTab(tab);

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px" flex={1}>
          <Box justifyContent="center" alignItems="center">
            <Button.Group size="md">
              <Button
                variant={selectedTab === 'monthly' ? 'pillActive' : 'pill'}
                w="50%"
                onPress={() => toggleTab('monthly')}
              >
                Monthly
              </Button>
              <Button
                variant={selectedTab === 'annually' ? 'pillActive' : 'pill'}
                w="50%"
                onPress={() => toggleTab('annually')}
              >
                Annually
              </Button>
            </Button.Group>
          </Box>

          {selectedTab === 'annually'
            ? Object.keys(selectedGroupedData)
                .reverse()
                .map((groupKey) => {
                  const statementsToDisplay = selectedGroupedData[groupKey];

                  return (
                    <Pressable key={groupKey}>
                      {({ isPressed }) => (
                        <Box mt="16px">
                          <HStack>
                            <Text variant="body2" bold>
                              {groupKey}
                            </Text>
                            <Spacer />
                            <Box pr="16px">
                              <Radio.Group name="myRadioGroup">
                                <Radio
                                  value="one"
                                  color={isPressed ? 'none' : '#D0D5DD'}
                                  accessibilityLabel="Threshold"
                                  icon={<Check />}
                                />
                              </Radio.Group>
                            </Box>
                          </HStack>
                          {statementsToDisplay.map((item) => (
                            <Pressable
                              key={item.id}
                              onPress={() => navigation.navigate('Bill Detail')}
                            >
                              <Box
                                variant="shadow"
                                shadow="0px"
                                mt="8px"
                                bg={isPressed ? 'primary.5' : '#F9FAFB'}
                                borderColor={
                                  isPressed ? 'primary.600' : '#F9FAFB'
                                }
                                borderWidth={isPressed ? '2' : '2'}
                              >
                                <HStack>
                                  <VStack>
                                    <Box>
                                      <Text>Yearly Tax Statement</Text>
                                    </Box>
                                  </VStack>
                                  <Spacer />
                                  <Box
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <HStack>
                                      <Box>
                                        <ChevronRight width={20} />
                                      </Box>
                                    </HStack>
                                  </Box>
                                </HStack>
                              </Box>
                            </Pressable>
                          ))}
                        </Box>
                      )}
                    </Pressable>
                  );
                })
            : Object.keys(selectedGroupedData).map((groupKey) => {
                const statementsToDisplay = selectedGroupedData[groupKey];

                return (
                  <Pressable key={groupKey}>
                    {({ isPressed }) => (
                      <Box mt="16px">
                        <HStack>
                          <Text variant="body2" bold>
                            {groupKey}
                          </Text>
                          <Spacer />
                          <Box pr="16px">
                            <Radio.Group name="myRadioGroup">
                              <Radio
                                value="one"
                                color={isPressed ? 'none' : '#D0D5DD'}
                                accessibilityLabel="Threshold"
                                icon={<Check />}
                              />
                            </Radio.Group>
                          </Box>
                        </HStack>
                        {statementsToDisplay.map((item) => (
                          <Pressable
                            key={item.id}
                            onPress={() => navigation.navigate('Bill Detail')}
                          >
                            <Box
                              variant="shadow"
                              shadow="0px"
                              mt="8px"
                              bg={isPressed ? 'primary.5' : '#F9FAFB'}
                              borderColor={
                                isPressed ? 'primary.600' : '#F9FAFB'
                              }
                              borderWidth={isPressed ? '2' : '2'}
                            >
                              <HStack>
                                <VStack>
                                  <Box>
                                    <Text>{item.title}</Text>
                                    <Text color="#475467">
                                      {moment(item.date).format('D MMMM yyyy')}
                                    </Text>
                                  </Box>
                                </VStack>
                                <Spacer />
                                <Box
                                  justifyContent="center"
                                  alignItems="center"
                                >
                                  <HStack>
                                    <Text bold pr="8px">
                                      {item.total}
                                    </Text>
                                    <Box>
                                      <ChevronRight width={20} />
                                    </Box>
                                  </HStack>
                                </Box>
                              </HStack>
                            </Box>
                          </Pressable>
                        ))}
                      </Box>
                    )}
                  </Pressable>
                );
              })}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default BillStatement;
