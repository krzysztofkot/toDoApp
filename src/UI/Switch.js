import React, { useState } from "react";

import StyledSwitch from "./Switch.styled";

const Switch = React.forwardRef(
  ({ firstOption, secondOption, id, title, initValue }, ref) => {
    const [isChecked, setIsChecked] = useState(initValue);
    const checkboxHandler = e => {
      setIsChecked(e.target.checked);
    };

    return (
      <StyledSwitch>
        <legend>{title}</legend>
        <input
          type="checkbox"
          name="switcher"
          id={id}
          onChange={checkboxHandler}
          checked={isChecked}
          ref={ref}
        />
        <label htmlFor={id}></label>
        <span>{!isChecked ? firstOption : secondOption}</span>
      </StyledSwitch>
    );
  }
);

export default React.memo(Switch);
