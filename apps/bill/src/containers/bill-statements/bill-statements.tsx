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

//Mock Data
// const billStat = [
//   {
//     id: '1',
//     monthly: 'June 2023',
//     title: 'Postpaid Bill Statement',
//     date: '10 Jun 2023',
//     total: 'RM42.20',
//   },
// ];

// Icons
import { CheckCircle, ChevronRight } from '@cd-next-gen-app/icons';

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
          <Box mt="16px">
            <HStack>
              <Text variant="body2" bold>
                June 2023
              </Text>
              <Spacer />
              <Box pr="16px">
                <CheckCircle width={16} color="#D0D5DD" />
              </Box>
            </HStack>
          </Box>
          {/* Monthly Bill Statement Card*/}
          <Box variant="shadow" shadow="0px" mt="8px">
            <HStack>
              <VStack>
                <Box>
                  <Text>Postpaid Bill Statement</Text>
                  <Text color="#475467">10 Jun 2023</Text>
                </Box>
              </VStack>
              <Spacer />
              <Box justifyContent="center" alignItems="center">
                <HStack>
                  <Text bold pr="8px">
                    RM42.20
                  </Text>
                  <Box>
                    <ChevronRight width={20} />
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};
export default BillStatement;
