import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function CollectorButton() {
   const ButtomStyling = React.useContext(StyleContext)
   
  return (
    <div>
      <button style={ButtomStyling}>
        Click Here!
      </button>
    </div>
  );
}
