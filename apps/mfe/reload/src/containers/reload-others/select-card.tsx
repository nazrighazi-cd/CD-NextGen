import React, { useState } from 'react';
// React Native Components
import { TouchableOpacity } from 'react-native';
// Native Base Components
import {
  useTheme,
  Box,
  Text,
  HStack,
  AddIcon,
  FlatList,
  Badge,
  Spacer,
} from 'native-base';
//Icons
import { ChevronRightIcon } from 'native-base';
import Check from '../../assets/icons/check.svg';
import Visa from '../../assets/icons/payment-methods/Visa.svg';
import MasterCard from '../../assets/icons/payment-methods/Mastercard.svg';

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
      icons: <MasterCard />,
      tag: null,
      check: null,
    },
  ];

  return (
    <>
      <Box m="16px">
        {/* ADD CARD (Show When showCardOptions is false) */}
        {!showCardOptions && (
          <Box variant="shadow">
            <HStack space={2} alignItems="center">
              <TouchableOpacity
                onPress={() => setShowCardOptions(!showCardOptions)}
              >
                <AddIcon color="primary.600" />
              </TouchableOpacity>
              <Text variant="body2" color="primary.600">
                Add Card
              </Text>
            </HStack>
          </Box>
        )}

        {/* CARD OPTIONS (Show When showCardOptions is true) */}
        {showCardOptions && (
          <Box variant="shadow">
            {/* List of Card Options */}
            <FlatList
              data={paymentData}
              renderItem={({ item, index }) => (
                <Box
                  // borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
                  borderBottomWidth={1}
                  borderColor="gray.200"
                  py={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <HStack space={[2, 4]} justifyContent="space-between">
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
                      {item.tag ? (
                        <Badge variant="blue">{item.tag}</Badge>
                      ) : null}
                    </Box>

                    <Spacer />

                    {item.check ? (
                      <Box mt={3}>
                        <Check />
                      </Box>
                    ) : (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Partners')}
                      >
                        <ChevronRightIcon
                          mt={3}
                          onPress={() => navigation.navigate('Partners')}
                        />
                      </TouchableOpacity>
                    )}
                  </HStack>
                </Box>
              )}
            />
            <HStack space={2} alignItems="center" pt={4}>
              <TouchableOpacity onPress={() => navigation.navigate('Add Card')}>
                <AddIcon color="primary.600" />
              </TouchableOpacity>
              <Text variant="body2" color="primary.600">
                Add Card
              </Text>
            </HStack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default SelectCard;
