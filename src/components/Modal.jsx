import React from 'react';
import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

export default function Modal({ children }) {
  const navigate = useNavigate();

  function onClose() {
    navigate('..');
  }

  return (
    <>
        <div className={styles.backdrop} onClick={onClose}/>
        <dialog open className={styles.modal}>
            { children }
        </dialog>
    </>
  )
}
