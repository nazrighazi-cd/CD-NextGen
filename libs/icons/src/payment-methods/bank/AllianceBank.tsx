import { ISvgProps } from '../../../utils/ISvgProps';
import React from 'react';
import Svg, {
  Path,
  G,
  LinearGradient,
  Stop,
  Defs,
  ClipPath,
} from 'react-native-svg';

export function AllianceBank({
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
      viewBox="0 0 71 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G cliPath="url(#a)">
        <Path fill="#2A4273" d="M10.98 1.474H1.075v9.496h9.903V1.474Z" />
        <Path fill="#ED1C24" d="M10.98 9.662H1.075v1.308h9.903V9.662Z" />
        <Path fill="#2A4273" d="M6.065.305 0 9.662h12.13L6.065.305Z" />
        <Path
          fill="url(#b)"
          d="M6.065 1.06v5.542l-1.74 2.683H.733L6.065 1.06Z"
        />
        <Path
          fill="url(#c)"
          d="M6.064 1.06v5.542l1.738 2.683h3.592L6.064 1.06Z"
        />
        <Path
          fill="#2A4273"
          d="M19.78 9.627h-1.074l-.428-1.21h-1.953l-.408 1.21h-1.041l1.903-5.333h1.043l1.958 5.333ZM17.962 7.52l-.674-1.98-.66 1.98h1.334ZM20.33 9.627V4.33h.984v4.39h2.455v.899l-3.439.008ZM24.5 9.627V4.33h.988v4.39h2.445v.899l-3.433.008ZM28.615 9.627V4.294h.986v5.333h-.986ZM34.95 9.627h-1.074l-.426-1.21H31.5l-.407 1.21h-1.047l1.903-5.333h1.045l1.956 5.333ZM33.13 7.52l-.672-1.98-.66 1.98h1.332ZM35.482 9.627V4.294h.96l2 3.563V4.294h.917v5.333h-.99L36.4 6.15v3.478h-.917ZM44.041 9.464c-.475.238-1.06.255-1.583.255a2.023 2.023 0 0 1-1.601-.725c-.417-.485-.626-1.147-.626-1.985 0-.888.21-1.578.63-2.07a2.072 2.072 0 0 1 1.656-.735c.6 0 1.15.138 1.457.579.236.336.204.61.236 1.236h-.984c-.057-.277.094-.495-.09-.654a.98.98 0 0 0-.668-.24 1.071 1.071 0 0 0-.882.426c-.227.283-.34.742-.338 1.377 0 .679.11 1.16.332 1.442.24.301.587.499.968.552.611.055 1.338-.124 1.528-.305l-.035.847ZM45.335 9.627V4.294h3.624v.902h-2.636V6.38h2.445v.898h-2.445v1.45h2.73v.9h-3.718ZM51.791 4.294h1.954c.289-.007.578.011.864.052.184.035.36.11.51.22.157.12.285.272.376.447.1.192.152.406.148.623a1.34 1.34 0 0 1-.183.689 1.186 1.186 0 0 1-.503.468c.277.08.519.25.686.485.163.236.248.517.24.803 0 .244-.052.486-.154.709a1.403 1.403 0 0 1-.424.548c-.192.143-.42.23-.66.252-.166.02-.563.033-1.192.037h-1.662V4.294Zm.986.888v1.234h.648c.383 0 .623 0 .715-.018a.63.63 0 0 0 .407-.192.599.599 0 0 0 .145-.417.611.611 0 0 0-.124-.408.558.558 0 0 0-.373-.187 10.514 10.514 0 0 0-.843-.018l-.575.006Zm0 2.12V8.73h.913c.226.008.453-.003.678-.033a.611.611 0 0 0 .359-.204.697.697 0 0 0 .138-.452.747.747 0 0 0-.108-.407.61.61 0 0 0-.307-.243 3.07 3.07 0 0 0-.876-.077l-.797-.01ZM61.126 9.627h-1.074l-.428-1.21H57.67l-.407 1.21h-1.045l1.903-5.333h1.043l1.962 5.333ZM59.308 7.52l-.672-1.98-.652 1.98h1.324ZM61.651 9.627V4.294h.96l2 3.563V4.294h.917v5.333h-.99l-1.97-3.478v3.478h-.917ZM66.594 9.627V4.294h.986V6.33l1.994-2.037H71L68.4 6.942 71 9.632h-1.426L67.58 7.634V9.63l-.986-.004Z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1="6.016"
          x2="3.18"
          y1="6.681"
          y2="5.051"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#636466" />
          <Stop offset=".01" stopColor="#6A6B6D" />
          <Stop offset=".09" stopColor="#979899" />
          <Stop offset=".18" stopColor="#BDBDBE" />
          <Stop offset=".26" stopColor="#DADADA" />
          <Stop offset=".34" stopColor="#EEEEEF" />
          <Stop offset=".42" stopColor="#FBFBFB" />
          <Stop offset=".5" stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1="6.109"
          x2="8.945"
          y1="6.681"
          y2="5.051"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#636466" />
          <Stop offset=".01" stopColor="#6A6B6D" />
          <Stop offset=".09" stopColor="#979899" />
          <Stop offset=".18" stopColor="#BDBDBE" />
          <Stop offset=".26" stopColor="#DADADA" />
          <Stop offset=".34" stopColor="#EEEEEF" />
          <Stop offset=".42" stopColor="#FBFBFB" />
          <Stop offset=".5" stopColor="#fff" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 .305h71V10.97H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default AllianceBank;
