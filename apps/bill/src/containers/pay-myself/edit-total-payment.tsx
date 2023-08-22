import React, { useState } from 'react';
// Native Base
import {
  Box,
  Text,
  Badge,
  ScrollView,
  Spacer,
  Button,
  Modal,
  Avatar,
  Pressable,
  HStack,
} from 'native-base';
// Icons
import { Bill01, Edit } from '@cd-next-gen-app/icons';
// Components
import FloatingInput from '../../../../../libs/themes/components/FloatingInput';

export const EditTotal = ({ navigation }) => {
  // Modal States
  const [defaultModal, setDefaultModal] = useState(false);

  // Mock Data
  const msisdnNumber = [
    {
      id: '1',
      msisdn: '019-9980004',
      tag: 'Active',
      tagLine: '6 lines',
      amount: '428.00',
      due: '20 Jun 2023',
      supplementaryLine: [
        {
          msisdn: '019-9980001',
          amount: '40.00',
        },
        {
          msisdn: '019-9980002',
          amount: '40.00',
        },
        {
          msisdn: '019-9980003',
          amount: '40.00',
        },
      ],
    },
    {
      id: '2',
      msisdn: '019-9980001',
      tag: 'Suspended',
      tagLine: null,
      amount: '466.00',
      due: '30 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '3',
      msisdn: '019-9980002',
      tag: 'Active',
      tagLine: null,
      amount: '98.00',
      due: '15 Jun 2023',
      supplementaryLine: null,
    },
    {
      id: '4',
      msisdn: '019-9980003',
      tag: 'Active',
      tagLine: null,
      amount: '230.00',
      due: '2 August 2023',
      supplementaryLine: null,
    },
  ];

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          {msisdnNumber.map((item, index) => (
            <Pressable key={index}>
              <Box variant="shadow" mb="12px">
                <HStack justifyContent="space-between">
                  <Text variant="body" bold>
                    {item.msisdn}
                  </Text>
                  <HStack flexDir="row" space={2}>
                    <Badge
                      variant={item.tag === 'Suspended' ? 'warning' : 'success'}
                    >
                      {item.tag}
                    </Badge>
                    {item.tagLine ? <Badge>{item.tagLine}</Badge> : null}
                  </HStack>
                </HStack>
                <Box mt="13px">
                  <Text variant="body2" color="gray.500">
                    Due on
                  </Text>
                  <Text variant="body2">{item.due}</Text>
                </Box>
                <HStack mt="13px" justifyContent="space-between">
                  <Box>
                    <Text variant="body2" color="gray.500">
                      Current Due
                    </Text>
                    <Text variant="body2">RM {item.amount}</Text>
                  </Box>
                  <Box>
                    <Spacer />
                    <HStack space={2}>
                      <Text variant="h4" bold color="primary.600">
                        RM {item.amount}
                      </Text>
                      <Box mt={1}>
                        <Edit
                          width={22}
                          strokeWidth={1.8}
                          color="#1561E8"
                          onPress={() => setDefaultModal(true)}
                        />
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </Pressable>
          ))}
        </Box>
      </ScrollView>

      {/* FOOTER */}
      <Box m="16px">
        {/* Total Payment */}
        <HStack justifyContent="space-between">
          <Box>
            <Text variant="body2">Total Payment</Text>
            <Text variant="h6" bold color="primary.600" mr={1}>
              RM 428.00
            </Text>
          </Box>
          <Button onPress={() => navigation.navigate('Select Wallet')}>
            Continue
          </Button>
        </HStack>
      </Box>

      {/* EDIT MODAL FOR AMOUNT */}
      <Modal
        isOpen={defaultModal}
        onClose={() => setDefaultModal(false)}
        accessibilityLabel="Default Modal"
      >
        <Modal.Content backgroundColor="white">
          <Modal.CloseButton />
          <Avatar variant="info">
            <Bill01 color="#1561E8" />
          </Avatar>
          <Text variant="h6" bold py="16px">
            Change payment amount
          </Text>
          <FloatingInput
            label="Payment amount for 019-9980001"
            placeholder="RM"
            type="number"
          />
          <Text variant="label" color="gray.600" pt="4px">
            Minimum pay bill amount is RM 1.
          </Text>
          <Box mt="30px">
            <Button
              mb="12px"
              onPress={() => navigation.navigate('Edit Total Payment')}
            >
              Confirm
            </Button>
            <Button variant="secondaryGray">Cancel</Button>
          </Box>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default EditTotal;
