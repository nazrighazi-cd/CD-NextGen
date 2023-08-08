import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function AutoBilling({
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
      viewBox="0 0 24 25"
      fill="none"
    >
      <G
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        clipPath="url(#a)"
      >
        <Path
          strokeLinejoin="round"
          d="M18.278 22.29s.33-.049 1.697-1.454a3.673 3.673 0 0 0 0-5.092 3.457 3.457 0 0 0-1.697-.964m0 7.51h2.333m-2.333 0v-2.4m-2.556-5.6s-.33.049-1.697 1.454a3.673 3.673 0 0 0 0 5.091c.484.499 1.075.82 1.697.965m0-7.51H13.39m2.333 0v2.4"
        />
        <Path
          strokeLinejoin="round"
          d="M20 10.79v-3.7c0-1.68 0-2.52-.306-3.162a2.913 2.913 0 0 0-1.23-1.311c-.601-.327-1.389-.327-2.964-.327h-7c-1.575 0-2.363 0-2.964.327-.53.288-.96.746-1.23 1.311C4 4.57 4 5.41 4 7.09v10.4c0 1.68 0 2.52.307 3.162.27.564.7 1.023 1.229 1.311.601.327 2.389.327 3.964.327"
        />
        <Path d="M8 10.29V6.413c0-.068.055-.123.123-.123h1.39c.545 0 .987.442.987.986v.468c0 .43-.348.778-.778.778v0m-1.61 0h1.61m.719 1.768-.719-1.768M12.5 10.29V6.413c0-.068.055-.123.123-.123h.302c.05 0 .095.03.114.075L14.36 9.48c.042.099.182.1.226.001l1.373-3.117a.123.123 0 0 1 .113-.074h.304c.068 0 .123.055.123.123v3.877" />
        <Path strokeLinejoin="round" d="M8 14.29h2M8 18.29h2" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .29h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default AutoBilling;
