import { ISvgProps } from '../../../../utils/ISvgProps';
import React from 'react';
import Svg, {
  Path,
  G,
  LinearGradient,
  Stop,
  Defs,
  ClipPath,
  Rect,
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
      <G ClipPath="url(#clip0_7161_268513)">
        <Path
          d="M10.9792 1.474H1.07617V10.9696H10.9792V1.474Z"
          fill="#2A4273"
        />
        <Path
          d="M10.9792 9.66168H1.07617V10.9696H10.9792V9.66168Z"
          fill="#ED1C24"
        />
        <Path
          d="M6.06488 0.304626L0 9.66169H12.1298L6.06488 0.304626Z"
          fill="#2A4273"
        />
        <Path
          d="M6.06487 1.06049V6.60179L4.32506 9.28484H0.733398L6.06487 1.06049Z"
          fill="url(#paint0_linear_7161_268513)"
        />
        <Path
          d="M6.06445 1.06049V6.60179L7.80222 9.28484H11.3939L6.06445 1.06049Z"
          fill="url(#paint1_linear_7161_268513)"
        />
        <Path
          d="M19.7796 9.62708H18.706L18.2782 8.41696H16.3245L15.917 9.62708H14.876L16.7788 4.29358H17.8218L19.7796 9.62708ZM17.9624 7.51853L17.2881 5.53833L16.628 7.51853H17.9624Z"
          fill="#2A4273"
        />
        <Path
          d="M20.3301 9.62703V4.3302H21.3141V8.72046H23.7689V9.61888L20.3301 9.62703Z"
          fill="#2A4273"
        />
        <Path
          d="M24.5 9.62703V4.3302H25.4881V8.72046H27.9328V9.61888L24.5 9.62703Z"
          fill="#2A4273"
        />
        <Path
          d="M28.6152 9.62708V4.29358H29.6013V9.62708H28.6152Z"
          fill="#2A4273"
        />
        <Path
          d="M34.9495 9.62708H33.8759L33.4501 8.41696H31.5005L31.093 9.62708H30.0459L31.9487 4.29358H32.9938L34.9495 9.62708ZM33.1303 7.51853L32.458 5.53833L31.7979 7.51853H33.1303Z"
          fill="#2A4273"
        />
        <Path
          d="M35.4824 9.62708V4.29358H36.442L38.4425 7.85672V4.29358H39.3593V9.62708H38.3692L36.3992 6.1495V9.62708H35.4824Z"
          fill="#2A4273"
        />
        <Path
          d="M44.0411 9.46411C43.5664 9.70247 42.9817 9.71877 42.4582 9.71877C42.1539 9.72613 41.8519 9.66473 41.5746 9.53916C41.2974 9.41358 41.052 9.22707 40.8569 8.99351C40.4399 8.50865 40.2314 7.84722 40.2314 7.00923C40.2314 6.12099 40.4413 5.43105 40.861 4.93939C41.0633 4.69933 41.3175 4.50839 41.6044 4.38098C41.8914 4.25358 42.2035 4.19304 42.5172 4.20395C43.1162 4.20395 43.6662 4.34248 43.9739 4.78253C44.2102 5.11867 44.1776 5.3937 44.2102 6.01913H43.2262C43.1692 5.74207 43.3199 5.52408 43.1366 5.36517C42.9517 5.20431 42.7133 5.11855 42.4683 5.12478C42.298 5.12053 42.1292 5.15694 41.9758 5.23099C41.8224 5.30504 41.6888 5.41459 41.5862 5.55056C41.3594 5.83442 41.2467 6.29348 41.248 6.92774C41.248 7.60682 41.3587 8.08761 41.5801 8.37011C41.8202 8.67111 42.1665 8.86869 42.5478 8.92221C43.159 8.97721 43.8863 8.79794 44.0757 8.61662L44.0411 9.46411Z"
          fill="#2A4273"
        />
        <Path
          d="M45.335 9.62708V4.29358H48.9592V5.19608H46.323V6.37971H48.7677V7.27814H46.323V8.72866H49.0529V9.62708H45.335Z"
          fill="#2A4273"
        />
        <Path
          d="M51.791 4.29353H53.7447C54.0336 4.28726 54.3226 4.30497 54.6085 4.34649C54.7933 4.38056 54.9681 4.45576 55.1199 4.56652C55.2758 4.68624 55.4037 4.83849 55.4947 5.01267C55.5958 5.20471 55.6469 5.41909 55.6434 5.63607C55.6456 5.87794 55.5822 6.11587 55.4601 6.32466C55.3423 6.52712 55.1672 6.69016 54.9569 6.79322C55.2339 6.87277 55.4758 7.04364 55.6434 7.27809C55.8064 7.51352 55.8905 7.79452 55.8838 8.08076C55.8837 8.32545 55.8309 8.56725 55.729 8.78972C55.6358 9.00493 55.4901 9.19333 55.3053 9.33774C55.1129 9.48148 54.8844 9.56895 54.6452 9.59036C54.4795 9.61073 54.0822 9.62295 53.4534 9.62703H51.791V4.29353ZM52.777 5.18176V6.41633H53.4249C53.8079 6.41633 54.0483 6.41633 54.14 6.398C54.2947 6.38657 54.4398 6.31837 54.5474 6.20649C54.6471 6.09081 54.6988 5.94142 54.692 5.78886C54.7008 5.64254 54.6567 5.49793 54.5678 5.38141C54.4724 5.27309 54.3388 5.20592 54.195 5.19398C54.0972 5.18176 53.816 5.17565 53.3515 5.17565L52.777 5.18176ZM52.777 7.30253V8.7286H53.6897C53.9164 8.73674 54.1433 8.72584 54.3681 8.69601C54.5076 8.67169 54.6344 8.59968 54.7267 8.49228C54.8242 8.36229 54.8732 8.20231 54.8652 8.04001C54.869 7.89665 54.8316 7.75521 54.7572 7.63256C54.6841 7.5202 54.576 7.43501 54.4496 7.39013C54.1628 7.32242 53.8678 7.29635 53.5736 7.31272L52.777 7.30253Z"
          fill="#2A4273"
        />
        <Path
          d="M61.1255 9.62708H60.0519L59.624 8.41696H57.6703L57.2629 9.62708H56.2178L58.1206 4.29358H59.1636L61.1255 9.62708ZM59.3083 7.51853L58.636 5.53833L57.9841 7.51853H59.3083Z"
          fill="#2A4273"
        />
        <Path
          d="M61.6514 9.62708V4.29358H62.6109L64.6115 7.85672V4.29358H65.5282V9.62708H64.5381L62.5681 6.1495V9.62708H61.6514Z"
          fill="#2A4273"
        />
        <Path
          d="M66.5938 9.62708V4.29358H67.5798V6.33082L69.5742 4.29358H71.0003L68.3987 6.942L71.0003 9.63116H69.5742L67.5798 7.63466V9.63116L66.5938 9.62708Z"
          fill="#2A4273"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_7161_268513"
          x1="6.01597"
          y1="6.68124"
          x2="3.18013"
          y2="5.05144"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#636466" />
          <Stop offset="0.01" stopColor="#6A6B6D" />
          <Stop offset="0.09" stopColor="#979899" />
          <Stop offset="0.18" stopColor="#BDBDBE" />
          <Stop offset="0.26" stopColor="#DADADA" />
          <Stop offset="0.34" stopColor="#EEEEEF" />
          <Stop offset="0.42" stopColor="#FBFBFB" />
          <Stop offset="0.5" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_7161_268513"
          x1="6.10927"
          y1="6.68124"
          x2="8.94512"
          y2="5.05144"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#636466" />
          <Stop offset="0.01" stopColor="#6A6B6D" />
          <Stop offset="0.09" stopColor="#979899" />
          <Stop offset="0.18" stopColor="#BDBDBE" />
          <Stop offset="0.26" stopColor="#DADADA" />
          <Stop offset="0.34" stopColor="#EEEEEF" />
          <Stop offset="0.42" stopColor="#FBFBFB" />
          <Stop offset="0.5" stopColor="white" />
        </LinearGradient>
        <ClipPath id="clip0_7161_268513">
          <Rect
            width="71"
            height="10.665"
            fill="white"
            transform="translate(0 0.304626)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default AllianceBank;
