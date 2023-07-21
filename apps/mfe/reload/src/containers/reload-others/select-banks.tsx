import React from 'react';
// React Native Components
import { TouchableOpacity } from 'react-native';
// Native Base Components
import { useTheme, Box, Text, HStack, FlatList, Spacer } from 'native-base';
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
      <Box m="16px">
        <Box variant="shadow">
          {/* List of Banks */}
          <FlatList
            data={paymentData}
            renderItem={({ item, index }) => (
              <Box
                borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
                borderColor="#EAECF0"
                py="3"
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
                      width: '100%',
                      height: '100%',
                    })}
                  </Box>
                  <Text fontSize="14px" pt="10px">
                    {item.method}
                  </Text>
                  <Spacer />
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Reload Others')}
                  >
                    <ChevronRightIcon mt={3} color="#344054" />
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

export default Banks;
