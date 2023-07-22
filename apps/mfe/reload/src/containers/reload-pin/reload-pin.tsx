import React from 'react';
// Native Base Components
import {
  useTheme,
  Box,
  HStack,
  Text,
  Icon,
  Badge,
  Input,
  Button,
  Spacer,
} from 'native-base';
// Icons
import Info from '../../assets/icons/info-circle.svg';

const ReloadPin = ({ navigation }: { navigation: any }) => {
  const theme = useTheme();

  return (
    <>
      <Box flex={1} bg="white">
        <Box flex={1} m="16px">
          {/* RELOAD CARD */}
          <Box variant="shadow" bg="#4481ED">
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
                <Text variant="h5" bold color="#FFFFFF">
                  RM XX.XX
                </Text>
              </Box>
            </HStack>
          </Box>

          {/* ENTER DIGIT */}
          <Box variant="shadow" mt="16px">
            <HStack alignContent="center">
              <Text variant="body2" bold pb="16px" pr={2}>
                Enter 16-Digit Reload PIN
              </Text>
              <Box mt={-0.5}>
                <Info width="16px" />
              </Box>
            </HStack>
            <Input placeholder="16-Digit Pin Number" py={4} />
          </Box>
        </Box>

        {/* FOOTER */}
        <Box m="16px">
          <Button onPress={() => navigation.navigate('Reload Via Pin')}>
            Continue
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ReloadPin;
