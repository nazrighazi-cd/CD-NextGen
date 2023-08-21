import React from 'react';
// Native Base
import { Box, Text, HStack, Badge, ScrollView } from 'native-base';

export const MyselfBillDetails = ({ navigation }) => {
  // Mock Data
  const msisdnNumber = [
    {
      id: '1',
      msisdn: '019-9980004',
      tag: 'Active',
      tagLine: '6 lines',
      amount: '428.00',
      due: '20 Jun 2023',
      supplementaryLine: [
        {
          msisdn: '019-9980001',
          amount: '40.00',
        },
        {
          msisdn: '019-9980002',
          amount: '40.00',
        },
        {
          msisdn: '019-9980003',
          amount: '40.00',
        },
      ],
    },
    {
      id: '2',
      msisdn: '019-9980001',
      tag: 'Suspended',
      tagLine: null,
      amount: '466.00',
      due: '30 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '3',
      msisdn: '019-9980002',
      tag: 'Active',
      tagLine: null,
      amount: '98.00',
      due: '15 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '4',
      msisdn: '019-9980003',
      tag: 'Active',
      tagLine: null,
      amount: '230.00',
      due: '2 August 2023',
      supplementaryLine: null,
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        {/* BILL DETAILS CARD */}
        <Box variant="shadow" m="16px">
          {msisdnNumber.map((item, index) => (
            <Box
              key={index}
              borderBottomWidth={1}
              borderColor="gray.200"
              pt={index == 0 ? '0' : '16px'}
              pb="16px"
            >
              <HStack justifyContent="space-between">
                <Box flexDir="row">
                  <Text variant="body" pr="10px">
                    {item.msisdn}
                  </Text>
                  {item.tagLine ? <Badge>{item.tagLine}</Badge> : null}
                </Box>
                <Text variant="body" bold>
                  RM {item.amount}
                </Text>
              </HStack>
              <Text variant="body2" color="gray.500">
                Due on {item.due}
              </Text>
              {item.supplementaryLine ? (
                <Box>
                  <HStack justifyContent="space-between" pt="16px">
                    <Text variant="body2" color="gray.500">
                      {item.msisdn}
                    </Text>
                    <Text variant="body2" color="gray.500">
                      {item.amount}
                    </Text>
                  </HStack>
                  {item.supplementaryLine.map((item, index) => (
                    <HStack
                      justifyContent="space-between"
                      pt="16px"
                      pl="10px"
                      key={index}
                    >
                      <Text variant="body2" color="gray.500">
                        {item.msisdn}
                      </Text>
                      <Text variant="body2" color="gray.500">
                        {item.amount}
                      </Text>
                    </HStack>
                  ))}
                </Box>
              ) : null}
            </Box>
          ))}

          {/* FOOTER */}
          <HStack justifyContent="space-between" pt="16px">
            <Text variant="h6">Total amount</Text>
            <Text variant="h6" bold>
              RM 802.00
            </Text>
          </HStack>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default MyselfBillDetails;
