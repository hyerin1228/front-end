import React from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css"; 

function Navbar() {
  return(
    <navbar className={styles.navbar}>
      <div  className={styles.box}>
      <i className={styles.title}>퀴즈퀴즈</i>
      <p className={styles.home}><Link className={styles.link} to="/">홈</Link></p>
      <button className={styles.button}><Link className={styles.link} to="/create">카드 세트 만들기</Link></button>
      </div>
      <div className={styles.box}>
        <input className={styles.search} type="text" placeholder="찾아보기" />
        <p className={styles.home}><Link className={styles.link} to="/login">로그인</Link></p>
        <button className={styles.button}><Link className={styles.link} to="/join">회원 가입</Link></button>
      </div>
    </navbar>
  )
}

export default Navbar;