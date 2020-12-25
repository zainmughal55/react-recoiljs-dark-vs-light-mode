import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { btnState, toggleBtnState } from "./Atom";
import "./style.css";
export const Child = props => {
  const btnValue = useRecoilValue(btnState);
  const btnToggle = useSetRecoilState(toggleBtnState);

  return (
    <div className={btnValue ? "darkMode" : ""}>
      <p>{btnValue ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={btnToggle} disabled={btnValue}>
        on
      </button>
      <button onClick={btnToggle} disabled={!btnValue}>
        off
      </button>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
