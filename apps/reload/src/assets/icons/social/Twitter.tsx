import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { ISvgProps } from '../../../utils/ISvgProps';

export function Twitter({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
  ...props
}: ISvgProps) {
  return (
    <Svg
      id="Logo_Twitter"
      data-name="Logo — Twitter"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      {...props}
    >
      <Rect
        id="Rectangle_1521"
        data-name="Rectangle 1521"
        width={width}
        height={height}
        fill="#333"
        opacity="0"
      />
      <Path
        id="Path_4519"
        data-name="Path 4519"
        d="M16.209,41.134c15.849,0,24.517-13.131,24.517-24.517,0-.373-.008-.745-.025-1.114A17.537,17.537,0,0,0,45,11.041,17.218,17.218,0,0,1,40.051,12.4a8.654,8.654,0,0,0,3.79-4.767,17.262,17.262,0,0,1-5.472,2.091,8.624,8.624,0,0,0-14.684,7.859,24.465,24.465,0,0,1-17.762-9,8.624,8.624,0,0,0,2.668,11.5A8.558,8.558,0,0,1,4.688,19c0,.036,0,.072,0,.11A8.621,8.621,0,0,0,11.6,27.561a8.574,8.574,0,0,1-3.891.148,8.626,8.626,0,0,0,8.05,5.985A17.412,17.412,0,0,1,3,37.263a24.4,24.4,0,0,0,13.209,3.871"
        transform="translate(0 0)"
        fill={color}
      />
    </Svg>
  );
}
export default Twitter;
