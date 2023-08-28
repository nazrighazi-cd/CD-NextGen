import React, { useState, useEffect } from 'react';
import moment from 'moment';
// Native Base Components
import {
  Text,
  Box,
  HStack,
  VStack,
  Badge,
  Button,
  Modal,
  Pressable,
  ScrollView,
} from 'native-base';
// Icons
import { ChevronRight, Settings } from '@cd-next-gen-app/icons';

// MOCK DATA
const transactions = [
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-08-23',
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-08-03',
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-07-26',
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-07-20',
  },
  {
    service: 'Add-Ons',
    amount: '7',
    description: 'Postpaid 50 Bill',
    date: '2023-07-25',
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-15',
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-20',
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-10',
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-04',
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-06-20',
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-10',
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-04',
  },
];

// FILTER 7 DAYS
function filterPastSevenDaysTransactions(transactions) {
  const currentDate = moment();
  const sevenDaysAgo = moment().subtract(7, 'days');
  return transactions.filter((transaction) => {
    const transactionDate = moment(transaction.date);
    return transactionDate.isBetween(sevenDaysAgo, currentDate, null, '[]');
  });
}
// FILTER SPECIFIC MONTH
function filterTransactionsByMonth(transactions, targetMonth) {
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1; // January is 0, so we add 1 to get the actual month number.
    return transactionMonth === targetMonth;
  });
}
// FILTER THREE MONTH
function filterLastThreeMonthsTransactions(transactions) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // January is 0, so we add 1 to get the actual month number.
  const currentYear = currentDate.getFullYear();
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1; // January is 0, so we add 1 to get the actual month number.
    const transactionYear = transactionDate.getFullYear();
    const monthsDiff =
      (currentYear - transactionYear) * 12 + (currentMonth - transactionMonth);
    return monthsDiff <= 3 && monthsDiff > 0;
  });
}
// FILTER LAST YEAR
function filterLastYearTransactions(transactions) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionYear = transactionDate.getFullYear();
    const yearsDiff = currentYear - transactionYear;
    return yearsDiff === 1;
  });
}

const TransactionHistory = () => {
  // MODAL
  const [bottomModal, setBottomModal] = useState(false);

  // FILTER TYPE
  const [activeType, setActiveType] = useState('All Transactions');
  const [filteredTypeData, setFilteredTypeData] = useState([]);
  const [tempfilteredTypeData, setTempFilteredTypeData] = useState([]);
  // Filter by Type
  const handleTypeClick = (type) => {
    setSelectedDate(null);
    setActiveType(type);
    setTempFilteredTypeData([]);
    if (type === 'All Transactions') {
      setFilteredTypeData(transactions);
    } else {
      const filtered = transactions.filter((item) => item.service === type);
      setFilteredTypeData(filtered);
    }
  };
  // Initialize filteredData with All when the component mounts
  useEffect(() => {
    setFilteredTypeData(transactions);
  }, []);

  // FILTER BADGE
  const [activeDate, setActiveDate] = useState('All Date');
  const [selectedDate, setSelectedDate] = useState(null);
  // Select Filter from Modal
  const handleFilterSelection = (filter) => {
    setSelectedDate(filter);
    onFilterData(filter);
    setActiveDate(filter);
  };
  // Filter by:
  const onFilterData = (selectedDate = 'All Date') => {
    // Filter transactions based on the selected
    let filteredTransactions = transactions;
    if (selectedDate === 'All Date') {
      filteredTransactions = transactions;
    } else if (selectedDate === 'Last 7 Days') {
      filteredTransactions = filterPastSevenDaysTransactions(filteredTypeData);
    } else if (selectedDate === 'This Month') {
      const currentMonth = new Date().getMonth() + 1;
      filteredTransactions = filterTransactionsByMonth(
        filteredTypeData,
        currentMonth
      );
    } else if (selectedDate === 'Last 3 Months') {
      filteredTransactions =
        filterLastThreeMonthsTransactions(filteredTypeData);
    } else if (selectedDate === '2022') {
      filteredTransactions = filterLastYearTransactions(filteredTypeData);
    }
    setTempFilteredTypeData(filteredTransactions);
  };

  // DATA GROUPING
  const groupingData = selectedDate ? tempfilteredTypeData : filteredTypeData;
  const groupedData = {};
  groupingData.forEach((item) => {
    const date = new Date(item.date);
    const monthYear = `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getFullYear()}`;
    if (!groupedData[monthYear]) {
      groupedData[monthYear] = [];
    }
    groupedData[monthYear].push(item);
  });

  return (
    <Box bg="white" h="100%" w="100%" maxWidth="100%">
      <Box m="16px">
        {/* MY TRANSACTION */}
        <Box flexDir="row" justifyContent="space-between">
          {activeType ? <Text variant="body">{activeType}</Text> : null}
          <Box alignContent="flex-end" flexDir="row" alignItems="center">
            <Pressable onPress={() => setBottomModal(true)}>
              <Box flexDir="row">
                <Box>
                  <Settings width="20px" color="#1561E8" />
                </Box>
                <Box pl="10px">
                  <Text variant="body" color="primary.600">
                    Filter
                  </Text>
                </Box>
              </Box>
            </Pressable>
          </Box>
        </Box>
      </Box>
      <ScrollView>
        <Box mx="16px">
          {/* TRANSACTION HISTORY LIST */}
          <Box>
            {/* Selected Badge from filter */}
            {selectedDate ? (
              <Text variant="h8" bold pb="8px">
                {selectedDate}
              </Text>
            ) : null}
            {/* History List */}
            <Box>
              {Object.keys(groupedData).map((monthYear) => (
                <Box key={monthYear} pb="8px">
                  <Text variant="h8" bold pb="8px">
                    {monthYear}
                  </Text>
                  <Box variant="shadow" py="0px">
                    {groupedData[monthYear].map((item, index) => (
                      <Box
                        key={index}
                        flexDir="row"
                        justifyContent="space-between"
                        borderBottomWidth={1}
                        borderBottomColor="gray.200"
                        py="16px"
                      >
                        <VStack>
                          <Text variant="body" color="gray.700">
                            {item.service}
                          </Text>
                          <Text variant="body2" color="gray.600">
                            {item.description}
                          </Text>
                        </VStack>
                        <HStack alignItems="center" space="4px">
                          <Text variant="body" bold>
                            RM {item.amount}
                          </Text>
                          <ChevronRight width={20} color="#475467" />
                        </HStack>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {/* FILTER MODAL */}
            <Modal
              variant="bottom"
              isOpen={bottomModal}
              onClose={() => setBottomModal(false)}
              accessibilityLabel="Default Modal"
            >
              <Modal.Content
                justifyContent="flex-end"
                width="100%"
                borderTopRadius="24px"
                borderBottomRadius="0px"
                backgroundColor="white"
              >
                <Modal.CloseButton />
                {/* Date Filter */}
                <Box pb="24px">
                  <Text variant="h5" bold color="gray.900" pb="19px">
                    Filter
                  </Text>
                  <Text
                    variant="h6"
                    fontWeight="600"
                    color="gray.900"
                    pb="16px"
                  >
                    Date Range
                  </Text>
                  <HStack alignItems="center" space="12px">
                    <Pressable
                      onPress={() => handleFilterSelection('All Date')}
                    >
                      <Badge
                        size="md"
                        variant={activeDate === 'All Date' ? null : 'outline'}
                      >
                        {'All'}
                      </Badge>
                    </Pressable>
                    <Pressable
                      onPress={() => handleFilterSelection('Last 7 Days')}
                    >
                      <Badge
                        size="md"
                        variant={
                          activeDate === 'Last 7 Days' ? null : 'outline'
                        }
                      >
                        {'Last 7 Days'}
                      </Badge>
                    </Pressable>
                    <Pressable
                      onPress={() => handleFilterSelection('This Month')}
                    >
                      <Badge
                        size="md"
                        variant={activeDate === 'This Month' ? null : 'outline'}
                      >
                        {'This Month'}
                      </Badge>
                    </Pressable>
                  </HStack>
                  <HStack alignItems="center" pt="12px" space="12px">
                    <Pressable
                      onPress={() => handleFilterSelection('Last 3 Months')}
                    >
                      <Badge
                        size="md"
                        variant={
                          activeDate === 'Last 3 Months' ? null : 'outline'
                        }
                      >
                        {'Last 3 Months'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleFilterSelection('2023')}>
                      <Badge
                        size="md"
                        variant={activeDate === '2023' ? null : 'outline'}
                      >
                        {'2023'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleFilterSelection('2022')}>
                      <Badge
                        size="md"
                        variant={activeDate === '2022' ? null : 'outline'}
                      >
                        {'2022'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleFilterSelection('2021')}>
                      <Badge
                        size="md"
                        variant={activeDate === '2021' ? null : 'outline'}
                      >
                        {'2021'}
                      </Badge>
                    </Pressable>
                  </HStack>
                </Box>
                <Box borderBottomWidth={1} borderBottomColor="gray.200"></Box>

                {/* Type Filter */}
                <Box pt="24px">
                  <Text
                    variant="h6"
                    fontWeight="600"
                    color="gray.900"
                    pb="16px"
                  >
                    Type
                  </Text>
                  <HStack alignItems="center" space="12px">
                    <Pressable
                      onPress={() => handleTypeClick('All Transactions')}
                    >
                      <Badge
                        size="md"
                        variant={
                          activeType === 'All Transactions' ? null : 'outline'
                        }
                      >
                        {'All'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleTypeClick('Reload')}>
                      <Badge
                        size="md"
                        variant={activeType === 'Reload' ? null : 'outline'}
                      >
                        {'Reload'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleTypeClick('Add-Ons')}>
                      <Badge
                        size="md"
                        variant={activeType === 'Add-Ons' ? null : 'outline'}
                      >
                        {'Add-Ons'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleTypeClick('Billing')}>
                      <Badge
                        size="md"
                        variant={activeType === 'Billing' ? null : 'outline'}
                      >
                        {'Billing'}
                      </Badge>
                    </Pressable>
                  </HStack>
                  <HStack alignItems="center" pt="12px" space="12px">
                    <Pressable onPress={() => handleTypeClick('Subscriptions')}>
                      <Badge
                        size="md"
                        variant={
                          activeType === 'Subscriptions' ? null : 'outline'
                        }
                      >
                        {'Subscriptions'}
                      </Badge>
                    </Pressable>
                    <Pressable onPress={() => handleTypeClick('Vouchers')}>
                      <Badge
                        size="md"
                        variant={activeType === 'Vouchers' ? null : 'outline'}
                      >
                        {'Vouchers'}
                      </Badge>
                    </Pressable>
                  </HStack>
                </Box>

                {/* Button */}
                <HStack pt="32px" space="16px" justifyContent="space-between">
                  <Button variant="secondaryGray" width="48%">
                    Reset
                  </Button>
                  <Button width="48%" onPress={() => setBottomModal(false)}>
                    Apply
                  </Button>
                </HStack>
              </Modal.Content>
            </Modal>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default TransactionHistory;
