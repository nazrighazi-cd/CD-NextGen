import React, { useState } from 'react';
// Native Base Components
import {
  useTheme,
  Text,
  Box,
  HStack,
  Badge,
  Button,
  Modal,
  FlatList,
  Pressable,
  ScrollView,
} from 'native-base';
// Icons
import Setting from '../../assets/icons/settings-04.svg';
import Calendar from '../../assets/icons/calendar.svg';

// MOCK DATA
const transactions = [
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-07-24',
    icon: <Calendar />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-07-20',
    icon: <Calendar />,
  },
  {
    service: 'Add-Ons',
    amount: '7',
    description: 'Postpaid 50 Bill',
    date: '2023-07-25',
    icon: <Calendar />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-15',
    icon: <Calendar />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-20',
    icon: <Calendar />,
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-10',
    icon: <Calendar />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-04',
    icon: <Calendar />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-06-20',
    icon: <Calendar />,
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-10',
    icon: <Calendar />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-04',
    icon: <Calendar />,
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

const TransactionHistory = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  // MODAL
  const [bottomModal, setBottomModal] = useState(false);

  // FILTER TABS
  const [activeTab, setActiveTab] = useState('All Transactions');
  const [filteredData, setFilteredData] = useState([]);
  // Filter Tab by:
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'All Transactions') {
      setFilteredData(transactions);
    } else {
      const filtered = transactions.filter((item) => item.service === tab);
      setFilteredData(filtered);
    }
  };

  // FILTER BADGE
  const [selectedFilter, setSelectedFilter] = useState('Today');
  // Select Filter from Modal
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
    setBottomModal(false);
  };
  // Filter transactions based on the selected badge
  let filteredTransactions = [];
  // Filter by:
  if (selectedFilter === 'Today') {
    const today = new Date();
    filteredTransactions = filteredData.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getDate() === today.getDate() &&
        transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear()
      );
    });
  } else if (selectedFilter === 'Last 7 Days') {
    filteredTransactions = filterPastSevenDaysTransactions(filteredData);
  } else if (selectedFilter === 'This Month') {
    const currentMonth = new Date().getMonth() + 1;
    filteredTransactions = filterTransactionsByMonth(
      filteredData,
      currentMonth
    );
  } else if (selectedFilter === 'Last 3 Months') {
    filteredTransactions = filterLastThreeMonthsTransactions(filteredData);
  } else if (selectedFilter === '2022') {
    filteredTransactions = filterLastYearTransactions(filteredData);
  }

  return (
    <>
      <Box bg="white" h="100%" w="100%" maxWidth="100%">
        <ScrollView>
          {/* TAB */}
          <Box alignItems="center" mt="16px">
            <Button.Group isAttached>
              <Button
                variant={activeTab === 'All Transactions' ? 'tabActive' : 'tab'}
                onPress={() => handleTabClick('All Transactions')}
              >
                {'All Transactions'}
              </Button>
              <Button
                variant={activeTab === 'Billing' ? 'tabActive' : 'tab'}
                onPress={() => handleTabClick('Billing')}
              >
                {'Billing'}
              </Button>
              <Button
                variant={activeTab === 'Add-Ons' ? 'tabActive' : 'tab'}
                onPress={() => handleTabClick('Add-Ons')}
              >
                {'Add-Ons'}
              </Button>
              <Button
                variant={activeTab === 'Subscriptions' ? 'tabActive' : 'tab'}
                onPress={() => handleTabClick('Subscriptions')}
              >
                {'Subscriptions'}
              </Button>
            </Button.Group>
          </Box>
          <Box m="16px">
            {/* MY TRANSACTION */}
            <Box flexDir="row" justifyContent="space-between">
              <Text
                variant="h7"
                onPress={() =>
                  navigation.navigate('Transaction History Details')
                }
              >
                My Transaction
              </Text>
              <Box alignContent="flex-end" flexDir="row" alignItems="center">
                <Box>
                  <Setting width="20px" />
                </Box>
                <Box pl="10px">
                  <Text
                    variant="h7"
                    color="primary.600"
                    onPress={() => setBottomModal(true)}
                  >
                    Filter
                  </Text>
                </Box>
              </Box>
            </Box>

            {/* TRANSACTION HISTORY LIST */}
            <Box mt="16px">
              <Text variant="label" bold color="#667085">
                {selectedFilter}
              </Text>
              {/* History List */}
              <FlatList
                data={filteredTransactions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Box key={index} flexDir="row" justifyContent="space-between">
                    <HStack py="3" space={2}>
                      <Box
                        w="35px"
                        h="35px"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {React.cloneElement(item.icon, {
                          width: '100%',
                          height: '100%',
                        })}
                      </Box>
                      <Box>
                        <Text variant="h7">{item.service}</Text>
                        <Text fontSize="10px">{item.description}</Text>
                      </Box>
                    </HStack>
                    <HStack py="3">
                      <Text variant="h7">RM {item.amount}</Text>
                    </HStack>
                  </Box>
                )}
              />

              {/* FILTER MODAL */}
              <Modal
                variant="bottom"
                isOpen={bottomModal}
                onClose={() => setBottomModal(false)}
                accessibilityLabel="Default Modal"
                _backdrop={{
                  bg: 'black',
                }}
              >
                <Modal.Content
                  justifyContent="flex-end"
                  width="100%"
                  borderTopRadius="24px"
                  borderBottomRadius="0px"
                >
                  <Modal.CloseButton />
                  <Text variant="h6" bold color="gray.900" pb={2}>
                    Filter by
                  </Text>
                  <HStack alignItems="center">
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
                    <Pressable
                      onPress={() => handleFilterSelection('Last 3 Months')}
                    >
                      <Badge variant="outline">{'Last 3 Months'}</Badge>
                    </Pressable>
                    <Pressable onPress={() => handleFilterSelection('2022')}>
                      <Badge variant="outline">{'2022'}</Badge>
                    </Pressable>
                  </HStack>
                </Modal.Content>
              </Modal>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};
export default TransactionHistory;
