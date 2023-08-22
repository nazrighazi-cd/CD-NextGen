import React, { useState } from 'react';

// Native Base Components
import {
  Box,
  Text,
  HStack,
  ScrollView,
  Spacer,
  Button,
  VStack,
} from 'native-base';

//Monthly Mock Data
const monthlyBill = [
  {
    id: '1',
    monthly: 'June 2023',
    title: 'Postpaid Bill Statement',
    date: '10 Jun 2023',
    total: 'RM42.20',
  },
  {
    id: '2',
    monthly: 'May 2023',
    title: 'Postpaid Bill Statement',
    date: '10 Jun 2023',
    total: 'RM42.20',
  },
  {
    id: '3',
    monthly: 'April 2023',
    title: 'Postpaid Bill Statement',
    date: '10 Jun 2023',
    total: 'RM42.20',
  },
  {
    id: '4',
    monthly: 'March 2023',
    title: 'Postpaid Bill Statement',
    date: '10 Jun 2023',
    total: 'RM42.20',
  },
  {
    id: '5',
    monthly: 'February 2023',
    title: 'Postpaid Bill Statement',
    date: '10 Jun 2023',
    total: 'RM42.20',
  },
];

//Anually Mock Data
const anuallyBill = [
  {
    id: '1',
    anually: '2023',
    title: 'Yearly Tax Statement',
  },
  {
    id: '2',
    anually: '2022',
    title: 'Yearly Tax Statement',
  },
  {
    id: '3',
    anually: '2021',
    title: 'Yearly Tax Statement',
  },
];

// Icons
import { CheckCircle, ChevronRight } from '@cd-next-gen-app/icons';
import { Pressable } from 'react-native';

const BillStatement = ({ navigation }: { navigation: any }) => {
  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px" flex={1}>
          {/* Pill Tab */}
          <Box justifyContent="center" alignItems="center">
            <Button.Group size="md">
              <Button variant="pillActive" w="50%">
                Monthly
              </Button>
              <Button variant="pill" w="50%">
                Annually
              </Button>
            </Button.Group>
          </Box>

          {/* Monthly Bill Statement */}
          {monthlyBill.map((item, index) => (
            <Box>
              <Box mt="16px">
                <HStack>
                  <Text variant="body2" bold>
                    {item.monthly}
                  </Text>
                  <Spacer />
                  <Box pr="16px">
                    <CheckCircle width={16} color="#D0D5DD" />
                  </Box>
                </HStack>
              </Box>
              {/* Monthly Bill Statement Card*/}
              <Pressable onPress={() => navigation.navigate('Bill Detail')}>
                <Box variant="shadow" shadow="0px" mt="8px">
                  <HStack>
                    <VStack>
                      <Box>
                        <Text>{item.title}</Text>
                        <Text color="#475467">{item.date}</Text>
                      </Box>
                    </VStack>
                    <Spacer />
                    <Box justifyContent="center" alignItems="center">
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
            </Box>
          ))}

          {/* Anually Bill Statement */}
          {anuallyBill.map((item, index) => (
            <Box>
              <Box mt="16px">
                <HStack>
                  <Text variant="body2" bold>
                    {item.anually}
                  </Text>
                  <Spacer />
                  <Box pr="16px">
                    <CheckCircle width={16} color="#D0D5DD" />
                  </Box>
                </HStack>
              </Box>
              {/* Monthly Bill Statement Card*/}
              <Pressable onPress={() => navigation.navigate('Bill Detail')}>
                <Box variant="shadow" shadow="0px" mt="8px">
                  <HStack>
                    <VStack>
                      <Box>
                        <Text>{item.title}</Text>
                      </Box>
                    </VStack>
                    <Spacer />
                    <Box justifyContent="center" alignItems="center">
                      <HStack>
                        <Box>
                          <ChevronRight width={20} />
                        </Box>
                      </HStack>
                    </Box>
                  </HStack>
                </Box>
              </Pressable>
            </Box>
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};
export default BillStatement;
