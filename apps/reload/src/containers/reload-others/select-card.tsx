import React, { useState } from 'react';
// Native Base Components
import { useTheme, HStack, Box, Text, Badge, Pressable } from 'native-base';
//Icons
import { ChevronRightIcon, AddIcon } from 'native-base';
import { Check, Visa, Mastercard } from '@cd-next-gen-app/icons';

const SelectCard = ({ navigation }: { navigation: any }) => {
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
      icons: <Mastercard />,
      tag: null,
      check: null,
    },
  ];

  return (
    <Box flex={1} bg="white">
      <Box m="16px">
        {/* ADD CARD (Show When showCardOptions is false) */}
        {!showCardOptions && (
          <Pressable onPress={() => setShowCardOptions(!showCardOptions)}>
            <Box variant="shadow">
              <HStack space={2} alignItems="center">
                <AddIcon color="primary.600" />
                <Text variant="body2" color="primary.600">
                  Add Card
                </Text>
              </HStack>
            </Box>
          </Pressable>
        )}

        {/* CARD OPTIONS (Show When showCardOptions is true) */}
        {showCardOptions && (
          <Box variant="shadow" pt="0px">
            {/* List of Card Options */}
            {paymentData.map((item, index) => (
              <Pressable
                onPress={() => navigation.navigate('Add Card')}
                key={index}
              >
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
                      <Text variant="body" pr={2}>
                        {item.method}
                      </Text>
                      {item.tag ? (
                        <Badge variant="indigo">{item.tag}</Badge>
                      ) : null}
                    </Box>
                  </HStack>
                  {item.check ? (
                    <Box>
                      <Check />
                    </Box>
                  ) : (
                    <ChevronRightIcon />
                  )}
                </Box>
              </Pressable>
            ))}
            <Pressable onPress={() => navigation.navigate('Add Card')}>
              <HStack space={2} alignItems="center" pt={5} pb={1}>
                <AddIcon color="primary.600" />
                <Text variant="body2" color="primary.600">
                  Add Card
                </Text>
              </HStack>
            </Pressable>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SelectCard;
