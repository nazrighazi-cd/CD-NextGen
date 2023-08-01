import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../utils/ISvgProps';
export function FileMedal({
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
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.8 22.2899H15.2C16.8802 22.2899 17.7202 22.2899 18.362 21.963C18.9265 21.6753 19.3854 21.2164 19.673 20.6519C20 20.0102 20 19.1701 20 17.4899V7.08993C20 5.40977 20 4.5697 19.673 3.92796C19.3854 3.36347 18.9265 2.90453 18.362 2.61691C17.7202 2.28993 16.8802 2.28993 15.2 2.28993H8.8C7.11984 2.28993 6.27976 2.28993 5.63803 2.61691C5.07354 2.90453 4.6146 3.36347 4.32698 3.92796C4 4.5697 4 5.40977 4 7.08993V17.4899C4 19.1701 4 20.0102 4.32698 20.6519C4.6146 21.2164 5.07354 21.6753 5.63803 21.963C6.27976 22.2899 7.11984 22.2899 8.8 22.2899Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.69525 13.4231L9.14286 18.7899L11.7648 17.1381C11.8503 17.0842 11.8931 17.0573 11.9387 17.0468C11.9791 17.0375 12.0209 17.0375 12.0613 17.0468C12.1069 17.0573 12.1497 17.0842 12.2352 17.1381L14.8571 18.7899L14.3053 13.4227M16 9.98993C16 12.3095 14.2091 14.1899 12 14.1899C9.79086 14.1899 8 12.3095 8 9.98993C8 7.67034 9.79086 5.78993 12 5.78993C14.2091 5.78993 16 7.67034 16 9.98993Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default FileMedal;
