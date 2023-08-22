import React, { useState, useEffect } from 'react';
// Native Base Components
import {
  useTheme,
  Text,
  Box,
  HStack,
  VStack,
  Badge,
  Button,
  Modal,
  FlatList,
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
    date: '2023-08-04',
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
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= sevenDaysAgo && transactionDate <= currentDate;
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

const TransactionHistory = ({ navigation }) => {
  const theme = useTheme();
  // MODAL
  const [bottomModal, setBottomModal] = useState(false);

  // FILTER TABS
  const [activeTab, setActiveTab] = useState('All Transactions');
  const [filteredTabData, setFilteredTabData] = useState([]);
  const [tempfilteredTabData, setTempFilteredTabData] = useState([]);
  // Filter by Tab
  const handleTabClick = (tab) => {
    setSelectedBadge(null);
    setActiveTab(tab);
    setTempFilteredTabData([]);
    if (tab === 'All Transactions') {
      setFilteredTabData(transactions);
    } else {
      const filtered = transactions.filter((item) => item.service === tab);
      setFilteredTabData(filtered);
    }
  };
  // Initialize filteredData with All when the component mounts
  useEffect(() => {
    setFilteredTabData(transactions);
  }, []);

  // FILTER BADGE
  const [selectedBadge, setSelectedBadge] = useState(null);
  // Select Filter from Modal
  const handleFilterSelection = (filter) => {
    setSelectedBadge(filter);
    setBottomModal(false);
    onFilterData(filter);
  };
  // Filter by:
  const onFilterData = (selectedBadge = 'Today') => {
    // Filter transactions based on the selected badge
    let filteredTransactions = [];
    if (selectedBadge === 'Today') {
      const today = new Date();
      filteredTransactions = filteredTabData.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return (
          transactionDate.getDate() === today.getDate() &&
          transactionDate.getMonth() === today.getMonth() &&
          transactionDate.getFullYear() === today.getFullYear()
        );
      });
    } else if (selectedBadge === 'Last 7 Days') {
      filteredTransactions = filterPastSevenDaysTransactions(filteredTabData);
    } else if (selectedBadge === 'This Month') {
      const currentMonth = new Date().getMonth() + 1;
      filteredTransactions = filterTransactionsByMonth(
        filteredTabData,
        currentMonth
      );
    } else if (selectedBadge === 'Last 3 Months') {
      filteredTransactions = filterLastThreeMonthsTransactions(filteredTabData);
    } else if (selectedBadge === '2022') {
      filteredTransactions = filterLastYearTransactions(filteredTabData);
    }
    setTempFilteredTabData(filteredTransactions);
  };

  return (
    <Box bg="white" h="100%" w="100%" maxWidth="100%">
      <Box m="16px">
        {/* MY TRANSACTION */}
        <Box flexDir="row" justifyContent="space-between">
          {activeTab ? <Text variant="body">{activeTab}</Text> : null}
          <Box alignContent="flex-end" flexDir="row" alignItems="center">
            <Box>
              <Settings width="20px" color="#1561E8" />
            </Box>
            <Box pl="10px">
              <Text
                variant="body"
                color="primary.600"
                onPress={() => setBottomModal(true)}
              >
                Filter
              </Text>
            </Box>
          </Box>
        </Box>

        {/* TRANSACTION HISTORY LIST */}
        <Box mt="6px">
          {/* Selected Badge from filter */}
          {selectedBadge ? (
            <Text variant="h8" bold py="8px">
              {selectedBadge}
            </Text>
          ) : null}
          {/* History List */}
          <Box variant="shadow" py="0px">
            <FlatList
              data={selectedBadge ? tempfilteredTabData : filteredTabData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <Box key={index} flexDir="row" justifyContent="space-between">
                  <HStack py="16px" space={2}>
                    <VStack>
                      <Text variant="body" color="gray.700">
                        {item.service}
                      </Text>
                      <Text variant="body2" color="gray.600">
                        {item.description}
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack alignItems="center" space="4px">
                    <Text variant="body">RM {item.amount}</Text>
                    <ChevronRight width={20} color="#475467" />
                  </HStack>
                </Box>
              )}
            />
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
            >
              <Modal.CloseButton />
              {/* Date Filter */}
              <Box pb="24px">
                <Text variant="h5" bold color="gray.900" pb="19px">
                  Filter
                </Text>
                <Text variant="h6" color="gray.900" pb="16px">
                  Date Range
                </Text>
                <HStack alignItems="center" space="12px">
                  <Pressable onPress={() => handleFilterSelection('Today')}>
                    <Badge variant="outline">{'Today'}</Badge>
                  </Pressable>
                  <Pressable
                    onPress={() => handleFilterSelection('Last 7 Days')}
                  >
                    <Badge variant="outline">{'Last 7 Days'}</Badge>
                  </Pressable>
                  <Pressable
                    onPress={() => handleFilterSelection('This Month')}
                  >
                    <Badge variant="outline">{'This Month'}</Badge>
                  </Pressable>
                </HStack>
                <HStack alignItems="center" pt="12px" space="12px">
                  <Pressable
                    onPress={() => handleFilterSelection('Last 3 Months')}
                  >
                    <Badge variant="outline">{'Last 3 Months'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleFilterSelection('2022')}>
                    <Badge variant="outline">{'2023'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleFilterSelection('2022')}>
                    <Badge variant="outline">{'2022'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleFilterSelection('2022')}>
                    <Badge variant="outline">{'2021'}</Badge>
                  </Pressable>
                </HStack>
              </Box>
              <Box borderBottomWidth={1} borderBottomColor="gray.200"></Box>
              {/* Type Filter */}
              <Box pt="24px">
                <Text variant="h6" color="gray.900" pb="16px">
                  Type
                </Text>
                <HStack alignItems="center" space="12px">
                  <Pressable onPress={() => handleTabClick('All Transactions')}>
                    <Badge variant="outline">{'All'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleTabClick('Reload')}>
                    <Badge variant="outline">{'Reload'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleTabClick('Add-Ons')}>
                    <Badge variant="outline">{'Add-Ons'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleTabClick('Billing')}>
                    <Badge variant="outline">{'Billing'}</Badge>
                  </Pressable>
                </HStack>
                <HStack alignItems="center" pt="12px" space="12px">
                  <Pressable onPress={() => handleTabClick('Subscriptions')}>
                    <Badge variant="outline">{'Subscriptions'}</Badge>
                  </Pressable>
                  <Pressable onPress={() => handleTabClick('Vouchers')}>
                    <Badge variant="outline">{'Vouchers'}</Badge>
                  </Pressable>
                </HStack>
              </Box>
              {/* Button */}
              <HStack pt="32px" space="16px" justifyContent="space-between">
                <Button variant="secondaryGray" width="48%">
                  Reset
                </Button>
                <Button width="48%">Apply</Button>
              </HStack>
            </Modal.Content>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};
export default TransactionHistory;