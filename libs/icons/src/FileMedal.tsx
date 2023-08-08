import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function FileMedal({
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
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M8.8 22.29h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 20.01 20 19.17 20 17.49V7.09c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2.29 16.88 2.29 15.2 2.29H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.57 4 5.41 4 7.09v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m9.695 13.423-.552 5.367 2.622-1.652a.622.622 0 0 1 .174-.091c.04-.01.082-.01.122 0 .046.01.089.037.174.091l2.622 1.652-.552-5.367M16 9.99c0 2.32-1.79 4.2-4 4.2s-4-1.88-4-4.2c0-2.32 1.79-4.2 4-4.2s4 1.88 4 4.2Z"
      />
    </Svg>
  );
}
export default FileMedal;
