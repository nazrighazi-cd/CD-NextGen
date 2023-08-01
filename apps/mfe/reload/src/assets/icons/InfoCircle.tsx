import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';
export function InfoCircle({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default InfoCircle;
