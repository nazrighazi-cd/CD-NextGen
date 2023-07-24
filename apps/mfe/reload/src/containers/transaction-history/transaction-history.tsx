import React, { useState } from 'react';
// Native Base Components
import { useTheme, Text, Box, HStack, Badge, Modal } from 'native-base';
// Icons
import Setting from '../../assets/icons/settings-04.svg';
import Calendar from '../../assets/icons/calendar.svg';

const TransactionHistory = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  const [bottomModal, setBottomModal] = useState(false);

  // Mock Data
  const transactions = [
    {
      service: '28 Jun 2023',
      amount: '110',
      description: 'Postpaid 50 Bill',
      date: 'Jun 2023',
      icon: <Calendar />,
    },
    {
      service: 'Add-Ons',
      amount: '7',
      description: 'Postpaid 50 Bill',
      date: 'Jun 2023',
      icon: <Calendar />,
    },
    {
      service: 'Label with Max 24 Char(s)',
      amount: '110',
      description: 'Postpaid 50 Bill',
      date: 'July 2023',
      icon: <Calendar />,
    },
    {
      service: 'Reload for Myself',
      amount: '110',
      description: 'Postpaid 50 Bill',
      date: 'July 2023',
      icon: <Calendar />,
    },
  ];

  return (
    <Box bg="white" h="100%" w="100%" maxWidth="100%">
      <Box m="16px">
        {/* TAB */}
        <HStack>
          <Box
            bg="#F9FAFB"
            borderLeftRadius="6.5"
            borderWidth="1"
            borderColor="gray.300"
          >
            <Text p="10px" variant="body2">
              All Transactions
            </Text>
          </Box>
          <Box borderWidth="1" borderLeftWidth="0" borderColor="gray.300">
            <Text p="10px" variant="body2">
              Billing
            </Text>
          </Box>
          <Box borderWidth="1" borderLeftWidth="0" borderColor="gray.300">
            <Text p="10px" variant="body2">
              Add-Ons
            </Text>
          </Box>
          <Box
            borderWidth="1"
            borderLeftWidth="0"
            borderColor="gray.300"
            borderRightRadius="6.5"
          >
            <Text p="10px" variant="body2">
              Subscriptions
            </Text>
          </Box>
        </HStack>

        {/* MY TRANSACTION */}
        <Box flexDir="row" justifyContent="space-between" mt="16px">
          <Text
            variant="h7"
            onPress={() => navigation.navigate('Transaction History Details')}
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
          {/* History List */}
          {transactions.map((item, index) => (
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
          ))}

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
              <HStack space={[2, 3]} justifyContent="space-between">
                <Badge variant="outline">Today</Badge>
                <Badge variant="outline">Last 7 Days</Badge>
                <Badge variant="outline">This Month</Badge>
                <Badge variant="outline">Last 3 Months</Badge>
                <Badge variant="outline">2023</Badge>
              </HStack>
            </Modal.Content>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};
export default TransactionHistory;
