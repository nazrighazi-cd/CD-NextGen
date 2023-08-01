import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';
export function AutoBilling({
  width = 24,
  height = 24,
  color = '#000000',
  strokeWidth = 2,
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_2123_50076)">
        <Path
          d="M18.2778 22.2899C18.2778 22.2899 18.608 22.2414 19.9749 20.8355C21.3417 19.4296 21.3417 17.1502 19.9749 15.7443C19.4906 15.2462 18.8997 14.9246 18.2778 14.7795M18.2778 22.2899L20.6111 22.2899M18.2778 22.2899L18.2778 19.8899M15.7222 14.2899C15.7222 14.2899 15.392 14.3385 14.0251 15.7443C12.6583 17.1502 12.6583 19.4296 14.0251 20.8355C14.5094 21.3336 15.1003 21.6553 15.7222 21.8004M15.7222 14.2899L13.3889 14.2899M15.7222 14.2899L15.7222 16.6899"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 10.7899V7.08993C20 5.40977 20 4.5697 19.6935 3.92796C19.4238 3.36347 18.9936 2.90453 18.4643 2.61691C17.8627 2.28993 17.0751 2.28993 15.5 2.28993H8.5C6.92485 2.28993 6.13728 2.28993 5.53565 2.61691C5.00645 2.90453 4.57619 3.36347 4.30654 3.92796C4 4.5697 4 5.40977 4 7.08993V17.4899C4 19.1701 4 20.0102 4.30654 20.6519C4.57619 21.2164 5.00645 21.6753 5.53565 21.963C6.13728 22.2899 7.92485 22.2899 9.5 22.2899"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 10.2899V6.41322C8 6.34513 8.0552 6.28993 8.12329 6.28993H9.51372C10.0584 6.28993 10.5 6.73151 10.5 7.27621V7.74431C10.5 8.17386 10.1518 8.52209 9.72222 8.52209V8.52209M8.11111 8.52209H9.72222M10.4405 10.2899L9.72222 8.52209"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M12.5 10.2899V6.41322C12.5 6.34513 12.5552 6.28993 12.6233 6.28993H12.9254C12.9749 6.28993 13.0196 6.31951 13.0389 6.36506L14.3605 9.47956C14.4027 9.57898 14.5432 9.57995 14.5868 9.48111L15.9605 6.3635C15.9802 6.31879 16.0245 6.28993 16.0734 6.28993H16.3767C16.4448 6.28993 16.5 6.34513 16.5 6.41322V10.2899"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <Path
          d="M8 14.2899H10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 18.2899H10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2123_50076">
          <Rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0 0.289932)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default AutoBilling;
