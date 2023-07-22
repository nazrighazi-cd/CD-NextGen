import React from 'react';
// Native Base Components
import { useTheme, Box, HStack, Text, Pressable } from 'native-base';
// Icons
import { ChevronRightIcon } from 'native-base';
import AffinBank from '../../assets/icons/payment-methods/bank/affin-bank.svg';
import AgroBank from '../../assets/icons/payment-methods/bank/agro-bank.svg';
import AllianceBank from '../../assets/icons/payment-methods/bank/alliance-bank.svg';
import AmBank from '../../assets/icons/payment-methods/bank/AmBank.svg';
import BankIslam from '../../assets/icons/payment-methods/bank/bank-islam.svg';
import BankMuamalat from '../../assets/icons/payment-methods/bank/muamalat.svg';
import BankRakyat from '../../assets/icons/payment-methods/bank/bank-rakyat.svg';
import CIMBClicks from '../../assets/icons/payment-methods/bank/cimb-clicks.svg';

const Banks = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const paymentData = [
    {
      id: '1',
      method: 'Affin Bank',
      icons: <AffinBank />,
    },
    {
      id: '2',
      method: 'Agro Bank',
      icons: <AgroBank />,
    },
    {
      id: '3',
      method: 'Alliance Bank',
      icons: <AllianceBank />,
    },
    {
      id: '4',
      method: 'AmBank',
      icons: <AmBank />,
    },
    {
      id: '5',
      method: 'Bank Islam',
      icons: <BankIslam />,
    },
    {
      id: '6',
      method: 'Bank Mualamat',
      icons: <BankMuamalat />,
    },
    {
      id: '7',
      method: 'Bank Rakyat',
      icons: <BankRakyat />,
    },
    {
      id: '8',
      method: 'CIMB Clicks',
      icons: <CIMBClicks />,
    },
  ];

  return (
    <>
      <Box flex={1} bg="white">
        <Box m="16px">
          <Box variant="shadow">
            {/* List of Banks */}
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
                    w="50px"
                    h="40px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {React.cloneElement(item.icons, {
                      width: '100%',
                      height: '100%',
                    })}
                  </Box>
                  <Text variant="h7" pl={4}>
                    {item.method}
                  </Text>
                </HStack>
                <Pressable onPress={() => navigation.navigate('Reload Others')}>
                  <ChevronRightIcon />
                </Pressable>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banks;
