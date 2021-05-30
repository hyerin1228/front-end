import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import styles from "./create.module.css"; // eslint-disable-line no-unused-vars
import CardAddForm from "./create-CardAddForm";

function Create() {
  const [addCard, setAddCard] = useState([
    {
      "단어": "",
      "뜻": ""
    },
    {
      "단어": "",
      "뜻": ""
    }
  ]);

  const onAddCard = () => {
    setAddCard([...addCard, {
      "단어": "",
      "뜻": ""
    }])
  }

  return (
    <div className="cardsetbody">

      <div className="cardsetName">
        <textarea placeholder="제목을 입력해주세요" /> <br />
        <textarea placeholder="설명을 입력해주세요" />
      </div>
      <hr />
      <div className="cardddbody" id="cbody">
        {addCard.map((addCard) => {
          return (<CardAddForm 단어={addCard.단어} 뜻={addCard.뜻}></CardAddForm>)
        })
        }
        <div id="testbody"></div>
        <p><button onClick={onAddCard}>카드추가하기</button></p>
      </div>

    </div >
  )
}

export default Create;