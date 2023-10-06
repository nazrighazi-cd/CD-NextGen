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
} from 'native-base';
//Icons
import ModalError from '../../components/ModalError/ModalError';
import { InfoCircle, Close, ChevronRight, History } from '../../../../../../libs/icons/src';
import ArrowLeft from '../../../../../../libs/icons/src/general/Arrowleft';
import Search from '../../../../../../libs/icons/src/general/Search';

const ManageAddOn = ({ route, navigation }: any) => {
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

  const paymentTab = [
    {
      id: 0,
      pages: 'Active',
    },
    {
      id: 1,
      pages: 'Past',
    },
  ];

  const rowsActive = [];
  for (let i = 0; i < justList.length; i += 2) {
    const row = justList.slice(i, i + 2);
    rowsActive.push(row);
  }

  const renderlist = () => {
    const list = pastList;
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
              variant={activeTab === 1 ? 'default' : 'destructiveOutline'}
              size={'xs'}
              paddingLeft={0}
              paddingRight={0}
              >
              {activeTab === 1 ? 'Renew' : 'Unsubscribe'}
            </Button>
          </HStack>
        </Box>
      );
    });

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
            <Box p={4}>
              <Text variant="h3" bold>
                Manage Add On
              </Text>
            </Box>
            <Box mx="17px"  >
              {isDigiPhone && <Button.Group rounded="full" mb={8}>
                {paymentTab.map(item => (
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
        </ScrollView>
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
          {activeTab === 0 ? (
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
      <ModalError title="Unsubscribe confirmation" body="Are you sure to stop the subscription for the customer." button_yes="Unsubscribe" onClose={setIsModalError} isOpen={isModalError} onPress={() => { }} />
    </>
  );
};
export default ManageAddOn;
