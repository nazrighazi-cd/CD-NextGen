import React from 'react';
// Native Base Components
import { useTheme, Box, HStack, Text, Pressable } from 'native-base';
// Icons
import { ChevronRightIcon } from 'native-base';
import { Boost } from '../../assets/icons';
import { GrabPay } from '../../assets/icons';
import { MAE } from '../../assets/icons';
import { TouchnGo } from '../../assets/icons';

const EWallet = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const paymentData = [
    {
      id: '1',
      method: 'Boost',
      icons: <Boost />,
    },
    {
      id: '2',
      method: 'GrabPay',
      icons: <GrabPay />,
    },
    {
      id: '3',
      method: 'MAE',
      icons: <MAE />,
    },
    {
      id: '4',
      method: 'TnG eWallet',
      icons: <TouchnGo />,
    },
  ];

  return (
    <Box flex={1} bg="white">
      <Box m="16px">
        <Box variant="shadow" py="0px">
          {/* List of eWallet */}
          {paymentData.map((item, index) => (
            <Box
              borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
              borderColor="gray.200"
              py="16px"
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              key={index}
            >
              <HStack alignItems="center">
                <Box
                  w="40px"
                  h="40px"
                  justifyContent="center"
                  alignItems="center"
                >
                  {React.cloneElement(item.icons, {
                    width: '75%',
                    height: '100%',
                  })}
                </Box>
                <Text variant="body">{item.method}</Text>
              </HStack>
              <Pressable onPress={() => navigation.navigate('Partners')}>
                <ChevronRightIcon
                  mt={3}
                  onPress={() => navigation.navigate('Partners')}
                />
              </Pressable>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EWallet;
