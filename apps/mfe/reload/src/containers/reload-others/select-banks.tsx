import React from 'react';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  Text,
  Pressable,
  ScrollView,
} from 'native-base';
// Icons
import { ChevronRightIcon } from 'native-base';

import { AffinBank } from '../../assets/icons';
import { AgroBank } from '../../assets/icons';
import { AllianceBank } from '../../assets/icons';
import { AmBank } from '../../assets/icons';
import { BankIslam } from '../../assets/icons';
import { Muamalat } from '../../assets/icons';
import { BankRakyat } from '../../assets/icons';
import { CIMB } from '../../assets/icons';
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
      icons: <Muamalat />,
    },
    {
      id: '7',
      method: 'Bank Rakyat',
      icons: <BankRakyat />,
    },
    {
      id: '8',
      method: 'CIMB Clicks',
      icons: <CIMB />,
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px">
          <Box variant="shadow" py="0px">
            {/* List of Banks */}
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
                    w="50px"
                    h="25px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {React.cloneElement(item.icons, {
                      width: '100%',
                      height: '100%',
                    })}
                  </Box>
                  <Text variant="body" pl={4}>
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
      </ScrollView>
    </Box>
  );
};

export default Banks;
