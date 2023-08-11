import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme, HStack, Box, Text, VStack, Spacer } from 'native-base';

//Icons
import {
  AlertTriangle,
  Arrowleft,
  AutoBilling,
  Bill01,
  Bill02,
  Calendars,
  CalendarRefresh,
  Check,
  CheckCircle,
  ChevronRight,
  Close,
  Coins,
  CoinsHand,
  Contact,
  Copy,
  CurrencyRefresh,
  Download,
  Edit,
  File,
  FileAttachment,
  FileMedal,
  HelpCircle,
  History,
  InfoCircle,
  Lock01,
  Passcode,
  Plus,
  Search,
  Settings,
  Simcard,
  Facebook,
  LinkedIn,
  Twitter,
  ApplePay,
  Mastercard,
  Visa,
  Boost,
  GrabPay,
  MAE,
  TouchnGo,
  AffinBank,
  AgroBank,
  AllianceBank,
  AmBank,
  BankIslam,
  BankRakyat,
  CIMB,
  Muamalat,
} from '@cd-next-gen-app/icons';

const Icons = () => {
  const theme = useTheme();

  return (
    <ScrollView>
      <Box bg="white" px="3" py="4">
        {/* Icons */}
        <Box>
          <Text fontSize="xl" bold>
            Icons to be used in this cycle:
          </Text>
        </Box>
        <VStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <CalendarRefresh />{' '}
              <Text textAlign="center" width={120} color="black">
                calendar-refresh
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Arrowleft />{' '}
              <Text textAlign="center" width={120} color="black">
                arrow-left
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <ChevronRight />{' '}
              <Text textAlign="center" width={120} color="black">
                chevron-right
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <File />{' '}
              <Text textAlign="center" width={120} color="black">
                file-06
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <AutoBilling />{' '}
              <Text textAlign="center" width={120} color="black">
                auto-billing-01
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <FileMedal />{' '}
              <Text textAlign="center" width={120} color="black">
                file-medal
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <History />{' '}
              <Text textAlign="center" width={120} color="black">
                history
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Passcode />{' '}
              <Text textAlign="center" width={120} color="black">
                passcode
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <CurrencyRefresh />{' '}
              <Text textAlign="center" width={120} color="black">
                currency-ringgit-malaysia-refresh
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Plus />{' '}
              <Text textAlign="center" width={120} color="black">
                plus
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <HelpCircle />{' '}
              <Text textAlign="center" width={120} color="black">
                help-circle
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Contact />{' '}
              <Text textAlign="center" width={120} color="black">
                contact
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Check />{' '}
              <Text textAlign="center" width={120} color="black">
                check{' '}
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Close />{' '}
              <Text textAlign="center" width={120} color="black">
                close
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <InfoCircle />{' '}
              <Text textAlign="center" width={120} color="black">
                info-circle{' '}
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Calendars />{' '}
              <Text textAlign="center" width={120} color="black">
                calendar
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Copy />{' '}
              <Text textAlign="center" width={120} color="black">
                copy-01
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Settings />{' '}
              <Text textAlign="center" width={120} color="black">
                settings-04
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <AlertTriangle />{' '}
              <Text textAlign="center" width={120} color="black">
                alert-triangle
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Bill01 />{' '}
              <Text textAlign="center" width={120} color="black">
                bill-01
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Bill02 />{' '}
              <Text textAlign="center" width={120} color="black">
                bill-02
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Coins />{' '}
              <Text textAlign="center" width={120} color="black">
                coins
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <CoinsHand />{' '}
              <Text textAlign="center" width={120} color="black">
                coins-hand
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Download />{' '}
              <Text textAlign="center" width={120} color="black">
                download
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Edit />{' '}
              <Text textAlign="center" width={120} color="black">
                edit
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <FileAttachment />{' '}
              <Text textAlign="center" width={120} color="black">
                file-attachment
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Simcard />{' '}
              <Text textAlign="center" width={120} color="black">
                simcard
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Search />{' '}
              <Text textAlign="center" width={120} color="black">
                search-md
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Lock01 />{' '}
              <Text textAlign="center" width={120} color="black">
                lock-01
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <CheckCircle />{' '}
              <Text textAlign="center" width={120} color="black">
                check-circle
              </Text>
            </Box>
          </HStack>
        </VStack>

        {/* Payment Methods Icons */}
        <Box>
          <Text mt="10" mb="10" fontSize="md" bold>
            Payment Methods Icons
          </Text>
        </Box>
        <VStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <ApplePay width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                apple-pay
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Mastercard width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                mastercard
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Visa width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                visa
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <GrabPay width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                grab-pay
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <TouchnGo width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                TnG-eWallet
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Boost width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                boost
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <MAE width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                MAE
              </Text>
            </Box>
            <Spacer></Spacer>
          </HStack>
        </VStack>

        {/* Banks Icons */}
        <Box>
          <Text mt="10" mb="10" fontSize="md" bold>
            Bank Icons
          </Text>
        </Box>
        <VStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <AffinBank width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                affin-bank
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <AgroBank width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                agro-bank
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <AllianceBank width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                alliance-bank
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <AmBank width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                AmBank
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <BankIslam width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                bank-islam
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Muamalat width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                muamalat
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <BankRakyat width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                bank-rakyat
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <CIMB width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                cimb-clicks
              </Text>
            </Box>
          </HStack>
        </VStack>
        {/* Social Icons */}

        <Box>
          <Text mt="10" mb="10" fontSize="md" bold>
            Social Icons
          </Text>
        </Box>
        <VStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Facebook width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                facebook
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Twitter width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                twitter
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <LinkedIn width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                linkedin
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};
export default Icons;
