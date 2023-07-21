import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  useTheme,
  HStack,
  Box,
  Text,
  Badge,
  Button,
  IconButton,
  Input,
  Switch,
  Checkbox,
  Radio,
  FlatList,
  Pressable,
  Modal,
  VStack,
  Spacer,
} from 'native-base';

//Icons
import CalendarRefresh from '../../icons/calendar-refresh.svg';
import ArrowLeft from '../../icons/arrow-left.svg';
import ChevronRight from '../../icons/chevron-right.svg';
import File from '../../icons/file-06.svg';
import AutoBilling from '../../icons/auto-billing-01.svg';
import FileMedal from '../../icons/file-medal.svg';
import History from '../../icons/history.svg';
import Passcode from '../../icons/passcode.svg';
import Settings from '../../icons/settings-04.svg';
import CurrencyRefresh from '../../icons/currency-ringgit-malaysia-refresh.svg';
import Contact from '../../icons/contact.svg';
import Plus from '../../icons/plus.svg';
import HelpCircle from '../../icons/help-circle.svg';
import InfoCircle from '../../icons/info-circle.svg';
import Copy from '../../icons/copy-01.svg';
import Calendar from '../../icons/calendar.svg';
import Check from '../../icons/check.svg';
import Close from '../../icons/x-close.svg';
import ApplePay from '../../icons/payment-methods/ApplePay.svg';
import Mastercard from '../../icons/payment-methods/Mastercard.svg';
import Visa from '../../icons/payment-methods/Visa.svg';
import GrabPay from '../../icons/payment-methods/e-wallet/GrabPay.svg';
import MAE from '../../icons/payment-methods/e-wallet/MAE.svg';
import TouchnGo from '../../icons/payment-methods/e-wallet/TnG-eWallet.svg';
import Boost from '../../icons/payment-methods/e-wallet/Boost.svg';
import AffinBank from '../../icons/payment-methods/bank/affin-bank.svg';
import AgroBank from '../../icons/payment-methods/bank/agro-bank.svg';
import AllianceBank from '../../icons/payment-methods/bank/alliance-bank.svg';
import AmBank from '../../icons/payment-methods/bank/AmBank.svg';
import BankIslam from '../../icons/payment-methods/bank/bank-islam.svg';
import Muamalat from '../../icons/payment-methods/bank/muamalat.svg';
import BankRakyat from '../../icons/payment-methods/bank/bank-rakyat.svg';
import CIMB from '../../icons/payment-methods/bank/cimb-clicks.svg';
import Facebook from '../../icons/social/facebook.svg';
import Twitter from '../../icons/social/twitter.svg';
import Linkedin from '../../icons/social/linkedin.svg';

// NativeBase Icons
import {
  MoonIcon,
  FavouriteIcon,
  DeleteIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from 'native-base';

const Icons = () => {
  const theme = useTheme();

  // Font Icons
  const icons = [
    {
      icon: <MoonIcon />,
      iconName: 'moon',
    },
    {
      icon: <FavouriteIcon />,
      iconName: 'favourite',
    },
    {
      icon: <DeleteIcon />,
      iconName: 'delete',
    },
    {
      icon: <ChevronRightIcon />,
      iconName: 'chevron-right',
    },
    {
      icon: <SmallCloseIcon />,
      iconName: 'small-close',
    },
  ];

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
              <CalendarRefresh width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                calendar-refresh
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <ArrowLeft width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                arrow-left
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <ChevronRight width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                chevron-right
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <File width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                file-06
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <AutoBilling width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                auto-billing-01
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <FileMedal width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                file-medal
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <History width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                history
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Passcode width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                passcode
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <CurrencyRefresh width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                currency-ringgit-malaysia-refresh
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Plus width={120} height={40} />{' '}
              <Text textAlign="center" color="black">
                plus
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box p="10px">
              <HelpCircle width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                help-circle
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Contact width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                contact
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box p="10px">
              <Check width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                check{' '}
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Close width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                close
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box p="10px">
              <InfoCircle width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                info-circle{' '}
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Calendar width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                calendar
              </Text>
            </Box>
          </HStack>
          <HStack mt="5">
            <Box alignItems="center" p="10px">
              <Copy width={120} height={40} />{' '}
              <Text textAlign="center" width={120} color="black">
                copy-01
              </Text>
            </Box>
            <Spacer></Spacer>
            <Box alignItems="center" p="10px">
              <Settings width={120} height={40} />{' '}
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
              <Linkedin width={120} height={40} />{' '}
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
