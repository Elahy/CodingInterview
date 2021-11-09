import React, { useState } from "react";

import styles from "./quesOne.module.css";

function QuestionOne() {
  const [cards, setCards] = useState([
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
  ]);
  const [reload, setReload] = useState(false);
  function func() {
    return 0 - Math.floor(Math.random() * 3);
  }
  const handleShuffle = () => {
    setCards(cards.sort(func));
    reload ? setReload(false) : setReload(true);
  };
  return (
    <div>
      <div className={styles.main}>
        {cards.map((e, i) => (
          <div className={e.color} key={i}>
            <p>{e.value}</p>
          </div>
        ))}
      </div>
      <button onClick={handleShuffle} className={styles.shuffle}>
        Shuffle
      </button>
    </div>
  );
}

export default QuestionOne;
