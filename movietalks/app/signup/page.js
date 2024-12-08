"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/Login.module.css";

const Signuppage = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:5000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password }),
        });
        if (response.status === 201) {
            router.push("/main");
        } else {
            setMessage("user already exixts");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <p className={styles.title}>Movie<span style={{ color: "white" }}>Talks</span></p>
                <p className={styles.subtitle}>Become a member of TFI Katubanisa</p>
                <p className={styles.subtitle}>Already a member?</p>
                <br />
                <Link className={styles.pagelink} href="/signin">Login</Link>
            </div>
            <div className={styles.box2}>
                <p className={styles.boxtitle}>Signup</p>
                <p className={styles.subtitle}>Connect with TFI Katubanisa Batch</p>
                <form className={styles.loginform} onSubmit={handleSignup}>
                    <input className={styles.logininput} type="text" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)}/><br/>
                    <input className={styles.logininput} type="text" placeholder="Username" value={username} required onChange={(e) => setUsername(e.target.value)} /><br/>
                    <input type="password" className={styles.logininput} placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} /><br/>
                    <button type="submit" className={styles.loginButton}>Create Account</button>
                    {message && <p className={styles.error}>{message}</p>}
                    <p className={styles.subtitle} style={{textAlign:"center"}}>or</p>
                    <div className={styles.loginButton}>Continue with Google</div> <br/>
                    <div className={styles.loginButton}>Continue with Facebook</div>
                </form>
               
            </div>
        </div>
    );
};

export default Signuppage;
