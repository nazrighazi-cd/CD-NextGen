import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export function useKeyboard() {
    const [isKeyboardVisible, setKeyboardVisible] = useState<any>();
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        e => {
          setKeyboardVisible(e.endCoordinates.height / 2);
        },
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(null);
        },
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  
    return isKeyboardVisible;
  }