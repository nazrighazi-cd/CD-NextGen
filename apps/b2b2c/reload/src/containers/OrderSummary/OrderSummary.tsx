import React, { useState } from 'react';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Alert,
  Avatar,
  AddIcon,
  ScrollView,
} from 'native-base';
//Icons
import { Check } from '../../../../../../libs/icons/src';
import CCPInput from '../../../../../../libs/themes/components/CPPinput/CPPInput';

const OrderSummary = ({ navigation }: { navigation: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box safeAreaTop flex={1} bg={'white'}>
        <Box flex={1} mx={4}>
        <ScrollView showsVerticalScrollIndicator={false} >

          <VStack alignItems={'center'} space={1} mb={4}>
            <Box bg={'#D9D9D9'} w={200} h={200} borderRadius={'full'} />
            <Text variant={'h2'} bold>
              Order Submitted
            </Text>
            <Text color={'gray.500'} fontFamily={'Montserrat'}>
              You've successfully placed the order
            </Text>
          </VStack>
          <Alert variant="success" mb={5}>
            <VStack w={'full'} px={4}>
              <Check color="#027A48" width="20px" />
              <Text color="#027A48" mt="2" fontSize={13} >
                The reload has been submitted for processing.
              </Text>
            </VStack>
          </Alert>          
          <Box variant="shadow" pt="0px">
            <Text variant={'h6'} fontFamily={'Montserrat'} bold>
              Order Summary
            </Text>
            <Box flexDir={'row'} justifyContent={'space-between'}>
              <Text color={'gray.500'}>Order ID</Text>
              <Text>PUL1234567891</Text>
            </Box>
            <Box mt={2} flexDir={'row'} justifyContent={'space-between'}>
              <Text color={'gray.500'}>Transaction Name</Text>
              <Text>RM 15.00</Text>
            </Box>
            <Box
              mt={3}
              flexDirection={'row'}
              alignItems={'center'}
              bg={'#E8EFFD'}
              justifyContent={'space-between'}
              py={1}
              px={3}
              borderRadius={'2xl'}
            >
              <Text color={'primary.600'}>Total Charges</Text>
              <Text bold>RM 15.00</Text>
            </Box>
          </Box>

          </ScrollView>
          <VStack
            safeAreaBottom
            space={3}
            pb={'16px'}
            bottom={0}
            w={'full'}
          >
            <Button onPress={() => setIsOpen(true)}>Done</Button>
            {/* <Button variant={'secondaryGray'} onPress={() => console.log('asd')}>
            <HStack justifyItems={'center'} alignItems={'center'} space={2}>
              <AddIcon color="gray.700" />
              <Text color="gray.700">Add Mobile Internet</Text>
            </HStack>
          </Button> */}
          </VStack>
        </Box>
      </Box>
      <CCPInput onClose={setIsOpen} isOpen={isOpen} onPress={() => {}} />
    </>
  );
};
export default OrderSummary;
