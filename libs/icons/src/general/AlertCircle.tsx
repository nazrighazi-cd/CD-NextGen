import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';

export function AlertCircle({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: ISvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
    </Svg>
  );
}
export default AlertCircle;
