import React, { useState } from 'react';
// Native Base
import {
  Box,
  ScrollView,
  HStack,
  Text,
  Pressable,
  Spacer,
  Switch,
  Badge,
  Avatar,
  Center,
  VStack,
  Modal,
  Button,
} from 'native-base';

import { InfoCircle, Copy } from '@cd-next-gen-app/icons';

export const AutoBilling = ({ navigation }: { navigation: any }) => {
  const [defaultModal, setDefaultModal] = useState(false);
  const toggleSwitch = () => setDefaultModal((previousState) => !previousState);

  return (
    <Box flex={1} bg="white">
      <ScrollView>
        <Box flex={1} m="16px">
          <Box variant="shadow">
            <HStack
              space={[2, 3]}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Text variant="h7" bold color="gray.700">
                  Auto Billing
                </Text>
              </Box>
              <Box>
                <InfoCircle width="18px" color="#1561E8" />
              </Box>
              <Spacer />
              <Box alignItems="flex-end">
                <Switch onValueChange={toggleSwitch} value={defaultModal} />
              </Box>
            </HStack>
          </Box>
          {/* BILLING CARD */}
          <Box variant="shadow" bg="#4481ED" mt="16px">
            <HStack space={[2, 2]} justifyContent="space-between">
              <Center flexDir="row">
                <Avatar variant="rounded">
                  <Copy width="14px" height="14px" color="#1561E8" />
                </Avatar>
                <Text variant="body1" color="white" pl={2}>
                  60 19 23456789
                </Text>
              </Center>
              <Box alignItems="flex-end">
                <Badge variant="success">Active</Badge>
                <Text variant="label" bold color="gray.300" pt="12px">
                  Next Billing Cycle
                </Text>
                <Text variant="body" color="#FFFFFF">
                  28 Jun 2023
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* BILLING CARD BIND */}
          <Box variant="shadow" mt="16px">
            <Box variant="listing" pt="0px" flex={1}>
              {/* <HStack> */}
              <Box>
                <Text variant="body" bold color="gray.700">
                  Auto bill With
                </Text>
              </Box>
              <Box alignItems="flex-end">
                <Text>No card is binded</Text>
              </Box>
              {/* </HStack> */}
            </Box>
            <Pressable>
              <HStack alignItems="center" justifyContent="center" pt={5} pb={1}>
                <Text
                  variant="body2"
                  color="primary.600"
                  onPress={() =>
                    navigation.navigate('Auto Billing Select Card')
                  }
                >
                  Edit Settings
                </Text>
              </HStack>
            </Pressable>
          </Box>

          {/* MODAL POPUP */}
          <Modal
            isOpen={defaultModal}
            onClose={() => setDefaultModal(false)}
            accessibilityLabel="Default Modal"
          >
            <Modal.Content
              justifyContent="flex-end"
              width="90%"
              bgColor="white"
              p="10px"
            >
              <Avatar></Avatar>
              <Modal.CloseButton />

              <Text variant="body1" bold pt="16px">
                Are you sure want to switch off auto billing?
              </Text>
              <Text variant="body2">
                You would need to clear your next bill manually to avoid service
                interruptions.
              </Text>
              <Box pt={4}>
                <Button>Confirm</Button>
              </Box>
              <Box pt={3}>
                <Button variant="secondaryColor">Cancel</Button>
              </Box>
            </Modal.Content>
          </Modal>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default AutoBilling;
