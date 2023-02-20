import React, { useContext } from "react";
import StyleContext from "./StyleContext";

export default function RequestFormButton() {

  const ButtomStyling = React.useContext(StyleContext)

  return (
    <div>
      <button style={ButtomStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}
