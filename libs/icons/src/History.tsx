import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';
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
      <G clip-path="url(#clip0_2123_50083)">
        <Path
          d="M23.3666 12.3698L21.3672 14.3698L19.3666 12.3698M21.6117 13.8698C21.648 13.5414 21.6667 13.2078 21.6667 12.8698C21.6667 7.89922 17.6372 3.86978 12.6667 3.86978C7.6961 3.86978 3.66666 7.89922 3.66666 12.8698C3.66666 17.8403 7.6961 21.8698 12.6667 21.8698C15.4939 21.8698 18.0167 20.5661 19.6667 18.5271"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.6667 7.86978V12.8698L9.66666 14.8698"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2123_50083">
          <Rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0.666664 0.869781)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default History;
