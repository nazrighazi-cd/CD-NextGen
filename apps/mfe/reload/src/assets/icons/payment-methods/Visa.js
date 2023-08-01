import React from 'react';
import Svg, { Path, G, Rect } from 'react-native-svg';

export function Visa({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 34 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="0.5"
        y="0.5"
        width={width}
        height={height}
        rx="3.5"
        fill="white"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.7501 15.8582H8.69031L7.14576 9.79235C7.07245 9.51332 6.91679 9.26664 6.68782 9.15038C6.11639 8.85821 5.48672 8.62568 4.7998 8.50841V8.27487H8.11789C8.57583 8.27487 8.91929 8.62568 8.97653 9.0331L9.77793 13.4086L11.8367 8.27487H13.8392L10.7501 15.8582ZM14.984 15.8582H13.0388L14.6406 8.27487H16.5858L14.984 15.8582ZM19.1025 10.3757C19.1597 9.96725 19.5032 9.73372 19.9039 9.73372C20.5336 9.67508 21.2195 9.79235 21.7919 10.0835L22.1354 8.45079C21.5629 8.21725 20.9333 8.09998 20.3619 8.09998C18.4738 8.09998 17.1 9.15038 17.1 10.6082C17.1 11.7173 18.0731 12.2996 18.7601 12.6504C19.5032 13.0002 19.7894 13.2337 19.7322 13.5835C19.7322 14.1082 19.1597 14.3418 18.5883 14.3418C17.9014 14.3418 17.2145 14.1669 16.5858 13.8747L16.2424 15.5084C16.9293 15.7996 17.6724 15.9169 18.3594 15.9169C20.4763 15.9745 21.7919 14.9251 21.7919 13.35C21.7919 11.3664 19.1025 11.2502 19.1025 10.3757ZM28.5998 15.8582L27.0553 8.27487H25.3962C25.0528 8.27487 24.7093 8.50841 24.5948 8.85821L21.7347 15.8582H23.7372L24.1369 14.7502H26.5973L26.8263 15.8582H28.5998ZM25.6824 10.3171L26.2539 13.1751H24.6521L25.6824 10.3171Z"
        fill="#172B85"
      />
      <Rect x="0.5" y="0.5" width="33" height="23" rx="3.5" stroke="#F2F4F7" />
    </Svg>
  );
}
export default Visa;
