import React, { useState } from "react";

function QuestionOne() {
  const cards = [
    {
      color: "black",
      value: "15",
    },
    {
      color: "blueberry",
      value: "25",
    },
    {
      color: "police",
      value: "18",
    },
    {
      color: "oxford",
      value: "30",
    },
  ];
  const [positions, setPositions] = useState([
    "topleft",
    "topright",
    "bottomleft",
    "bottomright",
  ]);
  const [reload, setReload] = useState(false);
  function func() {
    return 0 - Math.floor(Math.random() * 3);
  }

  const handleShuffle = () => {
    setPositions(positions.sort(func));
    console.log(positions);
    reload ? setReload(false) : setReload(true);
  };

  return (
    <div>
      <div className="main">
        {cards.map((e, i) => (
          <div className={`${positions[i]} ` + e.color} key={i}>
            <p>{e.value}</p>
          </div>
        ))}
      </div>
      <button onClick={handleShuffle} className="shuffle">
        Shuffle
      </button>
    </div>
  );
}

export default QuestionOne;
