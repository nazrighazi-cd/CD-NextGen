import React, {useMemo, useState} from 'react';
import {Animated, Platform, RefreshControl, View} from 'react-native';
//  Native Base Components
import {
  useTheme,
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Badge,
  Spacer,
  Pressable,
  ScrollView,
  Divider,
  Modal,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'native-base';
//Icons
import ModalError from '../../components/ModalError/ModalError';
import {InfoCircle, Close,ChevronRight,History} from '../../../../../../libs/icons/src';
import ArrowLeft from '../../../../../../libs/icons/src/general/Arrowleft';


const AddOn = ({route, navigation}: any) => {
  const {phone = '0161234567', isDigiPhone = true} = route?.params ?? {}
  const [isModalError, setIsModalError] = useState(false)
  const [bottomModal, setbottomModal] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [selectAmount, setSelectAmount] = useState<string|null>(null)
  const [amount, setAmount] = useState(0)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Mock Data
  const justList = [
    {
      id: '1',
      tag: 'Malaysiaku Deals',
      type: 'Auto-Renew',
      title: '5G Booster',
      price : 5,
      isPopular: true,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'Big Data Deals',
      type: 'One Time Pass',
      title: '20GB + 6.5GB Hotspot 3Mbps',
      price : 8,
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
  ];


  const pastList = [
    {
      id: '1',
      tag: 'Internet',
      type: 'Auto-Renew',
      price : 8,
      title: 'Freedom Add On (max charnum for this line is 64 chars)',
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'VAS',
      type: 'One Time Pass',
      price : 8,
      title: '1-Day Calls & SMS Pass (max charnum for this line is 64 chars)',
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
  ];

  const paymentTab = [
    {
      id: 0,
      pages: 'just4ME™',
    },
    {
      id: 1,
      pages: 'Active',
    },
    {
      id: 2,
      pages: 'Past',
    },
  ];

  const rowsActive = [];
  for (let i = 0; i < justList.length; i += 2) {
    const row = justList.slice(i, i + 2);
    rowsActive.push(row);
  }

  const renderlist = () => {
    const list = activeTab ? [...pastList] : [...justList];
    if (list.length === 0) {
      return (
        <Box flex={1}>
          <Box justifyContent={'center'} alignItems={'center'}>
            <History width={100} height={100} />
            <Text mt={5} variant={'h5'} bold>
              Uh-oh!
            </Text>
            <Text>Customer has not added any subscription yet.</Text>
          </Box>
        </Box>
      );
    }

    if(activeTab === 0){
      return rowsActive.map((row, index) => (
        <HStack key={index}>
          {row.map((data, itemIndex) => (
            <Pressable onPress={() => { setSelectAmount(data.id); setAmount(data.price) }} flex={0.5} key={itemIndex} mb="16px" pr={ itemIndex/2 === 0 ? 4:0 }>
              <Box
                variant="borderWithoutPadding"
                key={itemIndex}
                justifyContent="center"
                alignItems="center"
                borderColor={
                  selectAmount === data.id ? 'primary.600' : 'gray.300'
                }
                bg={selectAmount === data.id ? 'primary.10' : 'white'}
                borderWidth={'1'}>
                <Text variant="h6" bold pb={'1'} color={'primary.600'}>
                  RM{data.price}
                </Text>
                <Divider w={'full'} orientation="horizontal"   bg={ selectAmount === data.id ? 'primary.600' : 'gray.300'}/>
                <Box height={"80px"} justifyContent="start" alignItems="center" p={'1'}>
                  <Text variant="h6" bold textAlign={'center'}>
                    {data.title}
                  </Text>
                  <Text variant="label">{data.validity}</Text>
                </Box>
                {/* Tag */}
                {data.isPopular  ? (
                  <Badge
                    variant={"indigo"}
                    position="absolute"
                    size={'md'}
                    top="-12">
                    {data.tag}
                  </Badge>
                ) : null}
              </Box>
            </Pressable>
          ))}
        </HStack>
      ));
    }else{
      return list.map(data => {
        return (
          <Box key={data.id} variant={'shadow'} mb={5}>
            <HStack justifyContent={'space-between'}>
              <Badge variant={'outline'}>{data.tag}</Badge>
              <Badge variant={'success'}>{  '\u2022  '+data.type}</Badge>
            </HStack>
            <Text py={2} bold fontFamily={'Montserrat'}>
              {data.title}
            </Text>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <HStack space={2}>
                <History width={20} height={20} />
                <Text>{data.expire}</Text>
              </HStack>
              <Button
                onPress={() => {setbottomModal(true);}}     
                variant={activeTab === 2 ? 'default' : 'destructiveOutline'}
                size={'xs'}
                paddingX={5}>
                {activeTab === 2 ? 'Renew' : 'Unsubscribe'}
              </Button>
            </HStack>
          </Box>
        );
      });
    }
  };

  return (
    <>
      <Box flex={1} bg="#001870">
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Box flex={1}>
            <Box borderRadius={'5px'} mx="17px" bg="#FFF">
              <HStack py={4} justifyContent="space-evenly">
                <VStack flex={1} paddingLeft={5}>
                  <Text color={'#98A2B3'}>Mobile</Text>
                  <Text mb={1} bold>
                    {phone}
                  </Text>
                  <HStack space={1}>
                    <Badge variant={isDigiPhone ? 'yellow' : 'celcomBlue'}>
                      {isDigiPhone ? 'Digi' : 'Celcom'}
                    </Badge>
                    <Badge variant={'success'}>Active</Badge>
                  </HStack>
                </VStack>
                <Divider h={'full'} orientation="vertical" />
                <VStack flex={1} paddingLeft={5}>
                  <Text color={'#98A2B3'}>Plan</Text>
                  <Text mb={1} bold>
                    biGBonus 48
                  </Text>
                  <Text color="primary.600" variant="h8">
                    Expiry on 31 July 2023
                  </Text>
                </VStack>
              </HStack>
              <VStack py={2} pl={5} bg={'#F2F4F7'}>
                <Text color={'#98A2B3'}>Prepaid Balance</Text>
                <Text variant={'h4'} bold>
                  RM5.00
                </Text>
              </VStack>
            </Box>

            <Box flex={1}  bg="#F9FAFB">
              <Box  bg="#E8EFFD" px='17px' pb="16px">
                <Text variant="h5" bold py="16px">
                  Proceed to Discover Add-Ons
                </Text>
                <HStack justifyContent='space-evenly'>
                  <Pressable width={'75px'} height={'75px'} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'Internet',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <InfoCircle />
                    <Text>Internet</Text>
                  </Pressable>
                  <Pressable width={'75px'} height={'75px'} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'IDD',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <InfoCircle />
                    <Text>IDD</Text>
                  </Pressable>
                  <Pressable width={'75px'} height={'75px'} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'Roaming',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <InfoCircle />
                    <Text>Roaming</Text>
                  </Pressable>
                  <Pressable width={'75px'} height={'75px'} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'VAS',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <InfoCircle />
                    <Text>Others</Text>
                  </Pressable>
                </HStack>
                </Box>
                <Box mx="17px"  bg="#F9FAFB">
                <Text variant="h5" bold py="16px">
                  Customer's Add On
                </Text>
                {isDigiPhone && <Button.Group bg="gray.100" rounded="full" p="1.5" mb={"24px"}>
                    {paymentTab.map(item => (
                        <Button
                          key={item.id.toString()}
                          onPress={() => {
                            setActiveTab(item.id);
                          }}
                          flex={1}
                          variant={
                            activeTab === item.id ? 'pillActive' : 'pill'
                          }>
                          {item.pages}
                        </Button>
                      ))}
                </Button.Group>}
                {renderlist()}
              </Box>
            </Box>
          </Box>
        </ScrollView>
           {/* FOOTER */}
      <Box  safeAreaBottom bg="#FFF" p={"16px"}>
        {/* Total Payment */}
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Valid til end of bill cycle</Text>
            <Text variant="h6" bold color="primary.600">
              RM {amount.toFixed(2) || "XXX"}
            </Text>
          </Box>
          <Button isDisabled={!selectAmount} onPress={() => navigation.navigate('Checkout', {isDigiPhone})}>
            Proceed
          </Button>
        </HStack>
      </Box>
        {Platform.OS === 'ios' && (
          <Box
            bg="#F9FAFB"
            zIndex={-1}
            bottom={-100}
            left={0}
            right={0}
            position={'absolute'}
            height={'md'}
          />
        )}
      </Box>
      <Modal
        variant="bottom"
        isOpen={bottomModal}
        onClose={setbottomModal}
        accessibilityLabel="Default Modal">
        <Modal.Content variant="bottom">
          <Pressable onPress={() => setbottomModal(false)}>
            <ArrowLeft />
          </Pressable>
          <HStack justifyContent={'space-between'}>
            
            <Text flex={1} variant="h6" bold>
              1-Day Calls & SMS Pass (max charnum for this line is 64 chars)
            </Text>

            <Badge variant={'success'} alignSelf={'flex-start'}>
            {'  \u2022  '+'Auto-Renew'}
            </Badge>
          </HStack>
          <Text>
            Daily XXGB - Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Text>
          <HStack my={2} justifyContent={'space-between'} alignItems={'center'}>
            <Text variant="h6" bold>
              Overview
            </Text>
            {isHide ? 
              <Pressable onPress={() => setIsHide(!isHide)}>
                <ChevronUpIcon color="black" />
              </Pressable> :
              <Pressable onPress={() => setIsHide(!isHide)}>
                <ChevronDownIcon color="black" />
              </Pressable>
              }
          </HStack>

          {isHide && (
            <Box>
              <HStack
                my={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text>Subsription Name</Text>
                <Text color={'gray.600'}>5G Booster + 30GB (RM10)</Text>
              </HStack>
              <HStack
                my={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text>Users</Text>
                <Text color={'gray.600'}>5G</Text>
              </HStack>
              <HStack
                my={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text>Price</Text>
                <Text color={'gray.600'}>RM 10</Text>
              </HStack>
              <HStack
                my={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text>Validity</Text>
                <Text color={'gray.600'}>Valid till end of bill cycle</Text>
              </HStack>
              <HStack
                my={4}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Text>Auto Renew</Text>
                <Text color={'gray.600'}>Yes</Text>
              </HStack>
            </Box>
          )}
          {activeTab === 1 ? (
            <Button mb={3} variant={'secondaryGray'}  onPress={()=> setIsModalError(!isModalError)}>
              <HStack space={2}>
                <History width={20} height={20} />
                <Text>{"Unsubscribe"}</Text>
              </HStack>
            </Button>
           
          ) : (
            <Button mb={3}>Renew</Button>
          )}
        </Modal.Content>
      </Modal>
      <ModalError title="Unsubscribe confirmation" body="Are you sure to stop the subscription for the customer." button_yes="Unsubscribe" onClose={setIsModalError} isOpen={isModalError} onPress={()=>{}}/>
    </>
  );
};
export default AddOn;
