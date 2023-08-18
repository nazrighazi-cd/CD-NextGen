import React, { useState } from 'react';

// Native Base Components
import {
  useTheme,
  Pressable,
  Box,
  Text,
  Badge,
  HStack,
  ScrollView,
  Spacer,
  Button,
} from 'native-base';

// Icons
import { InfoCircle, ChevronRight } from '@cd-next-gen-app/icons';

const BillDetails = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const billDetails = [
    {
      id: '1',
      info: 'Credit Limit',
      value: 'RM500',
      icons: <InfoCircle />,
    },
    {
      id: '2',
      info: 'Unbilled Amount',
      value: '-RM428.00',
      icons: <InfoCircle />,
    },
    {
      id: '3',
      info: 'Remaining Credit Limit',
      value: 'RM72.00',
      icons: <InfoCircle />,
    },
  ];

  // Supplementary Lines Mock Data
  const supLinesData = [
    {
      id: '1',
      supNo: '019-6650001',
      tag: 'Active',
    },
    {
      id: '2',
      supNo: '019-6650002',
      tag: 'Active',
    },
    {
      id: '3',
      supNo: '019-6650003',
      tag: 'Active',
    },
  ];

  // Bill Statement Mock Data
  const billData = [
    {
      id: '1',
      date: '28 May 2023',
    },
    {
      id: '2',
      date: '28 Apr 2023',
    },
    {
      id: '3',
      date: '28 Mar 2023',
    },
  ];

  const [value, setValue] = React.useState('one');

  return (
    <>
      <Box flex={1} bg="white">
        <ScrollView>
          <Box m="16px">
            {/* Pinciple Lines */}
            <Box flexDir="row" justifyContent="space-between">
              <Text variant="body1" bold>
                Principle Lines
              </Text>
              <Box alignContent="flex-end" flexDir="row" alignItems="center">
                <Box pl="10px">
                  <Text variant="body" color="primary.600">
                    View All
                  </Text>
                </Box>
                <Box>
                  <ChevronRight width="20px" color="#1561E8" />
                </Box>
              </Box>
            </Box>

            {/* Bill Statement Card */}
            <Box variant="shadow" mt="16px">
              <HStack justifyContent="space-between">
                <Box>
                  <Text variant="body1">019-9980004</Text>
                  <Box pt="12px">
                    <Text variant="label" color="#98A2B3">
                      Due On
                    </Text>
                    <Text variant="body">28 Jun 2023</Text>{' '}
                  </Box>
                  <Box pt="12px">
                    <Text variant="label" color="#98A2B3">
                      Account Number{' '}
                    </Text>
                    <Text variant="body">4259745103</Text>{' '}
                  </Box>
                </Box>
                <Box alignItems="flex-end">
                  <Badge variant="success">Active</Badge>
                  <Spacer />
                  <Text variant="body1">Total Due</Text>
                  <Text variant="h2" bold>
                    RM 428.00
                  </Text>
                </Box>
              </HStack>
            </Box>

            {/* Bill Details */}
            <Box variant="shadow" mt="16px">
              {/* Bill Details Card */}
              {billDetails.map((item, index) => (
                <Box
                  key={index}
                  variant="listing"
                  borderBottomWidth={index === billData.length - 1 ? 0 : 1}
                >
                  <HStack>
                    <Box>
                      <Text variant="body" color="#667085">
                        {item.info}
                      </Text>
                    </Box>

                    {item.icons ? (
                      <Box
                        w="20px"
                        h="20px"
                        justifyContent="center"
                        alignItems="center"
                        ml="8px"
                      >
                        {React.cloneElement(item.icons, {
                          width: '75%',
                          height: '100%',
                          color: '#667085',
                        })}
                      </Box>
                    ) : null}
                  </HStack>
                  <HStack alignItems="center">
                    <Text variant="body" color="#000000">
                      {item.value}
                    </Text>
                  </HStack>
                </Box>
              ))}
            </Box>
            {/* Supplementary Lines */}
            <Box mt="16px" flexDir="row" justifyContent="space-between">
              <Text variant="body1" bold>
                Supplementary Lines
              </Text>
              <Box alignContent="flex-end" flexDir="row" alignItems="center">
                <Box pl="10px">
                  <Text variant="body" color="primary.600">
                    View All
                  </Text>
                </Box>
                <Box>
                  <ChevronRight width="20px" color="#1561E8" />
                </Box>
              </Box>
            </Box>
            {/* Supplementary Lines Card*/}
            <Box variant="shadow" mt="16px">
              {supLinesData.map((item, index) => (
                <Pressable
                  onPress={() => navigation.navigate('Add Card')}
                  key={index}
                >
                  <Box
                    key={index}
                    variant="listing"
                    pt="0px"
                    borderBottomWidth={
                      index === supLinesData.length - 1 ? 0 : 1
                    }
                  >
                    <HStack alignItems="center">
                      <Box flexDirection="row" alignItems="center">
                        <Text variant="body" pr={2}>
                          {item.supNo}
                        </Text>
                        {item.tag ? (
                          <Badge variant="success">{item.tag}</Badge>
                        ) : null}
                      </Box>
                    </HStack>

                    <Box>
                      <ChevronRight />
                    </Box>
                  </Box>
                </Pressable>
              ))}
            </Box>
            {/* Bill Statement */}
            <Box mt="16px" flexDir="row" justifyContent="space-between">
              <Text variant="body1" bold>
                Bill Statement
              </Text>
              <Box alignContent="flex-end" flexDir="row" alignItems="center">
                <Box pl="10px">
                  <Text variant="body" color="primary.600">
                    View All
                  </Text>
                </Box>
                <Box>
                  <ChevronRight width="20px" color="#1561E8" />
                </Box>
              </Box>
            </Box>
            {/* Bill Statement Card*/}
            <Box variant="shadow" mt="16px">
              {billData.map((item, index) => (
                <Pressable
                  onPress={() => navigation.navigate('Add Card')}
                  key={index}
                >
                  <Box
                    key={index}
                    variant="listing"
                    pt="0px"
                    borderBottomWidth={index === billData.length - 1 ? 0 : 1}
                  >
                    <HStack alignItems="center">
                      <Box flexDirection="row" alignItems="center">
                        <Text variant="body" pr={2}>
                          {item.date}
                        </Text>
                      </Box>
                    </HStack>
                    <Box>
                      <ChevronRight />
                    </Box>
                  </Box>
                </Pressable>
              ))}
            </Box>
          </Box>
          {/* FOOTER */}
          <Box m="16px">
            <Button>Pay Bill</Button>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};
export default BillDetails;
