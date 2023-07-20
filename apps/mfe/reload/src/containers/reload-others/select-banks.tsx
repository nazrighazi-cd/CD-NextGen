import React from 'react';

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

const Banks = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  // Mock Data
  const paymentData = [
    {
      id: '1',
      method: 'Affin Bank',
      iconsUrl:
        'https://vtlogo.com/wp-content/uploads/2020/03/boost-Banks-vector-logo.png',
    },
    {
      id: '2',
      method: 'Agro Bank',
      iconsUrl:
        'https://assets.grab.com/wp-content/uploads/sites/8/2021/11/26235244/GrabPay_Final_Logo_RGB_green_horizontal-01.png',
    },
    {
      id: '3',
      method: 'Alliance Bank',
      iconsUrl:
        'https://www.maybank2u.com.my/iwov-resources/microsite/driveitaway_assets/images/float-mae-logo.png',
    },
    {
      id: '4',
      method: 'AmBank',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
    {
      id: '5',
      method: 'Bank Islam',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
    {
      id: '6',
      method: 'Bank Mualamat',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
    {
      id: '7',
      method: 'Bank Rakyat',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
    {
      id: '8',
      method: 'CIMB Clicks',
      iconsUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Touch_%27n_Go_eWallet_logo.svg/1200px-Touch_%27n_Go_eWallet_logo.svg.png',
    },
  ];

  return (
    <NativeBaseProvider>
      <Box m="16px">
        <Box bg="#F9FAFB" px="16px" pt="16px" rounded="lg">
          {/* Flat List */}
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
                  <Text fontSize="14px" pt="10px">
                    {item.method}
                  </Text>
                  <Spacer />
                  <ChevronRightIcon mt={3} color="#344054" />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Banks;
