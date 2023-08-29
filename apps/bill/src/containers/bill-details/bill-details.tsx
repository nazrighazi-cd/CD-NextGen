import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

// Native Base Components
import {
  Pressable,
  Box,
  Text,
  Badge,
  HStack,
  ScrollView,
  Spacer,
  Button,
  Modal,
  Avatar,
  FlatList,
} from 'native-base';

// Icons
import {
  InfoCircle,
  ChevronRight,
  Simcard,
  AlertTriangle,
} from '@cd-next-gen-app/icons';

const BillDetails = ({ navigation }: { navigation: any }) => {
  const [bottomModal, setBottomModal] = useState(false);

  // Mock Data
  const principleLines = [
    {
      id: 1,
      phoneNo: '019-9980004',
      due: '28 Jun 2023',
      accNo: '425745103',
      total: 'RM428.00',
      tag: 'Active',
      variant: 'success',
      textColor: '#000000',
      dueColor: '#000000',
      billDetails: [
        {
          id: 1,
          info: 'Credit Limit',
          value: 'RM500',
          icons: <InfoCircle />,
        },
        {
          id: 2,
          info: 'Unbilled Amount',
          value: '-RM428.00',
          icons: <InfoCircle />,
        },
        {
          id: null,
          info: null,
          value: null,
          icons: null,
        },
        {
          id: 4,
          info: 'Remaining Credit Limit',
          value: 'RM72.00',
          icons: <InfoCircle />,
        },
      ],
      supplementaryLine: [
        {
          id: 1,
          supNo: '019-6650001',
          tag: 'Active',
          variant: 'success',
        },
        {
          id: 2,
          supNo: '019-6650002',
          tag: 'Active',
          variant: 'success',
        },
        {
          id: 3,
          supNo: '019-6650003',
          tag: 'Active',
          variant: 'success',
        },
      ],
      billStat: [
        {
          id: 1,
          date: '28 May 2023',
          value: 'RM 428.00',
        },
        {
          id: 2,
          date: '28 Apr 2023',
          value: 'RM 428.00',
        },
        {
          id: 3,
          date: '28 Mar 2023',
          value: 'RM 428.00',
        },
      ],
    },
    {
      id: 2,
      phoneNo: '019-9980003',
      due: '20 Jun 2023',
      accNo: '1234412546',
      total: 'RM158.00',
      tag: 'Suspended',
      variant: 'warning',
      textColor: '#F79009',
      dueColor: '#B54708',
      billDetails: [
        {
          id: 1,
          info: 'Credit Limit',
          value: 'RM300',
          icons: <InfoCircle />,
        },
        {
          id: 2,
          info: 'Unbilled Amount',
          value: '-RM118.00',
          icons: <InfoCircle />,
        },
        {
          id: 3,
          info: 'Previous Overdue',
          value: '-RM40.00',
          icons: <AlertTriangle />,
          textColor: '#F79009',
        },
        {
          id: 4,
          info: 'Remaining Credit Limit',
          value: 'RM142.00',
          icons: <InfoCircle />,
        },
      ],
      supplementaryLine: null,
      billStat: [
        {
          id: 1,
          date: '28 May 2023',
          value: 'RM 158.00',
        },
        {
          id: 2,
          date: '28 Apr 2023',
          value: 'RM 158.00',
        },
        {
          id: 3,
          date: '28 Mar 2023',
          value: 'RM 158.00',
        },
      ],
    },
    {
      id: 3,
      phoneNo: '019-9980002',
      due: '28 Jun 2023',
      accNo: '7784456621',
      total: 'RM128.00',
      tag: 'Line Barred',
      variant: 'error',
      textColor: '#F04438',
      dueColor: '#B42318',
      billDetails: [
        {
          id: 1,
          info: 'Credit Limit',
          value: 'RM300',
          icons: <InfoCircle />,
        },
        {
          id: 2,
          info: 'Unbilled Amount',
          value: '-RM58.00',
          icons: <InfoCircle />,
        },
        {
          id: 3,
          info: 'Previous Overdue',
          value: '-RM40.00',
          icons: <AlertTriangle />,
          textColor: '#F79009',
        },
        {
          id: 4,
          info: 'Remaining Credit Limit',
          value: 'RM172.00',
          icons: <InfoCircle />,
        },
      ],
      supplementaryLine: null,
      billStat: [
        {
          id: 1,
          date: '28 May 2023',
          value: 'RM 428.00',
        },
        {
          id: 2,
          date: '28 Apr 2023',
          value: 'RM 428.00',
        },
        {
          id: 3,
          date: '28 Mar 2023',
          value: 'RM 428.00',
        },
      ],
    },
  ];

  const width = Dimensions.get('window').width;

  return (
    <Box flex={1} bg="white">
      <Box m="16px" flex={1}>
        {/* Principle Lines */}
        <Box flexDir="row" justifyContent="space-between">
          <Text variant="body1" bold>
            Principle Lines
          </Text>
          <Box alignContent="flex-end" flexDir="row" alignItems="center">
            <Box pl="10px">
              <Text
                variant="body"
                color="primary.600"
                onPress={() => navigation.navigate('Supplementary Lines')}
              >
                View All
              </Text>
            </Box>
            <Box>
              <ChevronRight width="20px" color="#1561E8" />
            </Box>
          </Box>
        </Box>

        {/* Carousel */}
        <View style={{ flex: 1 }}>
          <Carousel
            loop
            width={width}
            height={500}
            data={principleLines}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ item }) => (
              <Box mr="32px">
                <ScrollView>
                  <Box key={item.id} variant="shadow" mt="16px">
                    <HStack justifyContent="space-between">
                      <Text variant="body1"> {item.phoneNo}</Text>
                      {item.tag ? (
                        <Badge variant={item.variant}>{item.tag}</Badge>
                      ) : null}
                    </HStack>
                    <Box pt="12px">
                      <Text variant="label" color="#98A2B3">
                        Due On
                      </Text>
                      <Text variant="body"> {item.due}</Text>
                    </Box>
                    <HStack>
                      <Spacer />
                      {item.total ? (
                        <Text pt="12px" color={item.dueColor}>
                          Total Due
                        </Text>
                      ) : null}
                    </HStack>
                    <HStack justifyContent="space-between">
                      <Box>
                        <Text variant="label" color="#98A2B3">
                          Account Number
                        </Text>
                        <Text variant="body"> {item.accNo}</Text>
                      </Box>
                      {item.total ? (
                        <Text variant="h2" bold color={item.textColor}>
                          {item.total}
                        </Text>
                      ) : null}
                    </HStack>
                  </Box>

                  {/* Bill Details */}
                  <Box key={item.id} variant="shadow" mt="16px">
                    {item.billDetails.map((detail, index) => (
                      <Box>
                        {detail.id ? (
                          <Box
                            key={detail.id}
                            variant="listing"
                            borderBottomWidth={
                              index === item.billDetails.length - 1 ? 0 : 1
                            }
                          >
                            <HStack>
                              <Box>
                                <Text variant="body" color="#667085">
                                  {detail.info}
                                </Text>
                              </Box>

                              <Pressable onPress={() => setBottomModal(true)}>
                                <Box
                                  w="20px"
                                  h="20px"
                                  justifyContent="center"
                                  alignItems="center"
                                  ml="8px"
                                >
                                  {React.cloneElement(detail.icons, {
                                    width: '75%',
                                    height: '100%',
                                    color: '#667085',
                                  })}
                                </Box>
                              </Pressable>
                            </HStack>

                            <HStack alignItems="center">
                              <Text variant="body" bold>
                                {detail.value}
                              </Text>
                            </HStack>
                          </Box>
                        ) : null}
                      </Box>
                    ))}
                  </Box>

                  {/* Supplementary Lines */}
                  <Box mt="16px" flexDir="row" justifyContent="space-between">
                    <Text variant="body1" bold>
                      Supplementary Lines
                    </Text>
                    <Box
                      alignContent="flex-end"
                      flexDir="row"
                      alignItems="center"
                    >
                      <Box pl="10px">
                        <Text
                          variant="body"
                          color="primary.600"
                          onPress={() =>
                            navigation.navigate('Supplementary Lines')
                          }
                        >
                          View All
                        </Text>
                      </Box>
                      <Box>
                        <ChevronRight width="20px" color="#1561E8" />
                      </Box>
                    </Box>
                  </Box>

                  {/* Supplementary Lines Cards */}

                  <Box key={item.id} variant="shadow" mt="16px">
                    {item.supplementaryLine &&
                      item.supplementaryLine.map((supLine, index) => (
                        <Pressable key={supLine.id}>
                          <Box
                            variant="listing"
                            pt="0px"
                            borderBottomWidth={
                              index === item.supplementaryLine.length - 1
                                ? 0
                                : 1
                            }
                          >
                            <HStack alignItems="center">
                              <Box flexDirection="row" alignItems="center">
                                <Text variant="body" pr={2}>
                                  {supLine.supNo}
                                </Text>
                                {supLine.tag ? (
                                  <Badge variant={supLine.variant}>
                                    {supLine.tag}
                                  </Badge>
                                ) : null}
                              </Box>
                            </HStack>
                            <Box>
                              <ChevronRight color="#475467" />
                            </Box>
                          </Box>
                        </Pressable>
                      ))}

                    {/* Supplementary card if data is null */}
                    {(!item.supplementaryLine ||
                      item.supplementaryLine.length === 0) && (
                      <Pressable>
                        <HStack justifyContent="center" space={[3, 2]}>
                          <Box flexDirection="row" alignItems="center">
                            <Avatar variant="info" width="32px" height="32px">
                              <Simcard
                                color="#1561E8"
                                width="16px"
                                height="16px"
                              />
                            </Avatar>
                          </Box>

                          <Box>
                            <Text variant="body" color="#344054">
                              There is no supplementary line belong to this
                              principal line.
                            </Text>
                          </Box>
                        </HStack>
                      </Pressable>
                    )}
                  </Box>

                  {/* Bill Statement */}
                  <Box mt="16px" flexDir="row" justifyContent="space-between">
                    <Text variant="body1" bold>
                      Bill Statement
                    </Text>
                    <Box
                      alignContent="flex-end"
                      flexDir="row"
                      alignItems="center"
                    >
                      <Box pl="10px">
                        <Text
                          variant="body"
                          color="primary.600"
                          onPress={() => navigation.navigate('Bill Statements')}
                        >
                          View All
                        </Text>
                      </Box>
                      <Box>
                        <ChevronRight width="20px" color="#1561E8" />
                      </Box>
                    </Box>
                  </Box>
                  {/* Bill Statement Cards */}

                  <Box key={item.id} variant="shadow" mt="16px">
                    {item.billStat &&
                      item.billStat.map((billItem, index) => (
                        <Pressable key={billItem.id}>
                          <Box
                            variant="listing"
                            pt="0px"
                            borderBottomWidth={
                              index === item.billStat.length - 1 ? 0 : 1
                            }
                          >
                            <HStack alignItems="center">
                              <Box flexDirection="row" alignItems="center">
                                <Text variant="body" pr={2}>
                                  {billItem.date}
                                </Text>
                              </Box>
                            </HStack>
                            <Box>
                              <HStack>
                                <Text variant="body" bold>
                                  {billItem.value}
                                </Text>
                                <ChevronRight />
                              </HStack>
                            </Box>
                          </Box>
                        </Pressable>
                      ))}
                  </Box>
                </ScrollView>
              </Box>
            )}
          />
        </View>
      </Box>

      {/* Tooltip Modal Info */}
      <Modal
        variant="bottom"
        isOpen={bottomModal}
        onClose={() => setBottomModal(false)}
        accessibilityLabel="Default Modal"
      >
        <Modal.Content
          justifyContent="flex-end"
          width="100%"
          borderTopRadius="24px"
          borderBottomRadius="0px"
        >
          <Modal.CloseButton />
          <Text variant="h5" bold color="gray.900">
            Label with max 30 Char(s)
          </Text>
          <Text variant="body" color="gray.600" pt={3}>
            Help / Tooltips copy for max 200 Char(s) Up to 5 lines.
          </Text>
        </Modal.Content>
      </Modal>

      {/* CTA Button */}
      <Box m="16px">
        <Button>Pay Bill</Button>
      </Box>
    </Box>
  );
};
export default BillDetails;
