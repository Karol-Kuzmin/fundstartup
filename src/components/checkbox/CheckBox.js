import React from "react";
import { useState } from "react";
import "./CheckBox.css"

export default function CheckBox(props) {

  const [checked, setChecked] = useState(props.checked);

  const _handleChange = () => {
    setChecked(!checked);
  };

  const { disabled } = props;

  return (
    <div className="React__checkbox">
      <label>
        <input
          type="checkbox"
          className="React__checkbox--input"
          checked={checked}
          disabled={disabled}
          onChange={() =>_handleChange()}
        />
        <span className="React__checkbox--span" />
      </label>
    </div>
  );
}
