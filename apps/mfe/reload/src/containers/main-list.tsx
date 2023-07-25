import React from 'react';
// Native Base Components
import { useTheme, Pressable, Text, Box, HStack, VStack } from 'native-base';
// Icons
import Medal from '../assets/icons/file-medal.svg';
import File from '../assets/icons/file-06.svg';
import Passcode from '../assets/icons/passcode.svg';
import AutoBilling from '../assets/icons/auto-billing-01.svg';
import CalendarRefresh from '../assets/icons/calendar-refresh.svg';
import History from '../assets/icons/history.svg';
import Currency from '../assets/icons/currency-ringgit-malaysia-refresh.svg';

const max_length = 11;

const MainList = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const listing = [
    {
      name: 'Reload for Myself',
      pages: 'Reload Wallet',
      icons: <Medal />,
    },
    {
      name: 'Reload for Others',
      pages: 'Reload Others',
      icons: <File />,
    },
    { name: 'PIN Reload', pages: 'Reload Pin', icons: <Passcode /> },
    {
      name: 'Auto Reload Limit',
      pages: 'Auto Reload Limit',
      icons: <AutoBilling />,
    },
    {
      name: 'Auto Reload Calendar',
      pages: 'Auto Reload Calendar',
      icons: <CalendarRefresh />,
    },
    {
      name: 'Transaction History',
      pages: 'Transaction History',
      icons: <History />,
    },
    {
      name: 'Auto Reload Management',
      pages: 'Auto Reload Active',
      icons: <Currency />,
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
        <VStack justifyContent="center" mx="16px">
          {rowsListing.map((row, index) => (
            <HStack key={index} space={[7, 4]}>
              {row.map((list, itemIndex) => (
                <Pressable onPress={() => navigation.navigate(list.pages)}>
                  <Box key={itemIndex} alignItems="center" mb="16px">
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
