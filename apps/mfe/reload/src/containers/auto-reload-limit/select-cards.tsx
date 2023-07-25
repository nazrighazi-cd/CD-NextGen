import React, { useState } from 'react';
// Native Base Components
import { useTheme, HStack, Box, Text, Badge, Pressable } from 'native-base';
//Icons
import { ChevronRightIcon, AddIcon } from 'native-base';
import Check from '../../assets/icons/check.svg';
import Visa from '../../assets/icons/payment-methods/Visa.svg';
import MasterCard from '../../assets/icons/payment-methods/Mastercard.svg';

const SelecCards = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  const [showCardOptions, setShowCardOptions] = useState(false);

  // Mock Data
  const paymentData = [
    {
      id: '1',
      method: 'Maybank 9807',
      icons: <Visa />,
      tag: 'Default',
      check: 'Yes',
    },
    {
      id: '2',
      method: 'Citibank 0929',
      icons: <MasterCard />,
      tag: null,
      check: null,
    },
  ];

  return (
    <>
      <Box flex={1} bg="white">
        <Box m="16px">
          <Box variant="shadow">
            {/* List of Card Options */}
            {paymentData.map((item, index) => (
              <Box key={index} variant="listing">
                <HStack alignItems="center">
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
                  <Box flexDirection="row" alignItems="center">
                    <Text variant="h7" pr={2}>
                      {item.method}
                    </Text>
                    {item.tag ? <Badge variant="blue">{item.tag}</Badge> : null}
                  </Box>
                </HStack>
                {item.check ? (
                  <Box mt={3}>
                    <Check />
                  </Box>
                ) : (
                  <Pressable onPress={() => navigation.navigate('Partners')}>
                    <ChevronRightIcon
                      mt={3}
                      onPress={() => navigation.navigate('Partners')}
                    />
                  </Pressable>
                )}
              </Box>
            ))}
            <HStack space={2} alignItems="center" pt={5}>
              <Pressable onPress={() => navigation.navigate('Add Card')}>
                <AddIcon color="primary.600" />
              </Pressable>
              <Text variant="body2" color="primary.600">
                Add Card
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SelecCards;