"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/Login.module.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.status === 200) {
            const data = await response.json();
            router.push("/main"); 
        } else {
            setMessage("Invalid username or password.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <p className={styles.title}>Movie<span style={{ color: "white" }}>Talks</span></p>
                <p className={styles.subtitle}>Welcome back to TFI Katubanisa</p>
                <p className={styles.subtitle}>New to MovieTalks?</p>
                <br/>
                <Link className={styles.pagelink} href="/signup">Create account</Link>
            </div>
            <div className={styles.box2}>
                <p className={styles.boxtitle}>Signin</p>
                <p className={styles.subtitle}>Stay in touch with TFI Banisa Batch</p>
                <form className={styles.loginform} onSubmit={handleLogin}>
                    <input className={styles.logininput} type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}/><br/>                   
                    <input className={styles.logininput} type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                    <button type="submit" className={styles.loginButton}>Login</button>
                    {message && <p className={styles.error}>{message}</p>}
                    <p className={styles.subtitle} style={{textAlign:"center"}}>or</p>
                    <div className={styles.loginButton}>Continue with Google</div><br/>
                    <div className={styles.loginButton}>Continue with Facebook</div>
                </form> 
            </div>
        </div>
    );
};

export default LoginPage;
