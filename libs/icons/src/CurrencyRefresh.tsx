import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../utils/ISvgProps';
export function CurrencyRefresh({
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        d="M6.5 14.677V9.66a.16.16 0 0 1 .16-.16h1.799c.705 0 1.276.571 1.276 1.276v.606c0 .556-.45 1.007-1.006 1.007v0m-2.085 0h2.085m.93 2.288-.93-2.288M12.323 14.677V9.66a.16.16 0 0 1 .16-.16h.391a.16.16 0 0 1 .147.097l1.71 4.03a.16.16 0 0 0 .293.003l1.778-4.035a.16.16 0 0 1 .146-.095h.392a.16.16 0 0 1 .16.16v4.017"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M19.958 22s.248-.036 1.273-1.09a2.755 2.755 0 0 0 0-3.82 2.593 2.593 0 0 0-1.273-.723m0 5.633h1.75m-1.75 0v-1.8M17.042 16s-.248.036-1.273 1.09a2.755 2.755 0 0 0 0 3.82c.363.373.806.614 1.273.723m0-5.633h-1.75m1.75 0v1.8"
      />
    </Svg>
  );
}
export default CurrencyRefresh;
