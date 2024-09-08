import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Settings() {
  const value = useSelector((state) => 
    state.showLabel
  );
  const dispatch = useDispatch();
  const handleShowLabel = (event) => {
    dispatch({
      type: "showLabel",
      payload: event.target.checked,
    });
  };
  return (
    <div>
      <input checked={value} type="checkbox" onChange={handleShowLabel}></input>
      Show label
    </div>
  );
}

export default Settings;
