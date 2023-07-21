import React from 'react';

// React Native Components
import { TouchableOpacity } from 'react-native';

// Native Base Components
import {
  useTheme,
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  FlatList,
  Image,
  Spacer,
} from 'native-base';

// Icons
import { ChevronRightIcon } from 'native-base';

const EWallet = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  // Mock Data
  const paymentData = [
    {
      id: '1',
      method: 'Boost',
      iconsUrl:
        'https://vtlogo.com/wp-content/uploads/2020/03/boost-ewallet-vector-logo.png',
    },
    {
      id: '2',
      method: 'GrabPay',
      iconsUrl:
        'https://assets.grab.com/wp-content/uploads/sites/8/2021/11/26235244/GrabPay_Final_Logo_RGB_green_horizontal-01.png',
    },
    {
      id: '3',
      method: 'MAE',
      iconsUrl:
        'https://www.maybank2u.com.my/iwov-resources/microsite/driveitaway_assets/images/float-mae-logo.png',
    },
    {
      id: '4',
      method: 'TnG eWallet',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
  ];

  return (
    <>
      <Box m="16px">
        <Box variant="shadow">
          {/* Flat List */}
          <FlatList
            data={paymentData}
            renderItem={({ item, index }) => (
              <Box
                borderBottomWidth={index === paymentData.length - 1 ? 0 : 1}
                borderColor="gray.200"
                py="2"
                justifyContent="center"
                alignItems="center"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Box w="50px" h="40px">
                    <Image
                      source={{
                        uri: item.iconsUrl,
                      }}
                      alt="Image Description"
                      resizeMode="contain"
                      flex={1}
                    />
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
