import React, { useState } from "react";
import styles from "./quesTwo.module.css";

function QuestionTwo() {
  const [product, setProduct] = useState([
    {
      item: "",
      quantity: "",
      rate: "",
    },
  ]);

  const addLine = () => {
    const newProduct = {
      item: "",
      quantity: "",
      rate: "",
    };
    setProduct([...product, newProduct]);
    console.log("product", product);
  };

  return (
    <div className={styles.root}>
      <div className={styles.tableHead}>
        <p className={styles.item}>Item</p>
        <p className={styles.quantity}>Quantity</p>
        <p className={styles.rate}>Rate</p>
        <p className={styles.amount}>Amount</p>
      </div>
      {product.map((e, i) => (
        <div key={i}>
          <input className={styles.inputItem}></input>
          <input onChange={() => {}} className={styles.inputQuantity}></input>
          <input className={styles.inputQuantity}></input>
          <span className={styles.indivisualAmount}>
            {e.rate && e.quantity ? e.rate * e.quantity : "0"}
          </span>
          <button className={styles.deleteButton}> X </button>
        </div>
      ))}
      <button onClick={addLine}> + Line Item</button>
      <div className={styles.bottom}>
        <div className={styles.bottomleft}>
          <div>
            <p>Notes</p>
            <input
              className={styles.termsInput}
              multiline="true"
              defaultValue="Notes - any relevant information not already covered"
            ></input>
          </div>
          <div>
            <p>Terms</p>
            <input
              className={styles.termsInput}
              multiline="true"
              defaultValue="Terms and conditions - late fees, payment methods, delivery schedule"
            ></input>
          </div>
        </div>
        <div className={styles.calculation}>
          <div>
            <p> Subtotal </p>
          </div>
          <label>
            Discount
            <input />
          </label>
          <label>
            Tax
            <input />
          </label>
          <label>
            Shipping
            <input />
          </label>
          <div>
            <p>Total </p>
          </div>
          <label>
            Amount Paid
            <input />
          </label>
          <div>
            <p> Balance Due </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionTwo;
