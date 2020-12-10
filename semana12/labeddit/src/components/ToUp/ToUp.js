import React from "react";
import {ToTop} from "./styled";

function ToUp() {
    const scrollTop =() => {
        window.scrollTo(0, 0);
      }
    return(
        <ToTop onClick={scrollTop}>&uarr;</ToTop>
    )
}

export default ToUp;
