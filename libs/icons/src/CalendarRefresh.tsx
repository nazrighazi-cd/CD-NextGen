import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';

export function CalendarRefresh({
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
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M21 12.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h3.7M21 10H3m13-8v4M8 2v4"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M18.618 22s.289-.043 1.485-1.273a3.214 3.214 0 0 0 0-4.454 3.025 3.025 0 0 0-1.485-.845m0 6.572h2.042m-2.042 0v-2.1M16.382 15s-.289.043-1.485 1.273a3.214 3.214 0 0 0 0 4.454c.424.436.94.718 1.485.845m0-6.572H14.34m2.042 0v2.1"
      />
    </Svg>
  );
}
export default CalendarRefresh;
