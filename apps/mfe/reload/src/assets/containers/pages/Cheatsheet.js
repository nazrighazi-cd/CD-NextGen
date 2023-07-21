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
  Modal,
} from 'native-base';

// NativeBase Icons
import {
  ArrowBackIcon,
  MoonIcon,
  FavouriteIcon,
  DeleteIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from 'native-base';

const Cheatsheet = () => {
  const theme = useTheme();

  // Font Icons
  const icons = [
    {
      icon: <ArrowBackIcon />,
      iconName: 'arrow-back',
    },
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

  // Modal States
  const [defaultModal, setDefaultModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);

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
        <Text>Default Body</Text>
        <Text variant="body2">Body small</Text>
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
          <IconButton icon={<MoonIcon />} />
          <IconButton icon={<FavouriteIcon />} mx="2" />
          <IconButton icon={<DeleteIcon />} />
        </HStack>

        {/* Icon Variations */}
        <Text color="primary.600" mt="4" mb="2">
          Icon Variations
        </Text>
        <HStack>
          <Box variant="iconRounded">
            <MoonIcon color="primary.600" />
          </Box>
          <Box variant="iconCircle" ml="2">
            <FavouriteIcon color="success.500" />
          </Box>
        </HStack>

        {/* Input */}
        <Text color="primary.600" mt="4" mb="2">
          Input
        </Text>
        <Input placeholder="Default input" mb="2"></Input>
        <Input
          placeholder="Input with icon"
          mb="2"
          InputRightElement={<MoonIcon mr="3" />}
        ></Input>

        {/* Form Control */}
        <Text color="primary.600" mt="4" mb="2">
          Toggle, Checkbox & Radio button
        </Text>
        {/* Toggle */}
        <HStack alignItems="center">
          <Switch />
          <Checkbox.Group flexDirection="row" alignItems="center" ml="3">
            <Checkbox></Checkbox>
            <Text ml="2">Checkbox</Text>
          </Checkbox.Group>
          <Radio.Group>
            <Radio ml="4">Radio</Radio>
          </Radio.Group>
        </HStack>

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

        {/* Custom Components */}
        {/* App Bar */}
        <Text color="primary.600" mt="3">
          App Bar (Custom Component)
        </Text>
        <Box variant="header">
          <ArrowBackIcon size="md" color="black" />
          <Text variant="h6" bold>
            Reload
          </Text>
          <MoonIcon color="white" />
        </Box>

        {/* Box */}
        <Text color="primary.600" mt="4" mb="2">
          Cards (Custom Component)
        </Text>
        <Box variant="shadow" mb="2">
          Shadow
        </Box>
        <Box variant="border">Border</Box>

        {/* Tab */}
        <Text color="primary.600" mt="4" mb="2">
          Tabs (Custom Component)
        </Text>
        <HStack>
          <Box
            bg="#F9FAFB"
            borderLeftRadius="6.5"
            borderWidth="1"
            borderColor="gray.300"
          >
            <Text p="8px" variant="body2">
              All Transactions
            </Text>
          </Box>
          <Box borderWidth="1" borderLeftWidth="0" borderColor="gray.300">
            <Text p="8px" variant="body2">
              Billing
            </Text>
          </Box>
          <Box borderWidth="1" borderLeftWidth="0" borderColor="gray.300">
            <Text p="8px" variant="body2">
              Add-Ons
            </Text>
          </Box>
          <Box
            borderWidth="1"
            borderLeftWidth="0"
            borderColor="gray.300"
            borderRightRadius="6.5"
          >
            <Text p="8px" variant="body2">
              Subscriptions
            </Text>
          </Box>
        </HStack>

        {/* Selection */}
        <Text color="primary.600" mt="4" mb="2">
          Selection (Custom Component)
        </Text>
        <Box variant="selection">
          <Text>Threshold</Text>
          <Radio.Group>
            <Radio></Radio>
          </Radio.Group>
        </Box>

        {/* Listing */}
        <Text color="primary.600" mt="4" mb="2">
          Listing (Custom Component)
        </Text>
        <Box variant="listing">
          <HStack alignItems="center">
            <MoonIcon />
            <Text ml="4">Maybank 1234</Text>
            <Badge variant="blue" ml="2">
              Default
            </Badge>
          </HStack>
          <Box>
            <ChevronRightIcon />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};
export default Cheatsheet;
