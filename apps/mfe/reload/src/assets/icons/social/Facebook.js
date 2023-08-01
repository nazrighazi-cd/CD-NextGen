import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';

export function Facebook({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
}) {
  return (
    <Svg
      id="Logo_Facebook"
      data-name="Logo — Facebook"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <Rect
        id="Rectangle_1520"
        data-name="Rectangle 1520"
        width={width}
        height={height}
        fill="#333"
        opacity="0"
      />
      <G id="Group_5003" data-name="Group 5003" transform="translate(3 3)">
        <Path
          id="Path_4240"
          data-name="Path 4240"
          d="M42,21A21,21,0,1,0,17.7,41.7V27.1H12.4V21h5.3V16.4c0-5.3,3.1-8.2,7.9-8.2a33.025,33.025,0,0,1,4.7.4v5.2H27.7c-2.6,0-3.4,1.6-3.4,3.3V21h5.8l-.9,6.1H24.3V41.8A21.087,21.087,0,0,0,42,21Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
export default Facebook;
