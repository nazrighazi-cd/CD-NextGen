import { ISvgProps } from '../../../utils/ISvgProps';
import React from 'react';
import Svg, { Path, G, Rect, Defs, ClipPath } from 'react-native-svg';

export function Boost({
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
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="#ED3024" clip-path="url(#a)">
        <Path d="M15.97 10.058c-.382-.758-1.054-1.243-1.996-1.44a1.81 1.81 0 0 0-.229-.033l-.102-.013a1.976 1.976 0 0 0-.298-.018h-.08l-1.527-.013.015-1.519c.005-.127 0-.254-.013-.38l-.01-.106c0-.074-.017-.158-.03-.23-.183-.945-.657-1.624-1.409-2.012a2.799 2.799 0 0 0-1.107-.318H9.1a2.926 2.926 0 0 0-.391.022c-2.485.315-2.476 2.7-2.476 2.803l-.035 4.426c0 .889.229 1.595.705 2.098.488.476 1.189.723 2.076.732l4.448.037c.253 0 2.48-.048 2.82-2.428.023-.157.032-.316.029-.474a2.817 2.817 0 0 0-.298-1.122" />
        <Path d="M17.334.102 4.81 0A2.688 2.688 0 0 0 2.1 2.666L2 15.19a2.684 2.684 0 0 0 2.666 2.708L17.188 18a2.688 2.688 0 0 0 2.71-2.666L20 2.812a2.688 2.688 0 0 0-2.666-2.71Zm.137 13.67c-.784 1.45-2.378 1.952-2.845 2.07a4.472 4.472 0 0 1-.958.125l-5.332-.042a3.521 3.521 0 0 1-.732-.099 5.244 5.244 0 0 1-.841-.294 3.84 3.84 0 0 1-1.164-.84l-.079-.08a4.666 4.666 0 0 1-.94-1.439 4.218 4.218 0 0 1-.2-.656 3.36 3.36 0 0 1-.08-.756l.042-5.257c.013-.327.06-.653.14-.971.129-.467.658-2.05 2.125-2.814a5.123 5.123 0 0 1 2.521-.68 4.098 4.098 0 0 1 2.181.612 4.757 4.757 0 0 1 2.331 4.025 4.73 4.73 0 0 1 3.99 2.412c0 .01 1.367 2.038-.159 4.691" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h22v18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default Boost;
