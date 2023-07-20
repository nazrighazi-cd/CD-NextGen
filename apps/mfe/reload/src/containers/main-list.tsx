import React from 'react';
import { useTheme, Text, Box, HStack, VStack, Icon } from 'native-base';

// Icons
import { ChevronUpIcon } from 'native-base';

const max_length = 11;

const MainList = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const listing = [
    { name: 'Reload for Myself', pages: 'Reload Wallet', icons: 'TBD' },
    { name: 'Reload for Others', pages: 'Reload Others', icons: 'TBD' },
    { name: 'PIN Reload', pages: 'Reload Pin', icons: 'TBD' },
    { name: 'Auto Reload by Limit', pages: 'Reload Pin', icons: 'TBD' },
    { name: 'Auto Reload by Calendar', pages: 'Reload Pin', icons: 'TBD' },
    { name: 'Transaction History', pages: 'Reload Pin', icons: 'TBD' },
    { name: 'Auto Reload Management', pages: 'Reload Pin', icons: 'TBD' },
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
          <HStack key={index} space={[8, 4]}>
            {row.map((list, itemIndex) => (
              <Box key={itemIndex} alignItems="center" mb="16px">
                <ChevronUpIcon bg="#666666" p="25px"></ChevronUpIcon>
                <Text
                  pt={2}
                  fontSize="11px"
                  numberOfLines={2}
                  onPress={() => navigation.navigate(list.pages)}
                  textAlign="center"
                >
                  {list.name.length > max_length
                    ? list.name.replace(/(.{11})/g, '$1\n')
                    : list.name}
                </Text>
              </Box>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default MainList;
