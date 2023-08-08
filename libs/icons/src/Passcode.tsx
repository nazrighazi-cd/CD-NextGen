import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function Passcode({
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
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12.333 12.29h.005m4.995 0h.005m-10.005 0h.005m-1.805-5h13.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.427.218-.988.218-2.108.218h-13.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108v-3.6c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874c.428-.218.988-.218 2.108-.218Zm7.05 5a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm5 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Zm-10 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      />
    </Svg>
  );
}
export default Passcode;
