import React from 'react';
// Native Base Components
import { useTheme, Box, HStack, Text, Pressable } from 'native-base';
// Icons
import { ChevronRightIcon } from 'native-base';
import Boost from '../../assets/icons/payment-methods/e-wallet/Boost.svg';
import GrabPay from '../../assets/icons/payment-methods/e-wallet/GrabPay.svg';
import MAE from '../../assets/icons/payment-methods/e-wallet/MAE.svg';
import TnG from '../../assets/icons/payment-methods/e-wallet/TnG-eWallet.svg';

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
      icons: <TnG />,
    },
  ];

  return (
    <>
      <Box flex={1} bg="white">
        <Box m="16px">
          <Box variant="shadow">
            {/* List of eWallet */}
            {paymentData.map((item, index) => (
              <Box
                borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
                borderColor="gray.200"
                py={2}
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
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
                  <Text variant="h7">{item.method}</Text>
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
    </>
  );
};

export default EWallet;
