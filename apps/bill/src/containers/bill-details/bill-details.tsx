import React, { useState } from 'react';

// Native Base Components
import {
  useTheme,
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

// Icons
import { InfoCircle, ChevronRight } from '@cd-next-gen-app/icons';

const BillDetails = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();
  const [bottomModal, setBottomModal] = useState(false);

  // Bill Statement Card Mock Data
  const billStat = [
    {
      id: '1',
      phoneNo: '019-9980004',
      due: '28 Jun 2023',
      accNo: '425745103',
      total: 'RM428.00',
      tag: 'Active',
    },
  ];

  // Bill Details Card Mock Data
  const billDetails = [
    {
      id: '1',
      info: 'Credit Limit',
      value: 'RM500',
      icons: <InfoCircle />,
    },
    {
      id: '2',
      info: 'Unbilled Amount',
      value: '-RM428.00',
      icons: <InfoCircle />,
    },
    {
      id: '3',
      info: 'Remaining Credit Limit',
      value: 'RM72.00',
      icons: <InfoCircle />,
    },
  ];

  // Supplementary Lines Mock Data
  const supLines = [
    {
      id: '1',
      supNo: '019-6650001',
      tag: 'Active',
    },
    {
      id: '2',
      supNo: '019-6650002',
      tag: 'Active',
    },
    {
      id: '3',
      supNo: '019-6650003',
      tag: 'Active',
    },
  ];

  // Bill Statement Mock Data
  const billData = [
    {
      id: '1',
      date: '28 May 2023',
      value: 'RM 428.00',
    },
    {
      id: '2',
      date: '28 Apr 2023',
      value: 'RM 428.00',
    },
    {
      id: '3',
      date: '28 Mar 2023',
      value: 'RM 428.00',
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box m="16px" flex={1}>
          {/* Pinciple Lines */}
          <Box flexDir="row" justifyContent="space-between">
            <Text variant="body1" bold>
              Principle Lines
            </Text>
            <Box alignContent="flex-end" flexDir="row" alignItems="center">
              <Box pl="10px">
                <Text
                  variant="body"
                  color="primary.600"
                  onPress={() => navigation.navigate('Principle Lines')}
                >
                  View All
                </Text>
              </Box>
              <Box>
                <ChevronRight width="20px" color="#1561E8" />
              </Box>
            </Box>
          </Box>

          {/* Bill Statement Card */}
          {billStat.map((item, index) => (
            <Box variant="shadow" mt="16px">
              <HStack justifyContent="space-between">
                <Text variant="body1"> {item.phoneNo}</Text>
                <Badge variant="success">{item.tag}</Badge>
              </HStack>
              <Box pt="12px">
                <Text variant="label" color="#98A2B3">
                  Due On
                </Text>
                <Text variant="body"> {item.due}</Text>
              </Box>
              <HStack>
                <Spacer />
                <Text pt="12px">Total Due</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Box>
                  <Text variant="label" color="#98A2B3">
                    Account Number
                  </Text>
                  <Text variant="body"> {item.accNo}</Text>
                </Box>
                <Text variant="h2" bold>
                  {item.total}
                </Text>
              </HStack>
            </Box>
          ))}

          {/* Bill Details */}
          <Box variant="shadow" mt="16px">
            {/* Bill Details Card */}
            {billDetails.map((item, index) => (
              <Box
                key={index}
                variant="listing"
                borderBottomWidth={index === billData.length - 1 ? 0 : 1}
              >
                <HStack>
                  <Box>
                    <Text variant="body" color="#667085">
                      {item.info}
                    </Text>
                  </Box>
                  <Pressable onPress={() => setBottomModal(true)}>
                    {item.icons ? (
                      <Box
                        w="20px"
                        h="20px"
                        justifyContent="center"
                        alignItems="center"
                        ml="8px"
                      >
                        {React.cloneElement(item.icons, {
                          width: '75%',
                          height: '100%',
                          color: '#667085',
                        })}
                      </Box>
                    ) : null}
                  </Pressable>
                </HStack>
                <HStack alignItems="center">
                  <Text variant="body" bold>
                    {item.value}
                  </Text>
                </HStack>
              </Box>
            ))}
          </Box>

          {/* Supplementary Lines */}
          <Box mt="16px" flexDir="row" justifyContent="space-between">
            <Text variant="body1" bold>
              Supplementary Lines
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

          {/* Supplementary Lines Card*/}
          <Box variant="shadow" mt="16px">
            {supLines.map((item, index) => (
              <Pressable>
                <Box
                  key={index}
                  variant="listing"
                  pt="0px"
                  borderBottomWidth={index === supLines.length - 1 ? 0 : 1}
                >
                  <HStack alignItems="center">
                    <Box flexDirection="row" alignItems="center">
                      <Text variant="body" pr={2}>
                        {item.supNo}
                      </Text>
                      {item.tag ? (
                        <Badge variant="success">{item.tag}</Badge>
                      ) : null}
                    </Box>
                  </HStack>
                  <Box>
                    <ChevronRight color="#475467" />
                  </Box>
                </Box>
              </Pressable>
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

          {/* Bill Statement Card*/}
          <Box variant="shadow" mt="16px">
            {billData.map((item, index) => (
              <Pressable>
                <Box
                  key={index}
                  variant="listing"
                  pt="0px"
                  borderBottomWidth={index === billData.length - 1 ? 0 : 1}
                >
                  <HStack alignItems="center">
                    <Box flexDirection="row" alignItems="center">
                      <Text variant="body" pr={2}>
                        {item.date}
                      </Text>
                    </Box>
                  </HStack>
                  <Box>
                    <HStack>
                      <Text variant="body" bold>
                        {item.value}
                      </Text>
                      <ChevronRight />
                    </HStack>
                  </Box>
                </Box>
              </Pressable>
            ))}
          </Box>
        </Box>
      </ScrollView>

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
