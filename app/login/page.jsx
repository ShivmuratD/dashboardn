'use client'
import React from 'react'
import styles from './login.module.css'
import LoginForm  from '../loginForm/page'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;

