import React from 'react';
//  Native Base Components
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Alert
} from 'native-base';
//Icons
import {InfoCircle, ChevronRight} from '../../../../../../libs/icons/src';

const Checkout = ({navigation}: {navigation: any}) => {
  return (
    <Box flex={1} bg="white">
      <Box mx={4}>
        <Alert my="16px" variant="info">
          <VStack w="90%">
            <InfoCircle color="#114EBA" width="20px" />
            <Text color="#114EBA" mt="2">
              Insufficient funds in your wallet.
            </Text>
            <HStack alignItems="center" mt="2">
              <Text variant="body2" color="#114EBA" mr="2">
                Top up now
              </Text>
              <ChevronRight color="#114EBA" width="16px" />
            </HStack>
          </VStack>
        </Alert>
        <Box
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          my={'16px'}>
          <Text bold>Order Summary</Text>
        </Box>
      </Box>

      {/* Hide for now as Design Change */}
      {/* <Box variant="shadow" pt="0px">
          <Box variant="listing">
            <Text color={'gray.500'}>Prepaid Reload</Text>
            <Text>RM 15.00</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>Validity</Text>
            <Text>15 days</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>Start date</Text>
            <Text>5 July 2023</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>End Date</Text>
            <Text>20 july 2023</Text>
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'16px'}>
            <Text bold>Total</Text>
            <Text bold>RM 15.00</Text>
          </Box>
        </Box> */}

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
        bg="gray.200">
        <Text>Subscription Type</Text>
        <Text color={'gray.600'}>Prepaid Reload</Text>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={4}
        py={'16px'}>
        <Text>Total</Text>
        <Text color={'gray.900'}>RM 15.00</Text>
      </Box>
      <Box flex={1} mx={4}>
        <Box
          safeAreaBottom
          pb={'16px'}
          position={'absolute'}
          bottom={0}
          w={'full'}>
          <Button onPress={() =>navigation.navigate('Payment')}>Submit Order</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Checkout;


