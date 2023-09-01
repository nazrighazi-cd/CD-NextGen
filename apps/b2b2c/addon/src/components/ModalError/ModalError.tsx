import {useIsFocused} from '@react-navigation/native';
import * as React from 'react';
import {useRef, useState, useEffect} from 'react';
import {Platform, TextInput, View} from 'react-native';
import {Keyboard, KeyboardEvent} from 'react-native';

import {
  Box,
  HStack,
  Input,
  Button,
  Modal,
  Text,
  Avatar,
  VStack,
  KeyboardAvoidingView,
} from 'native-base';
import {InfoCircle, Close,ChevronRight,History} from '../../../../../../libs/icons/src';
import FloatingInput from '../../../../../../libs/themes/components/FloatingInput'


type props = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
  onPress: () => void;
  title: string;
  body: string;
  button_yes:string
};

const NUMBER_OF_INPUTS = 6;

export default function ModalError({isOpen, onClose, onPress, title , body, button_yes}: props) {


  return (
    <Modal
      onClose={() => {
        onClose(false);
      }}
      isOpen={isOpen}
      accessibilityLabel="Default Modal">
      <Modal.Content>
        <Modal.CloseButton />
        <Avatar variant={"error"}>
          <History color="#D92D20" />
        </Avatar>

        <VStack space={1} pb={5}>

        <Text variant="h6" bold >{title}</Text>
        <Text color="gray.600">{body}</Text>

        </VStack>
          <Button
            variant={"destructive"}
            onPress={() => {
              console.log('hello world');
              onClose(false);
            }}
            mr="1"
            mb="2">
            {button_yes}
          </Button>
      </Modal.Content>
    </Modal>
  );
}

