import React from 'react';
// Native Base Components
import { useTheme, Pressable, Text, Box, HStack, VStack } from 'native-base';
// Icons
import {
  FileMedal,
  File,
  Passcode,
  AutoBilling,
  CalendarRefresh,
  History,
  CurrencyRefresh,
} from '@cd-next-gen-app/icons';

const max_length = 11;

const MainList = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const listing = [
    {
      name: 'Reload for Myself',
      pages: 'Reload Myself',
      icons: <FileMedal color="#000000" />,
    },
    {
      name: 'Reload for Others',
      pages: 'Reload Others',
      icons: <File color="#000000" />,
    },
    {
      name: 'PIN Reload',
      pages: 'Reload Pin',
      icons: <Passcode color="#000000" />,
    },
    {
      name: 'Auto Reload Limit',
      pages: 'Auto Reload Limit',
      icons: <AutoBilling color="#000000" />,
    },
    {
      name: 'Auto Reload Calendar',
      pages: 'Auto Reload Calendar',
      icons: <CalendarRefresh color="#000000" />,
    },
    {
      name: 'Transaction History',
      pages: 'Transaction History',
      icons: <History color="#000000" />,
    },
    {
      name: 'Auto Reload Management',
      pages: 'Auto Reload Active',
      icons: <CurrencyRefresh color="#000000" />,
    },
  ];

  const rowsListing = [];
  for (let i = 0; i < listing.length; i += 4) {
    const row = listing.slice(i, i + 4);
    rowsListing.push(row);
  }

  return (
    <Box flex={1} bg="white">
      <Box mx="16px" my="50px">
        <Text bold variant="h7" mb="16px">
          Reload
        </Text>
        <VStack justifyContent="center">
          {rowsListing.map((row, index) => (
            <HStack key={index}>
              {row.map((list, itemIndex) => (
                <Pressable
                  onPress={() => navigation.navigate(list.pages)}
                  key={itemIndex}
                >
                  <Box
                    key={itemIndex}
                    width="85px"
                    alignItems="center"
                    mb="16px"
                  >
                    {list.icons}
                    <Text variant="label" pt={2} textAlign="center">
                      {list.name.length > max_length
                        ? list.name.replace(/(.{11})/g, '$1\n')
                        : list.name}
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </HStack>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default MainList;
