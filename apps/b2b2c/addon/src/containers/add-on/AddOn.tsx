import React, { useMemo, useState } from 'react';
import { Animated, Platform, RefreshControl, View } from 'react-native';
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
  Input,
  Alert
} from 'native-base';
//Icons
import ModalError from '../../components/ModalError/ModalError';
import { InfoCircle, Close, ChevronRight, History } from '../../../../../../libs/icons/src';
import ArrowLeft from '../../../../../../libs/icons/src/general/Arrowleft';
import Search from '../../../../../../libs/icons/src/general/Search';

const AddOn = ({ route, navigation }: any) => {
  const { phone = '0161234567', isDigiPhone = true } = route?.params ?? {}
  const [isModalError, setIsModalError] = useState(false)
  const [bottomModal, setbottomModal] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [selectAmount, setSelectAmount] = useState<string | null>(null)
  const [amount, setAmount] = useState(0)
  const [selectCategory, setSelectCategory] = useState<Object | null>(null)
  const [selectCategoryList, setSelectCategoryList] = useState<Array<Object> | null>(null)

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
      price: 5,
      isPopular: true,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'Big Data Deals',
      type: 'One Time Pass',
      title: '20GB + 6.5GB Hotspot 3Mbps',
      price: 8,
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
      price: 8,
      title: 'Freedom Add On (max charnum for this line is 64 chars)',
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '2',
      tag: 'VAS',
      type: 'One Time Pass',
      price: 8,
      title: '1-Day Calls & SMS Pass (max charnum for this line is 64 chars)',
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
  ];

  const addOnTab = [
    {
      id: 0,
      pages: 'Internet',
    },
    {
      id: 1,
      pages: 'Add On',
    },
    {
      id: 2,
      pages: 'IDD',
    },
    {
      id: 3,
      pages: 'Roaming',
    },
  ];


  const listTab = [
    {
      id: 0,
      title: 'Ultra Hour Pass',
      description: "Validity starts from an hour onwards.",
      isRecommended: true,
    },
    {
      id: 1,
      title: 'Internet Pass',
      description: "Daily passes available",
      isRecommended: false,

    },
    {
      id: 2,
      title: 'just4ME™',
      description: "Validity starts from 1 day onwards.",
      isRecommended: false,
    },
  ];

  // Mock Data
  const ultraHourPass = [
    {
      id: '1',
      type: 'Ultra Hour Pass',
      title: '1 Hour',
      hour: 1,
      tag: 'Recommended',
      price: 1,
      isPopular: true,
      validity: 'Unlimited Internet',
      expire: null,
    },
    {
      id: '2',
      type: 'Ultra Hour Pass',
      title: '3 Hour',
      hour: 3,
      tag: null,
      price: 3,
      isPopular: true,
      validity: 'Unlimited Internet',
      expire: null,
    },
    {
      id: '3',
      type: 'Ultra Hour Pass',
      title: '5 Hour',
      hour: 5,
      tag: null,
      price: 5,
      isPopular: true,
      validity: 'Unlimited Internet',
      expire: null,
    },
  ];


  const internetPass = [
    {
      id: '4',
      type: 'Internet Pass',
      title: '2GB',
      price: 3,
      hour: 24,
      tag: 'Recommended',
      isPopular: true,
      validity: 'Daily',
      expire: null,
    },
    {
      id: '5',
      type: 'Internet Pass',
      title: '4GB',
      price: 5,
      hour: 24,
      tag: null,
      isPopular: true,
      validity: 'Daily',
      expire: null,
    },
  ];

  const just4Me = [
    {
      id: '6',
      tag: 'Malaysiaku Deals',
      type: 'Auto-Renew',
      title: '5G Booster',
      price: 5,
      isPopular: true,
      hour: 120,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
    {
      id: '7',
      tag: null,
      type: 'One Time Pass',
      title: '20GB + 6.5GB Hotspot 3Mbps',
      price: 8,
      hour: 120,
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
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


    return listTab.map(data => {
      return (
        <Pressable onPress={() => {
          let type = ultraHourPass;
          if (data.title === "Internet Pass")
            type = internetPass;
          else if (data.title === "just4ME™")
            type = just4Me;
          setSelectCategory(data);
          setSelectCategoryList(type);
          navigation.navigate('DiscoverAddOn', {
            title: data.title,
            data: type,
            phone: phone,
            isDigiPhone: phone.includes('016'),
          })
        }}  >
          <Box
            variant="borderWithoutBottom"
            justifyContent="left"
            alignItems="left"
            borderColor={
              'gray.300'
            }
            bg={'white'}
            m={1}
            p={2}
            borderWidth={1} >
            <Box height={45} p={1}>
              <Text variant="h6" bold >
                {data.title}
              </Text>
              <Text variant="label">{data.description}</Text>
            </Box>
            {/* Tag */}
            {data.isRecommended ? (
              <Badge
                variant={"popular"}
                position="absolute"
                size={'md'}
                top={-12}>
                {"Recommended"}
              </Badge>
            ) : null}
          </Box>
        </Pressable>
      );
    });

    if (activeTab === 0) {
      return rowsActive.map((row, index) => (
        <HStack key={index}>
          {row.map((data, itemIndex) => (
            <Pressable onPress={() => { setSelectAmount(data.id); setAmount(data.price) }} flex={0.5} key={itemIndex} mb="16px" pr={itemIndex / 2 === 0 ? 4 : 0}>
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
                <Divider w={'full'} orientation="horizontal" bg={selectAmount === data.id ? 'primary.600' : 'gray.300'} />
                <Box height={"80px"} justifyContent="start" alignItems="center" p={'1'}>
                  <Text variant="h6" bold textAlign={'center'}>
                    {data.title}
                  </Text>
                  <Text variant="label">{data.validity}</Text>
                </Box>
                {/* Tag */}
                {data.isPopular ? (
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
    } else {
      return list.map(data => {
        return (
          <Box key={data.id} variant={'shadow'} mb={5}>
            <HStack justifyContent={'space-between'}>
              <Badge variant={'outline'}>{data.tag}</Badge>
              <Badge variant={'success'}>{'\u2022  ' + data.type}</Badge>
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
                onPress={() => { setbottomModal(true); }}
                variant={activeTab === 2 ? 'default' : 'destructiveOutline'}
                size={'xs'}
                px={5}>
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
      <Box flex={1} bg="#FFF">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Box flex={1}>
            <Box borderRadius={12} m={17} bg="#E8EFFD">
              <HStack py={3} justifyContent="space-evenly">
                <VStack flex={1} pl={5}>
                  <Text color={'#98A2B3'}>Mobile</Text>
                  <Text mb={1} variant="h6" bold>
                    {phone}
                  </Text>
                  <HStack space={1}>
                    <Badge variant={isDigiPhone ? 'yellow' : 'celcomBlue'}>
                      {isDigiPhone ? 'Digi' : 'Celcom'}
                    </Badge>
                    <Badge variant={'success'}>Active</Badge>
                  </HStack>
                </VStack>
                {/* <Divider h={'full'} orientation="vertical" /> */}
                {/* <VStack flex={1} pl={5}>
                  <Text color={'#98A2B3'}>Plan</Text>
                  <Text mb={1} bold>
                    biGBonus 48
                  </Text>
                  <Text color="primary.600" variant="h8">
                    Expiry on 31 July 2023
                  </Text>
                </VStack> */}
                <VStack flex={1} pl={5}>
                  <Text color={'#98A2B3'}>Prepaid Balance</Text>
                  <Text mb={1} variant="h5" bold>
                    RM5.00
                  </Text>
                  <Pressable onPress={() => {
                    navigation.navigate('ManageAddOn', {
                      title: 'Add On',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                  }}>
                    <Text color="primary.600" variant="h8" >
                      @ Manage Add On
                    </Text>
                  </Pressable>
                </VStack>
              </HStack>
              {/* <VStack py={2} pl={5} bg={'#F2F4F7'}>
                <Text color={'#98A2B3'}>Prepaid Balance</Text>
                <Text variant={'h4'} bold>
                  RM5.00
                </Text>
              </VStack> */}
            </Box>

            <Box flex={1}>
              <Box px={4} pb={4}>
                <Text variant="h3" bold>
                  Select Add On
                </Text>
                <Text variant="b2" my={2}>
                  Search for customer’s preferred Add On.
                </Text>
                <VStack w="100%" space={25} alignSelf="center" m={2}>
                  <Input placeholder="Search" width="100%" borderRadius={10} fontSize={14} py={2} px={1} InputLeftElement={<Box p={3}><Search color="gray" /></Box>} />
                </VStack>
                {/* <HStack justifyContent='space-evenly'>
                  <Pressable width={75} height={75} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'Internet',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <Text>Internet</Text>
                  </Pressable>
                  <Pressable width={'75px'} height={'75px'} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'VAS',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <Text>Add On</Text>
                  </Pressable>
                  <Pressable width={75} height={75} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'IDD',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <Text>IDD</Text>
                  </Pressable>
                  <Pressable width={75} height={75} bg="#F9FAFB" m={1} p={2}
                    onPress={() => navigation.navigate('DiscoverAddOn', {
                      title: 'Roaming',
                      phone: phone,
                      isDigiPhone: phone.includes('016'),
                    })
                    }>
                    <Text>Roaming</Text>
                  </Pressable>
                </HStack> */}
              </Box>
              <Box mx="17px"  >
                {isDigiPhone && <Button.Group rounded="full" mb={8}>
                  {addOnTab.map(item => (
                    <Button
                      key={item.id.toString()}
                      onPress={() => {
                        setActiveTab(item.id);
                      }}
                      flex={1}
                      variant={
                        activeTab === item.id ? 'pillTabActive' : 'pillTab'
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
        <Box safeAreaBottom bg="#FFF" variant={'topShadow'} >
          <Pressable onPress={() => setbottomModal(true)}>
            <HStack justifyContent="space-between">
              <InfoCircle height={"100%"} />
              <Box>
                <Text variant={'h6'} bold>
                  Dealers, earn extra cash here!
                </Text>
                <Text color={'gray.600'}>Upsell these deals to your customer & get rewards!</Text>
              </Box>
            </HStack>
          </Pressable>
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
          <HStack justifyContent="space-between">
            <InfoCircle height={"100%"} />
            <Box p={1}>
              <Text variant={'h6'} bold>
                Dealers, earn extra cash here!
              </Text>
              <Text color={'gray.600'}>Upsell these deals to your customer & get rewards!</Text>

            </Box>
          </HStack>
          <Alert my="16px" variant="info">
            <VStack w="90%">
              <InfoCircle color="#114EBA" width="20px" />
              <Text color="#114EBA" mt="2">
                Customer's data utilsation exceeds 200GB
              </Text>
            </VStack>
          </Alert>

          <Pressable  >
            <Box
              variant="borderWithoutPadding"
              justifyContent="start"
              alignItems="start"
              borderColor={
                'gray.300'
              }
              bg={'white'}
              borderWidth={1} 
              mt={2}
              >
              <HStack p={3}>
                <Text variant="h6" bold pb={1} flex={1}>
                  20GB + 6.6GB Hotspot 3Mbps
                </Text>
                <Button variant={'pink'} >
                  660GB
                </Button>
              </HStack>
              <Divider w={'full'} orientation="horizontal" bg={'gray.300'} />
              <Box  justifyContent="start" alignItems="start" p={2}>
                <Text variant="h6" bold textAlign={'center'} p={2}>
                  RM6
                </Text>
                <HStack px={2} alignItems={'center'}>
                  <InfoCircle color="#114EBA" width="20px" />
                  <Text variant="label"> Valid for 1 day</Text>
                </HStack>
                <HStack  px={2} alignItems={'center'}>
                  <InfoCircle color="#114EBA" width="20px" />
                  <HStack>
                  <Text variant="label">You will earn :</Text>
                  <Text variant="label" color={'success.300'}> RM1.50</Text>
                  </HStack>
                </HStack>
              </Box>
              {/* Tag */}
              {true ? (
                <Badge
                  variant={"popular"}
                  position="absolute"
                  size={'md'}
                  top={-12}>
                  Malaysiaku Promo
                </Badge>
              ) : null}
            </Box>
          </Pressable>
        </Modal.Content>
      </Modal>
      <ModalError title="Unsubscribe confirmation" body="Are you sure to stop the subscription for the customer." button_yes="Unsubscribe" onClose={setIsModalError} isOpen={isModalError} onPress={() => { }} />
    </>
  );
};
export default AddOn;
