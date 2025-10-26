import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const LoginSignup: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#fff",
      fontFamily: "Inter, sans-serif",
    },
    card: {
      width: "400px",
      padding: "2rem",
      borderRadius: "20px",
      boxShadow: "0 4px 25px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      transition: "0.4s all ease",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: 700,
      textAlign: "center" as const,
      color: "#ff6600",
      marginBottom: "1.5rem",
    },
    label: {
      fontSize: "0.9rem",
      color: "#555",
      marginBottom: "0.3rem",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "0.8rem",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "1rem",
      marginBottom: "1rem",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      borderColor: "#ff6600",
      boxShadow: "0 0 5px rgba(255,102,0,0.4)",
    },
    button: {
      width: "100%",
      padding: "0.9rem",
      backgroundColor: "#ff6600",
      color: "#fff",
      fontSize: "1rem",
      fontWeight: 600,
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "0.3s",
    },
    buttonHover: {
      backgroundColor: "#e55b00",
    },
    toggle: {
      textAlign: "center" as const,
      marginTop: "1rem",
      color: "#666",
      fontSize: "0.9rem",
    },
    link: {
      color: "#ff6600",
      textDecoration: "none",
      fontWeight: 600,
      cursor: "pointer",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      margin: "1.5rem 0",
    },
    line: {
      flex: 1,
      height: "1px",
      backgroundColor: "#ddd",
    },
    orText: {
      margin: "0 10px",
      fontSize: "0.9rem",
      color: "#777",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "1rem",
    },
    socialBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      borderRadius: "50%",
      border: "1px solid #ddd",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

        {!isLogin && (
          <div>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              style={styles.input}
              required
            />
          </div>
        )}

        <label style={styles.label}>Email</label>
        <input type="email" placeholder="Enter your email" style={styles.input} required />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={styles.input}
          required
        />

        {!isLogin && (
          <>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              style={styles.input}
              required
            />
          </>
        )}

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isLogin ? {} : { backgroundColor: "#ff6600" }),
          }}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <div style={styles.divider}>
          <div style={styles.line}></div>
          <div style={styles.orText}>or continue with</div>
          <div style={styles.line}></div>
        </div>

        <div style={styles.socialContainer}>
          <div
            style={styles.socialBtn}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f2f2f2")}
            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
          >
            <FcGoogle size={22} />
          </div>
          <div
            style={styles.socialBtn}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f2f2f2")}
            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
          >
            <FaFacebook color="#1877f2" size={20} />
          </div>
          <div
            style={styles.socialBtn}
            onMouseOver={(e) => (e.currentTarget.style.background = "#f2f2f2")}
            onMouseOut={(e) => (e.currentTarget.style.background = "white")}
          >
            <FaApple color="#000" size={22} />
          </div>
        </div>

        <p style={styles.toggle}>
          {isLogin ? "Don’t have an account? " : "Already have an account? "}
          <span style={styles.link} onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;