import React, {useMemo, useState} from 'react';
//  Native Base Components
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Alert,
  Radio,
  ScrollView
} from 'native-base';
//Icons
import {InfoCircle, ChevronRight} from '../../../../../../libs/icons/src';
import CCPInput from '../../../../../../libs/themes/components/CPPinput/CPPInput'
import OTPInput from '../../../../../../libs/themes/components/OTPinput/OTPInput'

const Checkout = ({navigation}: {navigation: any}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenOTP, setIsOpenOTP] = useState(false)

  const paymentMethod = [
    {id:"1", name : "Cash"},
    {id:"2", name : "Credit/Debit Card"},
    {id:"3", name : "Cheque"},
    {id:"4", name : "Boost Wallet"}
  ]

  return (
    <Box flex={1} bg="white">
      <Box px={4}>
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
      </Box>

      <ScrollView
          contentContainerStyle={{flexGrow: 1}}
        >
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        my={'16px'}
        px={4}>
        <Text variant={'h5'} bold>Order Summary</Text>
      </Box>

      {/* Hide for now as Design Change */}
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
        bg="gray.100">
        <Text>Subscription Type</Text>
        <Text color={'gray.600'}>Prepaid Reload</Text>
      </Box>

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
      >
        <Text>Validity</Text>
        <Text color={'gray.600'}>15 days</Text>
      </Box>

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
        bg="gray.100">
        <Text>Start date</Text>
        <Text color={'gray.600'}>5 July 2023 Reload</Text>
      </Box>

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
      >
        <Text>End Date</Text>
        <Text color={'gray.600'}>20 July 2023</Text>
      </Box>

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="full"
        px={4}
        py={'16px'}
        bg="gray.100">
        <Text>Total</Text>
        <Text color={'gray.600'}>RM15</Text>
      </Box>


      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={4}
        my={'16px'}>
        <Text variant={'h5'} bold>Proceed with Payment</Text>
      </Box>
      <Box mx={4}>
        <Radio.Group onChange={() => console.log("123")} name="Threshold" accessibilityLabel="Pick Payment method">
          {paymentMethod.map(item => {
            return (
              <Box mb={3} w={"full"} key={item.id} variant="selection">
                <Text>{item.name}</Text> <Radio accessibilityLabel='Threshold' value={item.id}></Radio>
              </Box>
            )
          })}
        </Radio.Group>
      </Box>
      </ScrollView>
      <Box safeAreaBottom bg="#FFF" flexGrow={1}>
        <Button mx={4}  onPress={() => setIsOpen(true)}>Submit Order</Button>
      </Box>
      <CCPInput onClose={setIsOpen} isOpen={isOpen} onPress={() => {setIsOpen(false);setIsOpenOTP(true);}}/>
      <OTPInput onClose={setIsOpenOTP} isOpen={isOpenOTP} onPress={()=>{ setIsOpenOTP(false),navigation.navigate('Order Summary') }}/>

    </Box>

  );
};
export default Checkout;


