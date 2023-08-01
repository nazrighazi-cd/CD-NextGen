import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';
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
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.6849 21.9311 13.3538 21.8 14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <Path
        d="M6.5 14.6765V9.65955C6.5 9.57143 6.57143 9.5 6.65955 9.5H8.45893C9.16385 9.5 9.73529 10.0714 9.73529 10.7764V11.3821C9.73529 11.938 9.28465 12.3887 8.72876 12.3887V12.3887M6.64379 12.3887H8.72876M9.65826 14.6765L8.72876 12.3887"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M12.3235 14.6765V9.65955C12.3235 9.57143 12.3949 9.5 12.4831 9.5H12.8741C12.9381 9.5 12.9959 9.53828 13.0209 9.59722L14.7312 13.6277C14.7858 13.7564 14.9677 13.7577 15.0241 13.6298L16.8019 9.59521C16.8274 9.53735 16.8846 9.5 16.9479 9.5H17.3404C17.4286 9.5 17.5 9.57143 17.5 9.65955V13.6765"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M19.9583 22C19.9583 22 20.206 21.9636 21.2312 20.9092C22.2563 19.8548 22.2563 18.1452 21.2312 17.0908C20.868 16.7172 20.4248 16.476 19.9583 16.3671M19.9583 22L21.7083 22M19.9583 22L19.9583 20.2M17.0417 16C17.0417 16 16.794 16.0364 15.7688 17.0908C14.7437 18.1452 14.7437 19.8548 15.7688 20.9092C16.132 21.2828 16.5752 21.524 17.0417 21.6329M17.0417 16L15.2917 16M17.0417 16L17.0417 17.8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default CurrencyRefresh;
