import React from 'react';
// Native Base Components
import { useTheme, Pressable, Text, Box, HStack, VStack } from 'native-base';
// Icons
import {
  CoinsHand,
  Coins,
  AutoBilling,
  History,
  FileAttachment,
  Bill02,
} from '@cd-next-gen-app/icons';

const max_length = 12;

const MainList = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const listing = [
    {
      name: 'Pay Myself',
      pages: 'Pay Myself',
      icons: <CoinsHand strokeWidth={1.5} color="#000000" />,
    },
    {
      name: 'Pay Others',
      pages: 'Pay Others',
      icons: <Coins strokeWidth={1.5} color="#000000" />,
    },
    {
      name: 'Auto Billing',
      pages: 'Auto Billing',
      icons: <AutoBilling strokeWidth={1.5} color="#000000" />,
    },
    {
      name: 'Transaction History',
      pages: 'Transaction History',
      icons: <History strokeWidth={1.5} color="#000000" />,
    },
    {
      name: 'Bill Details',
      pages: 'Bill Details',
      icons: <FileAttachment strokeWidth={1.5} color="#000000" />,
    },
    {
      name: 'Billing',
      pages: 'Quick Billing',
      icons: <Bill02 strokeWidth={1.5} color="#000000" />,
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
          Bill
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
