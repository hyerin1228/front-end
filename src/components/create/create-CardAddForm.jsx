import React, { Component, useState } from "react";
import ReactDOM from 'react-dom';
import styles from "./create.module.css"; // eslint-disable-line no-unused-vars

const CardAddForm = (props) => {

  return (
    <table className="cardtb1" >
      <tr>
        <td>
          <label>{props.cardCount}</label>
          <input type="text" name="" id="" /><br />
          <label>단어</label><br />
        </td>
        <td>
          <input type="text" name="" id="" /><br />
          <label>뜻</label><br />
        </td>
      </tr>
    </table>
  )
}


export default CardAddForm;