import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme, HStack, Box, Text, VStack, Spacer } from 'native-base';

//Icons
import { Arrowleft } from '../../icons';
import { AutoBilling } from '../../icons';
import { Calendars } from '../../icons';
import { CalendarRefresh } from '../../icons';
import { Check } from '../../icons';
import { ChevronRight } from '../../icons';
import { Close } from '../../icons';
import { Contact } from '../../icons';
import { Copy } from '../../icons';
import { CurrencyRefresh } from '../../icons';
import { File } from '../../icons';
import { FileMedal } from '../../icons';
import { HelpCircle } from '../../icons';
import { History } from '../../icons';
import { InfoCircle } from '../../icons';
import { Passcode } from '../../icons';
import { Plus } from '../../icons';
import { Settings } from '../../icons';

// Social Icons
import { Facebook } from '../../icons';
import { LinkedIn } from '../../icons';
import { Twitter } from '../../icons';

//Payment Method Icons
import { ApplePay } from '../../icons';
import { Mastercard } from '../../icons';
import { Visa } from '../../icons';

//e-Wallet Icons
import { Boost } from '../../icons';
import { GrabPay } from '../../icons';
import { MAE } from '../../icons';
import { TouchnGo } from '../../icons';

//Bank Icons
import { AffinBank } from '../../icons';
import { AgroBank } from '../../icons';
import { AllianceBank } from '../../icons';
import { AmBank } from '../../icons';
import { BankIslam } from '../../icons';
import { BankRakyat } from '../../icons';
import { CIMB } from '../../icons';
import { Muamalat } from '../../icons';

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
