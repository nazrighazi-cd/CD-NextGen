import React from 'react';
// Native Base
import {
  Box,
  Text,
  HStack,
  Badge,
  Radio,
  Spacer,
  ScrollView,
  Pressable,
} from 'native-base';
import { Check, ChevronRight } from '@cd-next-gen-app/icons';

export const PayMyself = () => {
  // Radio Button
  const [value, setValue] = React.useState('one');

  // Mock Data
  const msisdnNumber = [
    {
      id: '1',
      msisdn: '019-9980004',
      tag: 'Active',
      amount: '428.00',
      due: '20 Jun 2023',
    },
    {
      id: '2',
      msisdn: '019-9980001',
      tag: 'Suspended',
      amount: '466.00',
      due: '30 Jun 2023',
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          <Box variant="shadow">
            <HStack justifyContent="space-between" mb={2}>
              <Text variant="body2" bold>
                Select Account To Pay
              </Text>
              <Box flexDirection="row" alignItems="center">
                <Text variant="body2" color="primary.600">
                  More Info
                </Text>
                <ChevronRight width={16} color="#1561E8" />
              </Box>
            </HStack>

            {/* List */}
            {msisdnNumber.map((item, index) => (
              <Pressable>
                <Box variant="border" mb={3}>
                  <HStack>
                    <Box>
                      <Text variant="body" bold>
                        {item.msisdn}
                      </Text>
                      <Text variant="body">RM {item.amount}</Text>
                    </Box>
                    <Spacer />
                    <Box alignItems="flex-end" mr={3}>
                      <Badge variant="success">Active</Badge>
                      <Text variant="label" mt={1}>
                        Due on {item.due}
                      </Text>
                    </Box>
                    <Box mt={2}>
                      <Radio.Group name="myRadioGroup">
                        <Radio
                          value="one"
                          accessibilityLabel="Threshold"
                          icon={<Check />}
                        ></Radio>
                      </Radio.Group>
                    </Box>
                  </HStack>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default PayMyself;
