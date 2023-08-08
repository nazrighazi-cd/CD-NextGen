import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function Contact({
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
        d="M5 12H3m2 4H3m2-8H3m17-1.2v10.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 4.28 20 5.12 20 6.8Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M15.845 14.894h-3.673c-1.297 0-1.946 0-2.458.225a2.88 2.88 0 0 0-1.506 1.605c-.154.395-.196.867-.208 1.623m8-9.382c0 1.637-1.246 2.964-2.784 2.964-1.538 0-2.784-1.327-2.784-2.964C10.432 7.327 11.678 6 13.216 6 14.754 6 16 7.327 16 8.965Z"
      />
    </Svg>
  );
}
export default Contact;
