import React from "react";
import avatar from "./education.jpg";
export default function ExperienceImg(props) {
  const theme = props.theme;
  return (
    <svg
      id="bf56719a-dd30-4b09-833f-7c41eeee086b"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="1094"
      height="760"
      viewBox="0 0 1094 760"
    >
      <image
        href={avatar} /* Path to your avatar.png file */
        x="150" /* Adjust x position */
        y="10" /* Adjust y position */
        height="700" /* Adjust the height */
        width="700" /* Adjust the width */
        preserveAspectRatio="xMidYMid meet" /* Ensures proper scaling */
      />
    </svg>
  );
}
