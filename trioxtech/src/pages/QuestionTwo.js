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

  const handleChange = (name, value, i) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const tempproducts = product;
    const tempitem = product[i];
    console.log(tempitem);
    tempitem.name = value;
    tempproducts[i] = tempitem;
    setProduct(tempproducts);

    // setProduct(...product, product[i] = {...product[i], product[i].name : value});
    // console.log(product[i], value, name);
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
          <input
            name="item"
            type="text"
            onChange={(event) =>
              handleChange(event.target.name, event.target.value, i)
            }
            className={styles.inputItem}
          />
          <input
            name="quantity"
            type="number"
            onChange={(event) => handleChange(event, i)}
            className={styles.inputQuantity}
          />
          <input
            name="rate"
            type="number"
            onChange={(event) => handleChange(event, i)}
            className={styles.inputQuantity}
          />
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
          <div>
            <label>
              Discount
              <input />
            </label>
          </div>
          <div>
            <label>
              Tax
              <input />
            </label>
          </div>
          <div>
            <label>
              Shipping
              <input />
            </label>
          </div>
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
