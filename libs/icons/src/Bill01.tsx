import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function Bill01({
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
        d="M20 7v-.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h3.7m0-11H8m3.5 4H8m8-8H8"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M16 19.051c0 .992.746 1.795 1.667 1.795h1.547c.987 0 1.786-.86 1.786-1.923C21 17.861 20.2 17 19.214 17h-1.428C16.799 17 16 16.139 16 15.077s.8-1.923 1.786-1.923h1.547c.92 0 1.667.803 1.667 1.795M18.5 12v1.154m0 7.692V22"
      />
    </Svg>
  );
}
export default Bill01;
