import React,{useState} from 'react';
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
} from 'native-base';
//Icons
import {Check } from '../../../../../../libs/icons/src';
import CCPInput from '../../../../../../libs/themes/components/CPPinput/CPPInput'

const OrderSummary = ({navigation}: {navigation: any}) => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    <Box safeAreaTop flex={1} bg={'white'}>
      <Box flex={1} mx={4}>
        <VStack alignItems={'center'} space={5} mb={4}>
          <Avatar size={'md'} variant="success">
            <Check width={20} height={20} color="blue" />
          </Avatar>
          <Text  variant={'h6'} fontFamily={'Montserrat'} bold>
            You've successfully placed the order
          </Text>
        </VStack>

        <Alert variant="success" mb={5}>
          <VStack w="90%">
            <Check color="#027A48" width="20px" />
            <Text color="#027A48" mt="2">
              The reload has been submitted for processing.
            </Text>
          </VStack>
        </Alert>

        <Box variant="shadow" pt="0px">
          <Box pt={'16px'} >
            <Text variant={'h6'} textAlign={'center'} fontFamily={'Montserrat'} bold>
              Order Summary
            </Text>
          </Box>
          <Box variant="listing">
            <Text color={'success.700'}>Order ID</Text>
            <Text color={'success.700'}>18810</Text>
          </Box>
          <Box variant="listing">
            <Text color={'gray.500'}>Prepaid Reload</Text>
            <Text>RM 15.00</Text>
          </Box>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            pt={'16px'}>
            <Text bold>Total</Text>
            <Text bold>RM 15.00</Text>
          </Box>
        </Box>
        <VStack
          safeAreaBottom
          space={3}
          pb={'16px'}
          position={'absolute'}
          bottom={0}
          w={'full'}>
          <Button onPress={() => setIsOpen(true)}>Done</Button>
          <Button variant={'secondaryGray'} onPress={() => console.log('asd')}>
            <HStack justifyItems={'center'} alignItems={'center'} space={2}>
              <AddIcon color="gray.700" />
              <Text color="gray.700">Add Mobile Internet</Text>
            </HStack>
          </Button>
        </VStack>
      </Box>
    </Box>
    <CCPInput onClose={setIsOpen} isOpen={isOpen} onPress={()=>{  }}/>

    </>
  );
};
export default OrderSummary;
