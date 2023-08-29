import React, { useState } from 'react';
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
} from 'native-base';
import { InfoCircle, ChevronRight } from '@cd-next-gen-app/icons';

const SupplementaryDetails = ({ navigation }: { navigation: any }) => {
  const [bottomModal, setBottomModal] = useState(false);

  // Mock Data
  const supplementaryLine = [
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
          value: '-RM40.00',
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
          value: 'RM460.00',
          icons: <InfoCircle />,
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
  ];

  return (
    <Box flex={1} bg="white">
      <Box m="16px" flex={1}>
        {supplementaryLine.map((item) => (
          <ScrollView key={item.id}>
            {/* Supplementary Lines */}
            <Box flexDir="row" justifyContent="space-between">
              <Text variant="body1" bold>
                Supplementary Lines
              </Text>
            </Box>
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
            <Box variant="shadow" mt="16px">
              {item.billDetails.map((detail, index) => (
                <Box key={detail.id}>
                  {detail.id ? (
                    <Box
                      key={detail.id}
                      variant="listing"
                      borderBottomWidth={0}
                      borderTopWidth={
                        index === item.billDetails.length - 1 ? 1 : 0
                      }
                    >
                      <HStack>
                        <Box>
                          <Text
                            variant="body"
                            color={
                              detail.info === 'Previous Overdue'
                                ? '#F79009'
                                : '#667085'
                            }
                          >
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
                              width: '20px',
                              height: '20px',
                              color:
                                detail.info === 'Previous Overdue'
                                  ? '#F79009'
                                  : '#667085',
                            })}
                          </Box>
                        </Pressable>
                      </HStack>

                      <HStack alignItems="center">
                        <Text
                          variant="body"
                          bold
                          color={
                            detail.info === 'Previous Overdue'
                              ? '#F79009'
                              : undefined
                          }
                        >
                          {detail.value}
                        </Text>
                      </HStack>
                    </Box>
                  ) : null}
                </Box>
              ))}
            </Box>
            {/* Bill Statement */}
            <Box mt="16px" flexDir="row" justifyContent="space-between">
              <Text variant="body1" bold>
                Bill Statement
              </Text>
              <Box alignContent="flex-end" flexDir="row" alignItems="center">
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
        ))}
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

export default SupplementaryDetails;
