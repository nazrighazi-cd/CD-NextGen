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
  Modal,
} from 'native-base';

import Calendar from '../../icons/calendar-refresh.svg';
import Twitter from '../../icons/social/twitter.svg';
import Linkedin from '../../icons/social/linkedin.svg';
import Visa from '../../icons/payment-methods/Visa.svg';
import BackArrow from '../../icons/arrow-left.svg';
import ChevronRight from '../../icons/chevron-right.svg';

const Cheatsheet = () => {
  const theme = useTheme();

  // Modal States
  const [defaultModal, setDefaultModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);
  const [showLeftElement, setShowLeftElement] = useState(false);

  return (
    <ScrollView>
      <Box bg="white" px="3" py="4">
        {/* Typography */}
        <Text color="primary.600">Typography (Text)</Text>
        <Text variant="h1">Heading 1</Text>
        <Text variant="h2">Heading 2</Text>
        <Text variant="h3">Heading 3</Text>
        <Text variant="h4">Heading 4</Text>
        <Text variant="h5">Heading 5</Text>
        <Text variant="h6">Heading 6</Text>
        <Text variant="h7">Heading 7</Text>
        <Text variant="h8">Heading 8</Text>
        <Text variant="body1">Body larger</Text>
        <Text>Default Body</Text>
        <Text variant="body2">Body smaller</Text>
        <Text variant="label">Label</Text>

        {/* Badges */}
        <Text color="primary.600" mt="4" mb="2">
          Badges
        </Text>
        <HStack>
          <Badge mr="1">Default</Badge>
        </HStack>
        <HStack mt="2">
          <Badge variant="outline" mr="1">
            Outline
          </Badge>
          <Badge variant="success" mr="1">
            Success
          </Badge>
          <Badge variant="info" mr="1">
            Info
          </Badge>
          <Badge variant="popular" mr="1">
            Popular
          </Badge>
          <Badge variant="blue" mr="1">
            Blue
          </Badge>
          <Badge variant="pink">Pink</Badge>
        </HStack>

        {/* Buttons */}
        <Text color="primary.600" mt="4" mb="2">
          Buttons
        </Text>
        <HStack>
          <Button mr="1" mb="2">
            Primary
          </Button>
          <Button variant="link">Button Link</Button>
        </HStack>
        <HStack>
          <Button variant="secondaryGray" mr="1">
            Secondary
          </Button>
          <Button variant="secondaryColor">Secondary</Button>
        </HStack>

        {/* Icon Buttons */}
        <Text color="primary.600" mt="4" mb="2">
          Icon Buttons
        </Text>
        <HStack>
          <IconButton icon={<Twitter />} />
          <IconButton icon={<Linkedin />} mx="2" />
        </HStack>

        {/* Icon Variations */}
        <Text color="primary.600" mt="4" mb="2">
          Icon Variations
        </Text>
        <HStack>
          <Box variant="iconRounded">
            <Twitter color="primary.600" width="24px" height="24px" />
          </Box>
          <Box variant="iconCircle" ml="2">
            <Linkedin color="success.500" width="24px" height="24px" />
          </Box>
        </HStack>

        {/* Input */}
        <Text color="primary.600" mt="4" mb="2">
          Input
        </Text>
        <Input
          // InputLeftElement={<Text variant="floating">Default Input</Text>}
          placeholder="Default input"
          mb="2"
        ></Input>
        <Input
          placeholder="Input with icon"
          mb="2"
          InputRightElement={
            <Calendar color="#98A2B3" style={{ marginRight: 8 }} />
          }
        ></Input>

        {/* Form Control */}
        <Text color="primary.600" mt="4" mb="2">
          Toggle, Checkbox & Radio button
        </Text>
        {/* Toggle */}
        <HStack alignItems="center">
          <Switch />
          <Checkbox.Group flexDirection="row" alignItems="center" ml="3">
            <Checkbox accessibilityLabel="Checkbox"></Checkbox>
            <Text ml="2">Checkbox</Text>
          </Checkbox.Group>
          <Radio.Group>
            <Radio ml="4" accessibilityLabel="Radio">
              Radio
            </Radio>
          </Radio.Group>
        </HStack>

        {/* Tabs */}
        <Text color="primary.600" mt="4" mb="2">
          Tabs (Button)
        </Text>
        <Button.Group isAttached>
          <Button variant="tabActive">All Transactions</Button>
          <Button variant="tab">Billing</Button>
          <Button variant="tab">Add-Ons</Button>
          <Button variant="tab">Subscriptions</Button>
        </Button.Group>

        {/* Modal */}
        <Text color="primary.600" mt="4" mb="2">
          Modal
        </Text>
        <HStack>
          <Button onPress={() => setDefaultModal(true)}>Default</Button>
          <Button onPress={() => setBottomModal(true)} ml="1">
            Bottom
          </Button>
        </HStack>

        {/* Default Modal */}
        <Modal
          isOpen={defaultModal}
          onClose={() => setDefaultModal(false)}
          accessibilityLabel="Default Modal"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Text variant="h6" bold>
              Default Modal
            </Text>
            <Text>The rest of the content goes here</Text>
          </Modal.Content>
        </Modal>

        {/* Bottom Modal */}
        <Modal
          variant="bottom"
          isOpen={bottomModal}
          onClose={() => setBottomModal(false)}
          accessibilityLabel="Default Modal"
        >
          <Modal.Content variant="bottom">
            <Modal.CloseButton />
            <Text variant="h6" bold>
              Bottom Modal
            </Text>
            <Text>The rest of the content goes here</Text>
          </Modal.Content>
        </Modal>

        {/* Custom Component */}
        {/* App Bar */}
        <Text color="primary.600" mt="4">
          App Bar (Custom Component)
        </Text>
        <Box variant="header">
          <BackArrow color="black" />
          <Text variant="h6" bold>
            Reload
          </Text>
          <Twitter color="white" />
        </Box>

        {/* Cards */}
        <Text color="primary.600" mt="4" mb="2">
          Cards (Custom Component)
        </Text>
        <Box variant="shadow" mb="2">
          Shadow
        </Box>
        <Box variant="border">Border</Box>

        {/* Selection */}
        <Text color="primary.600" mt="4" mb="2">
          Selection (Custom Component)
        </Text>
        <Box variant="selection">
          <Text>Threshold</Text>
          <Radio.Group>
            <Radio accessibilityLabel="Threshold"></Radio>
          </Radio.Group>
        </Box>

        {/* Listing */}
        <Text color="primary.600" mt="4" mb="2">
          Listing (Custom Component)
        </Text>
        <Box variant="listing">
          <HStack alignItems="center">
            <Visa />
            <Text ml="4">Maybank 1234</Text>
            <Badge variant="blue" ml="2">
              Default
            </Badge>
          </HStack>
          <Box>
            <ChevronRight color="#aaa" />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default Cheatsheet;
