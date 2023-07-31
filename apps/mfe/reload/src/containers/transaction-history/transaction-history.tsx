import React, { useState, useEffect } from 'react';
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
    date: '2023-07-26',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-07-20',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Add-Ons',
    amount: '7',
    description: 'Postpaid 50 Bill',
    date: '2023-07-25',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-15',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-06-20',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-10',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2023-05-04',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Billing',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-06-20',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Add-Ons',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-10',
    icon: <Calendar color="#667085" />,
  },
  {
    service: 'Subscriptions',
    amount: '110',
    description: 'Postpaid 50 Bill',
    date: '2022-05-04',
    icon: <Calendar color="#667085" />,
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
  // Initialize filteredData with all transactions when the component mounts
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
    <>
      <Box bg="white" h="100%" w="100%" maxWidth="100%">
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
            <Text variant="body">My Transaction</Text>
            <Box alignContent="flex-end" flexDir="row" alignItems="center">
              <Box>
                <Setting width="20px" color="#1561E8" />
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
          <Box mt="16px">
            <Text variant="label" bold color="#667085">
              {selectedBadge}
            </Text>
            {/* History List */}
            <FlatList
              data={selectedBadge ? tempfilteredTabData : filteredTabData}
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
                      <Text
                        variant="body"
                        onPress={() =>
                          navigation.navigate('Transaction History Details')
                        }
                      >
                        {item.service}
                      </Text>
                      <Text variant="label" color="gray.500">
                        {item.description}
                      </Text>
                    </Box>
                  </HStack>
                  <HStack py="3">
                    <Text variant="body">RM {item.amount}</Text>
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
                <Text variant="h6" bold color="gray.900">
                  Filter by
                </Text>
                <HStack alignItems="center" pt={2} space={1}>
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
      </Box>
    </>
  );
};
export default TransactionHistory;
