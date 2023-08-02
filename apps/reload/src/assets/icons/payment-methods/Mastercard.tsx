import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { ISvgProps } from '../../../utils/ISvgProps';

export function Mastercard({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z"
        fill="#ED0006"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1787 16.8294C18.6366 15.6005 19.5611 13.7719 19.5611 11.73C19.5611 9.68801 18.6366 7.85941 17.1787 6.63051C18.3628 5.63247 19.8987 5.02997 21.577 5.02997C25.3219 5.02997 28.3577 8.02966 28.3577 11.73C28.3577 15.4303 25.3219 18.43 21.577 18.43C19.8987 18.43 18.3628 17.8275 17.1787 16.8294Z"
        fill="#F9A000"
      />
      <Path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M17.1793 16.8294C18.6372 15.6005 19.5616 13.7719 19.5616 11.73C19.5616 9.68805 18.6372 7.85946 17.1793 6.63055C15.7213 7.85946 14.7969 9.68805 14.7969 11.73C14.7969 13.7719 15.7213 15.6005 17.1793 16.8294Z"
        fill="#FF5E00"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </Svg>
  );
}
export default Mastercard;