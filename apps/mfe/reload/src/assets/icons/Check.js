import React from 'react';
import Svg, { Path } from 'react-native-svg';
export function Check({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 6L9 17L4 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default Check;
