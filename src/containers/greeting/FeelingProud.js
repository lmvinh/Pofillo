import React from "react";
import "./FeelingProud.css";
import avatar from "./thao.png"; // Import the image

function FeelingProud(props) {
  const theme = props.theme;
  return (
    <svg
      version="1.1"
      viewBox="80 -10 100.1879 500"
      height="650.68268"
      width="711.1879"
      data-name="Layer 1"
      id="b52d7e2d-d80f-4111-b6ed-d15502ee1edd"
    >
      {/* Add your SVG content here */}

      {/* Embed the avatar.png */}
      <image
        href={avatar} /* Path to your avatar.png file */
        x="20" /* Adjust x position */
        y="10" /* Adjust y position */
        height="400" /* Adjust the height */
        width="400" /* Adjust the width */
        preserveAspectRatio="xMidYMid meet" /* Ensures proper scaling */
      />
    </svg>
  );
}

export default FeelingProud;
