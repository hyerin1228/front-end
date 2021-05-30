import React, { useState } from "react";
import Modal from './modal';
// import styles from "./join.module.css"; // eslint-disable-line no-unused-vars

function Join() {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <button onClick={openModal}>회원가입</button>
      <Modal open={modalOpen} close={closeModal} header="Modal join" />

    </>

  )
}

export default Join;