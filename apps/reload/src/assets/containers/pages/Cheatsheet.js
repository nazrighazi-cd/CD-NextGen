import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Radio,
  Modal,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  HStack,
  VStack,
  IconButton,
  Input,
  Switch,
  Text,
  useTheme,
} from 'native-base';

// Components
import FloatingInput from '../../../themes/components/FloatingInput';

// Icons
import {
  CalendarRefresh,
  Twitter,
  LinkedIn,
  Visa,
  Arrowleft,
  ChevronRight,
  InfoCircle,
  Check,
  HelpCircle,
  Passcode,
} from '@cd-next-gen-app/icons';

const Cheatsheet = () => {
  const theme = useTheme();

  // Modal States
  const [defaultModal, setDefaultModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);

  return (
    <ScrollView>
      <Box bg="white" px="3" py="4">
        {/* Typography */}
        <Text variant="h5" mb="2" bold>
          Typography
        </Text>
        {/* Heading */}
        <Text color="primary.600">Heading</Text>
        <Text variant="h1">h1 - Heading 1</Text>
        <Text variant="h2">h2 - Heading 2</Text>
        <Text variant="h3">h3 - Heading 3</Text>
        <Text variant="h4">h4 - Heading 4</Text>
        <Text variant="h5">h5 - Heading 5</Text>
        <Text variant="h6">h6 - Heading 6</Text>
        <Text variant="h7">h7 - Heading 7</Text>
        <Text variant="h8">h8 - Heading 8</Text>
        {/* Body + Label */}
        <Text color="primary.600" mt="2">
          Body + Label
        </Text>
        <Text>Default Body</Text>
        <Text variant="body1">body1 - Body larger</Text>
        <Text variant="body2">body2 - Body smaller</Text>
        <Text variant="label">label - Label</Text>

        <Text variant="h5" bold mt="4" mb="2">
          NativeBase Components
        </Text>

        {/* Alert */}
        <Text color="primary.600" mb="2">
          Alert
        </Text>

        <Alert variant="success" mb="2">
          <VStack w="90%">
            <Check color="#027A48" />
            <Text color="#027A48">Insufficient funds in your wallet.</Text>
          </VStack>
        </Alert>

        <Alert variant="info" mb="4">
          <VStack w="90%">
            <InfoCircle color="#114EBA" />
            <Text color="#114EBA">Insufficient funds in your wallet.</Text>
          </VStack>
        </Alert>

        {/* Avatar */}
        <Text color="primary.600" mb="2">
          Avatar
        </Text>
        <HStack>
          <Avatar mr="2">
            <Passcode color="#667085" />
          </Avatar>
          <Avatar variant="success" mr="2">
            <Check color="#027A48" />
          </Avatar>
          <Avatar variant="error" mr="2">
            <HelpCircle color="#D92D20" />
          </Avatar>
          <Avatar variant="rounded" mr="2">
            <Twitter />
          </Avatar>
          <Avatar variant="circle">
            <Twitter />
          </Avatar>
        </HStack>

        {/* Badges */}
        <Text color="primary.600" mt="4" mb="2">
          Badges
        </Text>
        <HStack>
          <Badge mr="1">Primary</Badge>
          <Badge variant="outline" mr="1">
            Outline
          </Badge>
        </HStack>
        <HStack mt="2">
          <Badge variant="success" mr="1">
            Success
          </Badge>
          <Badge variant="info" mr="1">
            Info
          </Badge>
          <Badge variant="popular" mr="1">
            Popular
          </Badge>
        </HStack>
        <HStack mt="2">
          <Badge variant="celcomBlue" mr="1">
            Celcom Blue
          </Badge>
          <Badge variant="gray" mr="1">
            Gray
          </Badge>
          <Badge variant="indigo" mr="1">
            Indigo
          </Badge>
          <Badge variant="pink" mr="1">
            Pink
          </Badge>
          <Badge variant="yellow">Yellow</Badge>
        </HStack>

        {/* Box */}
        <Text color="primary.600" mt="4" mb="2">
          Box
        </Text>
        <Box variant="shadow" mb="2">
          Shadow
        </Box>
        <Box variant="border">Border</Box>

        {/* Buttons */}
        <Text color="primary.600" mt="4" mb="2">
          Buttons
        </Text>
        <HStack>
          <Button mr="1" mb="2">
            Primary
          </Button>
          <Button mr="1" mb="2" isDisabled>
            Primary
          </Button>
        </HStack>
        <HStack>
          <Button variant="secondaryGray" mr="1" mb="2">
            Secondary
          </Button>
          <Button variant="secondaryGray" mr="1" mb="2" isDisabled>
            Secondary
          </Button>
        </HStack>
        <HStack>
          <Button variant="secondaryColor" mr="1" mb="2">
            Secondary
          </Button>
          <Button variant="secondaryColor" mr="1" mb="2" isDisabled>
            Secondary
          </Button>
        </HStack>
        <HStack>
          <Button variant="destructive" mr="1" mb="2">
            Destructive
          </Button>
          <Button variant="destructive" mr="1" mb="2" isDisabled>
            Destructive
          </Button>
        </HStack>
        <HStack>
          <Button variant="link" mr="1">
            Button Link
          </Button>
          <Button variant="link" mr="1" isDisabled>
            Button Link
          </Button>
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

        {/* Icon Buttons */}
        <Text color="primary.600" mt="4" mb="2">
          Icon Buttons
        </Text>
        <HStack>
          <IconButton icon={<Twitter />} />
          <IconButton icon={<LinkedIn />} mx="2" />
        </HStack>

        {/* Input */}
        <Text color="primary.600" mt="4" mb="2">
          Input
        </Text>
        <Input placeholder="Default Input" mb="2" />

        <FloatingInput
          label="Floating Input"
          placeholder="Floating Input"
          InputRightElement={<CalendarRefresh />}
        />

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

        {/* On-Offs */}
        <Text color="primary.600" mt="4" mb="2">
          On-Offs
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

        {/* Custom Components */}
        <Text variant="h5" mt="3" mb="2" bold>
          Custom Components
        </Text>

        {/* App Bar */}
        <Text color="primary.600">App Bar (Custom Component)</Text>
        <Box variant="header">
          <Arrowleft color="black" />
          <Text variant="h6" bold>
            Reload
          </Text>
          <Twitter color="white" />
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
      </Box>
    </ScrollView>
  );
};
export default Cheatsheet;
