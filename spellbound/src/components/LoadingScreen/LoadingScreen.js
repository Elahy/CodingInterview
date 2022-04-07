import React from "react";
import styles from "./loading.module.css";

function LoadingScreen() {
  return (
    <div className={styles.whole}>
      <div className={styles.area}>
        <div className={styles.main}></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
