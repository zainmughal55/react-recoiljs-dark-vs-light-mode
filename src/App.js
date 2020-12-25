import React from "react";
import "./style.css";
import { RecoilRoot } from "recoil";
import { Child } from "./Child";

export default function App() {
  return (
    <RecoilRoot>
      <div className="main">
        <Child
          title={"Hello World"}
          description={"This is my first app on react"}
        />
      </div>
    </RecoilRoot>
  );
}
