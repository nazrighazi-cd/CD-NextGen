import React from 'react';

// React Native Components
import { TouchableOpacity } from 'react-native';

// Native Base Components
import { useTheme, Text, Box, HStack, VStack } from 'native-base';

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
      name: 'Auto Reload by Limit',
      pages: 'Reload Pin',
      icons: <AutoBilling />,
    },
    {
      name: 'Auto Reload by Calendar',
      pages: 'Reload Pin',
      icons: <CalendarRefresh />,
    },
    {
      name: 'Transaction History',
      pages: 'Reload Pin',
      icons: <History />,
    },
    {
      name: 'Auto Reload Management',
      pages: 'Reload Pin',
      icons: <Currency />,
    },
  ];

  const rowsListing = [];
  for (let i = 0; i < listing.length; i += 4) {
    const row = listing.slice(i, i + 4);
    rowsListing.push(row);
  }

  return (
    <Box mx="16px" my="50px">
      <Text bold fontSize="14px" mb="16px">
        Reload
      </Text>
      <VStack justifyContent="center" mx="16px">
        {rowsListing.map((row, index) => (
          <HStack key={index} space={[6, 4]}>
            {row.map((list, itemIndex) => (
              <TouchableOpacity onPress={() => navigation.navigate(list.pages)}>
                <Box key={itemIndex} alignItems="center" mb="16px">
                  {list.icons}
                  <Text
                    pt={2}
                    fontSize="11px"
                    numberOfLines={2}
                    textAlign="center"
                  >
                    {list.name.length > max_length
                      ? list.name.replace(/(.{11})/g, '$1\n')
                      : list.name}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default MainList;
