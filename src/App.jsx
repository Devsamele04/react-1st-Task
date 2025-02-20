// motu move on screen

import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [LeftX, setleft] = useState(0);
  const [topX, setop] = useState(0);
  const [rotate, setrotate] = useState(0);

  const changeposition = () => {
    setleft(Math.random() * 80);
    setop(Math.random() * 70);
    setrotate(Math.random() * 360);
  };
  return (
    <div>
      <Card x={LeftX} y={topX} rotate={rotate} />
      <button className="active:scale(1.2) " onClick={changeposition}>
        change position
      </button>
    </div>
  );
};

export default App;
