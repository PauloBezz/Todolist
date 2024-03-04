import { useState } from "react";
import Svg, { G, Path, ClipPath, Defs, Rect } from "react-native-svg";

export function ArrowBackIcon({ category }) {
  let color = "black";

  if (category === "Professional") {
    color = "#318CE7";
  } else if (category === "Social") {
    color = "#FBD474";
  } else if (category === "Personal") {
    color = "#FF8657";
  } else if (category === "Academic") {
    color = "#585858";
  }

  return (
    <Svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_239_34)">
        <Path
          d="M0.550781 13.6758C-0.181641 14.4082 -0.181641 15.5977 0.550781 16.3301L9.92578 25.7051C10.6582 26.4375 11.8477 26.4375 12.5801 25.7051C13.3125 24.9727 13.3125 23.7832 12.5801 23.0508L6.39844 16.875H24.375C25.4121 16.875 26.25 16.0371 26.25 15C26.25 13.9629 25.4121 13.125 24.375 13.125H6.4043L12.5742 6.94922C13.3066 6.2168 13.3066 5.02734 12.5742 4.29492C11.8418 3.5625 10.6523 3.5625 9.91992 4.29492L0.544922 13.6699L0.550781 13.6758Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_239_34">
          <Rect width="26.25" height="30" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
