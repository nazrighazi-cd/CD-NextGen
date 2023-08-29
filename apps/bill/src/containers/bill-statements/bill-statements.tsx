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
  Alert,
} from 'native-base';

// Icons
import { ChevronRight, Check, CheckCircle } from '@cd-next-gen-app/icons';

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

const BillStatement = ({ navigation }: { navigation: any }) => {
  // State variables
  const [selectedTab, setSelectedTab] = useState('monthly'); // 'monthly' or 'annually'
  const [selectedRadios, setSelectedRadios] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); //success alert
  const [showFooter, setShowFooter] = useState(false); //footer

  // Sort data by date
  const sortByDate = (a, b) => {
    const dateA = new Date(`${a.date}`).valueOf();
    const dateB = new Date(`${b.date}`).valueOf();
    if (dateA > dateB) {
      return -1;
    }
    return 1;
  };

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

  // Function to toggle between tabs
  const toggleTab = (tab) => {
    setSelectedRadios({}); // Reset when change tab
    setSelectedTab(tab);
  };

  // Count of selected radio buttons
  const selectedCount = Object.values(selectedRadios).filter(
    (isSelected) => isSelected
  ).length;

  // Handle radio button click
  const handleRadioClick = (groupKey) => {
    // console.log(`Clicked ${groupKey}`);
    const updatedSelectedRadios = {
      ...selectedRadios,
    };
    updatedSelectedRadios[groupKey] = !updatedSelectedRadios[groupKey];
    setSelectedRadios(updatedSelectedRadios);
    setShowFooter(true); //Show footer when click
  };

  // Download button click
  const handleDownload = () => {
    const selectedItems = Object.entries(selectedRadios)
      .filter(([_, isSelected]) => isSelected)
      .map(([groupKey, _]) => groupKey);

    if (selectedItems.length === 0) {
      return;
    }

    setShowSuccessAlert(true); // Show success alert
    setShowFooter(false); // Hide footer

    setTimeout(() => {
      setShowSuccessAlert(false); // Hide success alert
      setShowFooter(true); // Show footer again
    }, 2000);
  };

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

          {/* Annually tab */}
          {selectedTab === 'annually'
            ? Object.keys(selectedGroupedData)
                .reverse()
                .map((groupKey) => {
                  const isSelected = selectedRadios[groupKey]; // Check if radio is selected

                  return (
                    <Pressable key={groupKey}>
                      <Box mt="16px">
                        <HStack>
                          <Text variant="body2" bold>
                            {groupKey}
                          </Text>
                          <Spacer />
                          <Box pr="16px">
                            <Radio.Group
                              name="myRadioGroup"
                              value={isSelected ? 'one' : 'two'}
                              onChange={(value) => handleRadioClick(groupKey)}
                            >
                              <Radio
                                value="one"
                                color={isSelected ? 'primary.600' : '#D0D5DD'}
                                accessibilityLabel="CheckButton"
                                icon={<Check />}
                              />
                            </Radio.Group>
                          </Box>
                        </HStack>
                        <Pressable
                          onPress={() =>
                            navigation.navigate('Bill Detail Yearly')
                          }
                        >
                          <Box
                            variant="shadow"
                            shadow="0px"
                            mt="8px"
                            bg={isSelected ? 'primary.5' : '#F9FAFB'}
                            borderColor={isSelected ? 'primary.600' : '#F9FAFB'}
                            borderWidth={isSelected ? '2' : '2'}
                          >
                            <HStack>
                              <VStack>
                                <Box>
                                  <Text>Yearly Tax Statement</Text>
                                </Box>
                              </VStack>
                              <Spacer />
                              <Box justifyContent="center" alignItems="center">
                                <HStack>
                                  {isSelected ? (
                                    <Radio.Group
                                      name="myRadioGroup"
                                      value={isSelected ? 'one' : 'two'}
                                      onChange={() =>
                                        handleRadioClick(groupKey)
                                      }
                                    >
                                      <Radio
                                        value="one"
                                        color={
                                          isSelected ? 'primary.600' : '#D0D5DD'
                                        }
                                        accessibilityLabel="CheckButton"
                                        icon={<Check />}
                                      />
                                    </Radio.Group>
                                  ) : (
                                    <ChevronRight width={20} />
                                  )}
                                </HStack>
                              </Box>
                            </HStack>
                          </Box>
                        </Pressable>
                      </Box>
                    </Pressable>
                  );
                })
            : //   Monthly tab
              Object.keys(selectedGroupedData).map((groupKey) => {
                const statementsToDisplay = selectedGroupedData[groupKey];
                const isSelected = selectedRadios[groupKey]; // Check if radio is selected

                return (
                  <Pressable key={groupKey}>
                    <Box mt="16px">
                      <HStack>
                        <Text variant="body2" bold>
                          {groupKey}
                        </Text>
                        <Spacer />
                        <Box pr="16px">
                          <Radio.Group
                            name="myRadioGroup"
                            value={isSelected ? 'one' : 'two'}
                            onChange={(value) => handleRadioClick(groupKey)}
                          >
                            <Radio
                              value="one"
                              color={isSelected ? 'primary.600' : '#D0D5DD'}
                              accessibilityLabel="CheckButton"
                              icon={<Check />}
                            />
                          </Radio.Group>
                        </Box>
                      </HStack>
                      {statementsToDisplay.map((item) => (
                        <Pressable
                          key={item.id}
                          onPress={() =>
                            navigation.navigate('Bill Detail Monthly')
                          }
                        >
                          <Box
                            variant="shadow"
                            shadow="0px"
                            mt="8px"
                            bg={isSelected ? 'primary.5' : '#F9FAFB'}
                            borderColor={isSelected ? 'primary.600' : '#F9FAFB'}
                            borderWidth={isSelected ? '2' : '2'}
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
                              <Box justifyContent="center" alignItems="center">
                                <HStack>
                                  <Text bold pr="8px">
                                    {item.total}
                                  </Text>
                                  {isSelected ? (
                                    <Radio.Group
                                      name="myRadioGroup"
                                      value={isSelected ? 'one' : 'two'}
                                      onChange={() =>
                                        handleRadioClick(groupKey)
                                      }
                                    >
                                      <Radio
                                        value="one"
                                        color={
                                          isSelected ? 'primary.600' : '#D0D5DD'
                                        }
                                        accessibilityLabel="CheckButton"
                                        icon={<Check />}
                                      />
                                    </Radio.Group>
                                  ) : (
                                    <ChevronRight width={20} />
                                  )}
                                </HStack>
                              </Box>
                            </HStack>
                          </Box>
                        </Pressable>
                      ))}
                    </Box>
                  </Pressable>
                );
              })}
        </Box>
      </ScrollView>

      {/* Footer */}
      {(selectedTab === 'monthly' || selectedTab === 'annually') &&
        showFooter &&
        selectedCount > 0 && (
          <Box m="16px">
            <HStack justifyContent="space-between">
              <Box justifyContent="center" alignItems="center">
                <Text variant="body1">
                  {selectedCount}{' '}
                  {selectedCount === 1 ? 'selected' : 'selected'}
                </Text>
              </Box>
              <Button onPress={handleDownload}>Download</Button>
            </HStack>
          </Box>
        )}

      {/* Success Alert */}
      {showSuccessAlert && (
        <Box m="16px">
          <Alert variant="success">
            <Box justifyContent="center" alignItems="center">
              <HStack>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  pl="12px"
                  mr="8px"
                >
                  <CheckCircle color="#027A48" width="16px" />
                </Box>
                <Box>
                  <Text variant="body2">
                    {selectedCount} item
                    {selectedCount === 1 ? ' will' : 's will'} be downloaded.
                    See notification for details.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default BillStatement;
