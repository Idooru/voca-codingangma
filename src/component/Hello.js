import styles from "./Hello.module.css";

export default function Hello() {
  return (
    <div>
      <p
        style={{
          color: "#f00",
          borderRight: "12px solid #000",
          marginBottom: "50px",
          opacity: 1,
        }}
      >
        Hello
      </p>
      <div className={styles.box}>Hello</div>
    </div>
  );
}
