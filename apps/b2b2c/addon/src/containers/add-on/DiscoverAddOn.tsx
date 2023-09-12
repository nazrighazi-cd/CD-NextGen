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
  Heading,
  Input,
  Icon,
} from 'native-base';
//Icons
import ArrowLeft from '../../../../../../libs/icons/src/general/Arrowleft';
import Search from '../../../../../../libs/icons/src/general/Search';

import ModalError from '../../components/ModalError/ModalError';
import {InfoCircle, Close,ChevronRight,History} from '../../../../../../libs/icons/src';

const DiscoverAddOn = ({route, navigation , title}: any) => {
  const {phone, isDigiPhone} = route.params;
  const [isModalError, setIsModalError] = useState(false)
  const [bottomModal, setbottomModal] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [selectAmount, setSelectAmount] = useState<string|null>(null)
  const [selectCategory, setSelectCategory] =  useState<Object|null>(null)
  const [selectCategoryList, setSelectCategoryList] =  useState<Array<Object>|null>(null)

  const [amount, setAmount] = useState(0)

  const onRefresh = React.useCallback(() => {
  
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // Mock Data
  const ultraHourPass = [
    {
      id: '1',
      type: 'Ultra Hour Pass',
      title: '1 Hour',
      hour: 1,
      tag: 'Recommended',
      price : 1,
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
      price : 3,
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
      price : 5,
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
      price : 3,
      hour: 24,
      tag: 'Recommended',
      isPopular: true,
      validity: 'Daily',
      expire: null,
    },
    {
      id: '5',
      type: 'Internet Pass',
      title:'4GB',
      price : 5,
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
      price : 5,
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
      price : 8,
      hour: 120,
      isPopular: false,
      validity: 'Valid for 5 Days',
      expire: 'Expired on: 18/07/2023',
    },
  ];

  const internetTab = [
    {
      id: 0,
      pages: 'Popular',
    },
    {
      id: 1,
      pages: 'All',
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

 
  const sliceList=(list)=>{
    if(activeTab ===0 ){
      list = list.filter(function(data) {
        return data.isPopular;
      });
    }
    
    const rowsActive = [];
    for (let i = 0; i < list.length; i += 2) {
      const row = list.slice(i, i + 2);
      rowsActive.push(row);
    }
    return rowsActive;
  }

  const renderlist = (list,type) => {
    const sliced_list = sliceList(list);

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
      return sliced_list.map((row, index) => (
        <HStack key={index}>
          {row.map((data, itemIndex) => (
            <Pressable onPress={() => { setSelectAmount(data.id); setAmount(data.price) }} flex={0.5} key={itemIndex} pr={ itemIndex/2 === 0 ? 4:0 } >
              <Box
                variant="borderWithoutPadding"
                key={itemIndex}
                justifyContent="center"
                alignItems="center"
                borderColor={
                  selectAmount === data.id ? 'primary.600' : 'gray.300'
                }
                bg={selectAmount === data.id ? 'primary.10' : 'white'}
                borderWidth={1}>
                <Text variant="h6" bold pb={1} color={'primary.600'}>
                  RM{data.price}
                </Text>
                <Divider w={'full'} orientation="horizontal"   bg={ selectAmount === data.id ? 'primary.600' : 'gray.300'}/>
                <Box height={type===true ?75:55} justifyContent="start" alignItems="center" p={1}>
                  <Text variant="h6" bold textAlign={'center'}>
                    {data.title}
                  </Text>
                  <Text variant="label">{data.validity}</Text>
                </Box>
                {/* Tag */}
                {data.tag  ? (
                  <Badge
                    variant={"popular"}
                    position="absolute"
                    size={'md'}
                    top={-12}>
                    {data.tag}
                  </Badge>
                ) : null}
              </Box>
            </Pressable>
          ))}
        </HStack>
      ));
    }else{
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
            setbottomModal(true);
          }}  >
              <Box
                variant="borderWithoutBottom"
                justifyContent="left"
                alignItems="left"
                borderColor={
                'gray.300'
                }
                bg={'white'}
                m={6}
                mb={-2}
                p={2}
                borderWidth={1} >
               <Box height={55} p={1}>
                  <Text variant="h6" bold >
                    {data.title}
                  </Text>
                  <Text variant="label">{data.description}</Text>
                </Box>
                {/* Tag */}
                {data.isRecommended  ? (
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
    }
  };

  const renderlistAll = (type) => {
    const sliced_list = sliceList(selectCategoryList);

    return sliced_list.map((row, index) => (
        <HStack key={index}>
          {row.map((data, itemIndex) => (
            <Pressable onPress={() => { setSelectAmount(data.id); setAmount(data.price) }} flex={0.5} key={itemIndex} pr={ itemIndex/2 === 0 ? 4:0 } >
              <Box
                variant="borderWithoutPadding"
                key={itemIndex}
                justifyContent="center"
                alignItems="center"
                borderColor={
                  selectAmount === data.id ? 'primary.600' : 'gray.300'
                }
                bg={selectAmount === data.id ? 'primary.10' : 'white'}
                borderWidth={1}>
                <Text variant="h6" bold pb={1} color={'primary.600'}>
                  RM{data.price}
                </Text>
                <Divider w={'full'} orientation="horizontal"   bg={ selectAmount === data.id ? 'primary.600' : 'gray.300'}/>
                <Box height={type==="just4ME™" ?75:55} justifyContent="start" alignItems="center" p={1}>
                  <Text variant="h6" bold textAlign={'center'}>
                    {data.title}
                  </Text>
                  <Text variant="label">{data.validity}</Text>
                </Box>
                {/* Tag */}
                {data.tag  ? (
                  <Badge
                    variant={"popular"}
                    position="absolute"
                    size={'md'}
                    top={-12}>
                    {data.tag}
                  </Badge>
                ) : null}
              </Box>
            </Pressable>
          ))}
        </HStack>
      ));
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
            <Box flex={1}  bg="#F9FAFB">
              <Box  bg="#E8EFFD" p={4}>
                <Text variant="h5" bold py={4}>
                  Select {route.params.title}
                </Text>
                <Text variant="b2" mb={4}>
                  Search for customer’s preferred {route.params.title} Add On.
                </Text>
                <VStack w="100%" space={25} alignSelf="center" mb={4}>
                  <Input placeholder="Search" width="100%" borderRadius={10} fontSize={14} py={3} px={1} InputLeftElement={<Box p={3}><Search color="gray"/></Box>}/>
                </VStack>

                {isDigiPhone && <Button.Group bg="gray.100" rounded="full" p={1} mb={1}>
                    {internetTab.map(item => (
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
              </Box>
              {activeTab === 0 ? <>
                <Box px={4}>
                  <Text variant="h5" bold py={4}>
                    Ultra House Pass
                  </Text>
                  {renderlist(ultraHourPass, false)}
                </Box>

                <Box px={4}>
                <Text variant="h5" bold py={4}>
                    Internet Pass
                  </Text>
                  {renderlist(internetPass, false)}
                </Box>

                <Box px={4}>
                <Text variant="h5" bold py={4}>
                    just4ME™
                  </Text>
                  {renderlist(just4Me, true)}
                </Box>
              </> : renderlist(listTab, false)
              }
            </Box>
          </Box>
        </ScrollView>
      {/* FOOTER */}
        <Box safeAreaBottom bg="#FFF" px={4} pt={4}>
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
        {selectCategoryList &&
          <Modal.Content variant="bottom">
            <Pressable onPress={() =>{setbottomModal(false)}}>
              <ArrowLeft />
            </Pressable>
            <HStack justifyContent={'space-between'}>
              <Text flex={1} variant="h6" bold py={4}>
                {selectCategory.title}
              </Text>
              {selectCategory.isRecommended &&
                <Badge variant={'popular'} alignSelf={'center'}>
                  Recommended
                </Badge>
              }
            </HStack>
            <Text pb={6}>
              Select the product variation
            </Text>
            {renderlistAll(selectCategory.title)}
            <Box bg="#FFF" mx={-2} mb={2.5}>
              <HStack justifyContent="space-between">
                <Box>
                  <Text variant="body2">Valid til end of bill cycle</Text>
                  <Text variant="h6" bold color="primary.600">
                    RM {amount.toFixed(2) || "XXX"}
                  </Text>
                </Box>
                <Button isDisabled={!selectAmount} onPress={() => navigation.navigate('Checkout', { isDigiPhone })}>
                  Proceed
                </Button>
              </HStack>
            </Box>
          </Modal.Content>
        }
      </Modal>
    </>
  );
};
export default DiscoverAddOn;
