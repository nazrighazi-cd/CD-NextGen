import React, {  useState } from 'react';
import {
  Platform,
  RefreshControl,
} from 'react-native';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Badge,
  Pressable,
  ScrollView,
  Divider,
} from 'native-base';
//Icons

const Reload = ({route , navigation}: any) => {

  const {phone = '0123319066', isDigiPhone = true} = route?.params ?? {}
  const [activeTab, setActiveTab] = useState(0)

  const [selectAmount, setSelectAmount] = useState<string|null>(null)
  const [amount, setAmount] = useState(0)
  const [refreshing, setRefreshing] = useState(false);

  
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const theme = useTheme();

  // Mock Data
  const reloadAmount = [
    {id: '1', price: 5, validity: 'Valid for 5 Days', tag: 'Popular'},
    {id: '2', price: 6, validity: 'Valid for 5 Days', tag: null},
    {id: '3', price: 7, validity: 'Valid for 5 Days', tag: 'Popular'},
    {id: '4', price: 8, validity: 'Valid for 5 Days', tag: null},
    {id: '5', price: 9, validity: 'Valid for 5 Days', tag: null},
    {id: '6', price: 10, validity: 'Valid for 5 Days', tag: null},
    {id: '15', price: 9, validity: 'Valid for 5 Days', tag: null},
    {id: '16', price: 10, validity: 'Valid for 5 Days', tag: null},
    {id: '115', price: 9, validity: 'Valid for 5 Days', tag: null},
    {id: '116', price: 10, validity: 'Valid for 5 Days', tag: null},
  ];

  const paymentTab = [
    {
      id: 0,
      pages: 'Easy Reload',
    },
    {
      id: 1,
      pages: 'Reload Wow',
    },
    {
      id: 10,
      pages: 'Easy Reload 2',
    },
    {
      id: 11,
      pages: 'Reload Wow 2',
    },
    {
      id: 20,
      pages: 'Easy Reload 3',
    },
    {
      id: 21,
      pages: 'Reload Wow 3',
    },
  ];

  const rowsAmount = [];
  for (let i = 0; i < reloadAmount.length; i += 2) {
    const row = reloadAmount.slice(i, i + 2);
    rowsAmount.push(row);
  }

  const resetSelect = () => {
    setAmount(0)
    setSelectAmount(null)
  }


  return (
    <Box flex={1} bg="#001870">
      <ScrollView 
        contentContainerStyle={{flexGrow:1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Box flex={1}  >
          <Box borderRadius={'5px'} mx="17px" bg="#FFF">
            <HStack py={5} justifyContent="space-evenly">
              <VStack flex={1} paddingLeft={5}>
                <Text color={"#98A2B3"} >Mobile</Text>
                <Text mb={1} bold>{phone}</Text>
                <HStack space={1}>
                    <Badge  variant={isDigiPhone ? 'yellow' : 'celcomBlue'}>{isDigiPhone ? "Digi": "Celcom"}</Badge>
                    <Badge  variant={"success"}>Active</Badge>
                </HStack>
              </VStack>
              <Divider h={'full'} orientation="vertical" />
              <VStack flex={1} paddingLeft={5}>
                <Text color={"#98A2B3"} >Plan</Text>
                <Text mb={1} bold>biGBonus 48</Text>
                <Text color="primary.600" variant="h8" >Expiry on 31 July 2023</Text>
              </VStack>
            </HStack>
            <VStack py={5} pl={5} bg={'#F2F4F7'}>
              <Text color={"#98A2B3"}>Prepaid Balance</Text>
              <Text variant={'h4'} bold>
                RM5.00
              </Text>
            </VStack>
          </Box>

          <Box flex={1} bg="#F9FAFB">
            <Box mx="17px">
              <Text variant="h5" bold py="16px">
                Choose reload amount
              </Text>
              <VStack justifyContent="center">
                {isDigiPhone && <ScrollView horizontal showsHorizontalScrollIndicator={false} pb={"16px"}>
                  <Button.Group   >
                    {paymentTab.map(item => (
                      <Button  key={item.id.toString()} onPress={()=>{setActiveTab(item.id);resetSelect()}} variant={activeTab === item.id ? 'pillActive' : 'pill'}>{item.pages}</Button>
                    ))}
                  </Button.Group>
                </ScrollView>}

                {rowsAmount.map((row, index) => (
                  <HStack key={index}>
                    {row.map((amount, itemIndex) => (
                      <Pressable onPress={()=>{setSelectAmount(amount.id);setAmount(amount.price)}} flex={1} key={itemIndex} mb="16px" px={2}>
                            <Box
                              variant="border"
                              py={3}
                              key={itemIndex}
                              justifyContent="center"
                              alignItems="center"
                              borderColor={
                                selectAmount === amount.id ? 'primary.600' : 'gray.300'
                              }
                              bg={selectAmount === amount.id ? 'primary.10' : 'white'}
                              borderWidth={'1'}>
                              <Text variant="h6" bold>
                                RM{amount.price}
                              </Text>
                              <Text variant="label">{amount.validity}</Text>
                              {/* Tag */}
                              {amount.tag ? (
                                <Badge
                                  variant="popular"
                                  position="absolute"
                                  size={'md'}
                                  top="-10">
                                  {amount.tag}
                                </Badge>
                              ) : null}
                            </Box>
                      </Pressable>
                    ))}
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      {/* FOOTER */}
      <Box  safeAreaBottom bg="#FFF" p={"16px"}>
        {/* Total Payment */}
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Total Payment</Text>
            <Text variant="h6" bold color="primary.600">
              RM {amount || "XXX"}
            </Text>
          </Box>
          <Button isDisabled={!selectAmount} onPress={() => navigation.navigate('Checkout', {isDigiPhone})}>
            Continue
          </Button>
        </HStack>
      </Box>


      {Platform.OS === 'ios'  &&  (
        <Box bg="#F9FAFB"  zIndex={-1} bottom={-100} left={0} right={0} position={'absolute'} height={'md'} />
      )}

    </Box>
  );
};
export default Reload;
