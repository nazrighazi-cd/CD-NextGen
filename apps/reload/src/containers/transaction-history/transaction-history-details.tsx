import React from 'react';
// Native Base Components
import {
  useTheme,
  Text,
  Box,
  Button,
  Badge,
  HStack,
  Image,
  IconButton,
} from 'native-base';
// Icons
import { Copy } from '../../assets/icons';
import { Twitter } from '../../assets/icons';
import { Facebook } from '../../assets/icons';
import { LinkedIn } from '../../assets/icons';
// Images
import Transaction from '../../assets/images/transactionHistory.png';

const TransactionHistoryDetails = () => {
  const theme = useTheme();

  return (
    <Box bg="white" h="100%" w="100%" maxWidth="100%" flex={1}>
      {/* CONTENT */}
      <Box flex={9} m="16px">
        <Text variant="h6" bold>
          Product Name max 48 Char(s) Up to 2 line(s)
        </Text>
        <HStack flexDir="row" mt="16px" space={3}>
          <Badge>5G Add-Ons</Badge>
          <Badge variant="indigo">7.7 Sales</Badge>
          <Badge variant="pink">iPhone 15</Badge>
        </HStack>
        <Text variant="body2" bold mt="16px">
          Content Describing what the notification is about.
        </Text>
        <Text variant="body2" mt="16px">
          Content describing what the notification is about. Lorem ipsum dolor
          sit amet consectetur. Leo tincidunt est faucibus sodales lectus leo.
          Pretium enim amet et amet a congue quis. Convallis duis neque viverra
          sed ante cum sodales. Fermentum orci ornare purus sem.
        </Text>
        <Box alignItems="center" mt="16px">
          <Image source={Transaction} width="100%" height="70%" alt="Image" />
        </Box>
      </Box>

      {/* FOOTER */}
      <Box flex={1} m="16px">
        <HStack space={3} justifyContent="space-betwen">
          <Button
            variant="secondaryGray"
            paddingRight="16px"
            paddingLeft="16px"
            paddingTop="8px"
            paddingBottom="8px"
          >
            <HStack>
              <Copy width="20px" color="#344054" />
              <Text textAlign="left" pl="8px">
                Copy Link
              </Text>
            </HStack>
          </Button>
          <IconButton
            icon={<Twitter width="20px" />}
            width="40px"
            height="40px"
          />
          <IconButton
            icon={<Facebook width="20px" />}
            width="40px"
            height="40px"
          />
          <IconButton
            icon={<LinkedIn width="20px" />}
            width="40px"
            height="40px"
          />
        </HStack>
      </Box>
    </Box>
  );
};
export default TransactionHistoryDetails;
