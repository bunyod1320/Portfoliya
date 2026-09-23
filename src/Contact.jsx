import React, { useState } from "react";

const styles = {
  section: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center",
    fontFamily: "'Segoe UI', Arial, sans-serif",
  },
  heading: {
    color: "#CDD6F4",
    fontSize: "2.2rem",
    marginBottom: "10px",
  },
  span: {
    color: "#89B4FA",
  },
  subtitle: {
    color: "#A6ADC8",
    marginBottom: "40px",
    fontSize: "1rem",
  },
  box: {
    background: "#181825",
    border: "1px solid #313244",
    borderRadius: "16px",
    padding: "40px 30px",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    color: "#CDD6F4",
    marginBottom: "8px",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    background: "#1E1E2E",
    border: "1px solid #313244",
    borderRadius: "8px",
    color: "#CDD6F4",
    fontSize: "0.95rem",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "12px 14px",
    background: "#1E1E2E",
    border: "1px solid #313244",
    borderRadius: "8px",
    color: "#CDD6F4",
    fontSize: "0.95rem",
    outline: "none",
    minHeight: "120px",
    resize: "vertical",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#89B4FA",
    color: "#1E1E2E",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.15s ease",
  },
  buttonHover: {
    background: "#A6E3A1",
  },
  socials: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "35px",
  },
  socialLink: {
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#181825",
    border: "1px solid #313244",
    borderRadius: "50%",
    color: "#CDD6F4",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "all 0.2s ease",
  },
};

// Change this to your real Telegram username
const TELEGRAM_LINK = "https://t.me/Usern.111";

export default function Contact() {
  const [hover, setHover] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    window.open(TELEGRAM_LINK, "_blank");
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>
        Get In <span style={styles.span}>Touch</span>
      </h2>
      <p style={styles.subtitle}>
        Have a project in mind or just want to say hi? Let's talk.
      </p>

      <div style={styles.box}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Your Name</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="Bunyod"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Your Email</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder="bunyod@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message</label>
          <textarea
            style={styles.textarea}
            id="message"
            name="message"
            placeholder="Tell menga xabar qoldiring..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button
          style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleSend}
        >
          Send Message
        </button>
      </div>

      <div style={styles.socials}>
        <a style={styles.socialLink} href="mailto:youremail@example.com" title="Email">✉</a>
        <a style={styles.socialLink} href="https://github.com/yourusername" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
        <a style={styles.socialLink} href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
        <a style={styles.socialLink} href={TELEGRAM_LINK} target="_blank" rel="noreferrer" title="Telegram">✈</a>
      </div>
    </section>
  );
}