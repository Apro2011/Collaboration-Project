import React from 'react';
import styles from "./login.module.css"
import Link from 'next/link'

const Login = () => {
    return (
        <div className={styles.container}>
            <form className={styles.login_box}>
                <p className={styles.login_title}>Sign In</p>
                <p className={styles.login_subtitle}>Log in to enjoy unlimited music</p>
                <input className={styles.input} placeholder="email"/>
                <input className={styles.input} placeholder="password"/>
                <div className={styles.remember_me_box}>
                    <input id='login_remember_me' type='checkbox' className={styles.remember_me_checkbox}/>
                    <label for="login_remember_me" className={styles.remember_me_label}>Remember Me</label>
                </div>
                <button className={styles.submit_button}>Login</button>
            </form>
            <Link href="/signup" className={styles.signup}>
                Don’t have an account? Sign Up
            </Link>
            <Link href="/forget-password" className={styles.forget_password}>
                Forgot Password
            </Link>
        </div>
    );
};

export default Login;