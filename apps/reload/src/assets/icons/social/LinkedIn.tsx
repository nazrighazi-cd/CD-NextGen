import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ISvgProps } from '../../../utils/ISvgProps';

export function LinkedIn({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: ISvgProps) {
  return (
    <Svg
      id="Logo_Linkedin"
      data-name="Logo — Linkedin"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}
    >
      <Rect
        id="Rectangle_1677"
        data-name="Rectangle 1677"
        width={width}
        height={height}
        fill="#7b1b67"
        opacity="0"
      />
      <Path
        id="Path_5174"
        data-name="Path 5174"
        d="M1802.371,1475.787h-28.742a3.635,3.635,0,0,0-3.629,3.642v29.143a3.635,3.635,0,0,0,3.629,3.641h28.742a3.635,3.635,0,0,0,3.629-3.641v-29.143A3.635,3.635,0,0,0,1802.371,1475.787Zm-20.819,28.822h-4.844v-15.582h4.844Zm-2.454-17.494a2.427,2.427,0,1,1,2.613-2.421A2.414,2.414,0,0,1,1779.1,1487.115Zm20.137,17.494h-4.843v-8.636c0-2.007-.7-3.377-2.454-3.377a2.66,2.66,0,0,0-2.485,1.816,3.5,3.5,0,0,0-.16,1.211v8.986h-4.843V1494c0-1.944-.063-3.569-.127-4.971h4.206l.223,2.167h.1a5.594,5.594,0,0,1,4.811-2.518c3.187,0,5.576,2.136,5.576,6.724Z"
        transform="translate(-1764 -1469.987)"
        fill={color}
      />
    </Svg>
  );
}
export default LinkedIn;
