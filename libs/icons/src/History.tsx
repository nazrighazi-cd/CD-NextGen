import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function History({
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
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        clipPath="url(#a)"
      >
        <Path d="m23.367 12.37-2 2-2-2m2.245 1.5a9 9 0 1 0-1.945 4.657" />
        <Path d="M12.667 7.87v5l-3 2" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.667.87h24v24h-24z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default History;
