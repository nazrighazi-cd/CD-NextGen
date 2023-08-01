import React from 'react';
import Svg, { Path } from 'react-native-svg';
export function Contact({
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
        d="M5 12H3M5 16H3M5 8H3M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.8453 14.8938H12.1718C10.8746 14.8938 10.2259 14.8938 9.71429 15.1194C9.0321 15.4203 8.4901 15.9975 8.20753 16.7239C8.05385 17.1189 8.01161 17.5907 8 18.3468M16 8.96459C16 10.6019 14.7535 11.9292 13.2159 11.9292C11.6782 11.9292 10.4317 10.6019 10.4317 8.96459C10.4317 7.32729 11.6782 6 13.2159 6C14.7535 6 16 7.32729 16 8.96459Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export default Contact;
