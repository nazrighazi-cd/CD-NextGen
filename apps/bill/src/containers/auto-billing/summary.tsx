import React, { useState } from 'react';
// Native Base Components
import { useTheme, Box, Text, Button, ScrollView } from 'native-base';
//Icons
import { Check, Visa, Mastercard } from '@cd-next-gen-app/icons';

const Summary = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const summaryData = [
    {
      id: '1',
      method: 'Auto Billing',
      desc: 'On',
    },
    {
      id: '2',
      method: 'Mobile number',
      desc: '0178654238',
    },
    {
      id: '3',
      method: 'Card number',
      desc: 'Maybank 9807',
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px">
          <Box variant="shadow" pt="0px">
            {/* List of Card Options */}
            {summaryData.map((item, index) => (
              <Box
                key={index}
                variant="listing"
                borderBottomWidth={index === summaryData.length - 1 ? 0 : 1}
                paddingBottom={
                  index === summaryData.length - 1 ? '0px' : '16px'
                }
              >
                <Box flexDirection="row" alignItems="center">
                  <Text variant="body">{item.method}</Text>
                </Box>
                <Box alignItems="flex-end">
                  <Text bold>{item.desc}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
      <Box m="16px">
        <Button onPress={() => navigation.navigate('Open Link')}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
