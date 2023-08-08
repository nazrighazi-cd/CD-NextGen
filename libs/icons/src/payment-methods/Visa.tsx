import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';

export function Visa({
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
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={width} height={height} x=".5" y=".5" fill="#fff" rx="3.5" />
      <Path
        fill="#172B85"
        fillRule="evenodd"
        d="M10.75 15.858H8.69L7.146 9.792c-.074-.279-.23-.525-.458-.642A6.573 6.573 0 0 0 4.8 8.508v-.233h3.318c.458 0 .801.35.859.758l.8 4.376 2.06-5.134h2.002l-3.089 7.583Zm4.234 0h-1.945l1.602-7.583h1.945l-1.602 7.583Zm4.118-5.482c.058-.409.401-.642.802-.642a3.534 3.534 0 0 1 1.888.35l.343-1.633a4.801 4.801 0 0 0-1.773-.351c-1.888 0-3.262 1.05-3.262 2.508 0 1.11.973 1.692 1.66 2.042.743.35 1.03.584.972.934 0 .524-.572.758-1.144.758a4.789 4.789 0 0 1-2.002-.467l-.344 1.633a5.47 5.47 0 0 0 2.117.409c2.117.058 3.433-.992 3.433-2.567 0-1.984-2.69-2.1-2.69-2.974Zm9.498 5.482-1.545-7.583h-1.659a.863.863 0 0 0-.801.583l-2.86 7h2.002l.4-1.108h2.46l.23 1.108H28.6Zm-2.918-5.54.572 2.857h-1.602l1.03-2.858Z"
        clipRule="evenodd"
      />
      <Rect width="33" height="23" x=".5" y=".5" stroke="#F2F4F7" rx="3.5" />
    </Svg>
  );
}
export default Visa;
