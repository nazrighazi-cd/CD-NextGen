import React, { useState } from 'react';
// Native Base Components
import {
  useTheme,
  Pressable,
  Box,
  Text,
  Icon,
  Badge,
  HStack,
  ScrollView,
  Spacer,
  Radio,
  Switch,
  Modal,
} from 'native-base';
// Icons
import Info from '../../assets/icons/info-circle.svg';
import Visa from '../../assets/icons/payment-methods/Visa.svg';

const AutoReloadActive = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  const [bottomModal, setBottomModal] = useState(false);

  // Mock Data
  const paymentData = [
    {
      id: '1',
      info: 'When balance falls below',
      value: 'RM50',
      icons: null,
    },
    {
      id: '2',
      info: 'Top Up this amount',
      value: 'RM50',
      icons: null,
    },
    {
      id: '3',
      info: 'Top Up with',
      value: 'Visa 1234',
      icons: <Visa />,
    },
  ];

  const [value, setValue] = React.useState('one');

  return (
    <>
      <Box flex={1} bg="white">
        <ScrollView>
          <Box m="16px">
            {/* AUTO RELOAD ACTIVATE*/}
            <Box variant="shadow">
              <HStack
                space={[2, 3]}
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text variant="h7" bold color="gray.700">
                    Auto Reload
                  </Text>
                </Box>
                <Box>
                  <Pressable onPress={() => setBottomModal(true)}>
                    <Info width="18px" />
                  </Pressable>
                </Box>
                <Spacer />
                <Box alignItems="flex-end">
                  <Switch />
                </Box>
              </HStack>
            </Box>

            {/* RELOAD CARD */}
            <Box variant="shadow" bg="#4481ED" mt="16px">
              <HStack space={[2, 3]} justifyContent="space-between">
                <Box>
                  <Icon bg="white" p="22px"></Icon>
                </Box>
                <Box>
                  <Text variant="h6" color="white" pb="1.5">
                    60 19 23456789
                  </Text>
                  <Text variant="label" bold color="white">
                    Reload before 28/07/2023
                  </Text>
                </Box>
                <Spacer></Spacer>
                <Box alignItems="flex-end">
                  <Badge variant="success">Active</Badge>
                  <Text variant="h5" bold color="white">
                    RM XX.XX
                  </Text>
                </Box>
              </HStack>
            </Box>

            {/* AUTO RELOAD TYPE */}
            <Box mt="16px" variant="shadow">
              <Text bold fontSize="12px" pb="16px">
                Auto Reload type
              </Text>
              <Radio.Group
                name="myRadioGroup"
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <HStack justifyContent="center">
                  <Box variant="selection">
                    <Text>Threshold</Text>
                    <Radio value="one"></Radio>
                  </Box>
                  <Box variant="selection" ml="2">
                    <Text>Calendar</Text>
                    <Radio value="one"></Radio>
                  </Box>
                </HStack>
              </Radio.Group>
            </Box>

            {/* INFORMATION DETAILS */}
            <Box variant="shadow" mt="16px">
              {/* List of Card Options */}
              {paymentData.map((item, index) => (
                <Box key={index} variant="listing">
                  <Box>
                    <Text>{item.info}</Text>
                  </Box>
                  <HStack alignItems="center">
                    {item.icons ? (
                      <Box
                        w="50px"
                        h="30px"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {React.cloneElement(item.icons, {
                          width: '75%',
                          height: '100%',
                        })}
                      </Box>
                    ) : null}
                    <Text>{item.value}</Text>
                  </HStack>
                </Box>
              ))}
              <Text
                variant="body2"
                color="primary.600"
                textAlign="center"
                mt={5}
                onPress={() => navigation.navigate('Add Card')}
              >
                Edit Setting
              </Text>
            </Box>
          </Box>
        </ScrollView>
      </Box>

      {/* TOOLTIP MODAL INFO */}
      <Modal
        variant="bottom"
        isOpen={bottomModal}
        onClose={() => setBottomModal(false)}
        accessibilityLabel="Default Modal"
        _backdrop={{
          bg: 'black',
        }}
      >
        <Modal.Content
          justifyContent="flex-end"
          width="100%"
          borderTopRadius="24px"
          borderBottomRadius="0px"
        >
          <Modal.CloseButton />
          <Text variant="h6" bold color="gray.900" pb={2}>
            Label with max 30 Char(s)
          </Text>
          <Text variant="body" color="gray.600">
            Help / Tooltips copy for max 200 Char(s) Up to 5 lines.
          </Text>
        </Modal.Content>
      </Modal>
    </>
  );
};
export default AutoReloadActive;
