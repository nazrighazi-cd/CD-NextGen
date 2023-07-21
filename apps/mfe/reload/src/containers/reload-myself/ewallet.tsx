import React from 'react';
// React Native Components
import { TouchableOpacity } from 'react-native';
// Native Base Components
import { useTheme, Box, Text, HStack, FlatList, Spacer } from 'native-base';
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
      <Box m="16px">
        <Box variant="shadow">
          {/* List of eWallet */}
          <FlatList
            data={paymentData}
            renderItem={({ item, index }) => (
              <Box
                borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
                borderColor="gray.200"
                py={2}
                justifyContent="center"
                alignItems="center"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Box
                    w="50px"
                    h="40px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {React.cloneElement(item.icons, {
                      width: '75%',
                      height: '100%',
                    })}
                  </Box>
                  <Text variant="h7" pt="10px">
                    {item.method}
                  </Text>
                  <Spacer />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Partners')}
                  >
                    <ChevronRightIcon
                      mt={3}
                      onPress={() => navigation.navigate('Partners')}
                    />
                  </TouchableOpacity>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Box>
    </>
  );
};

export default EWallet;
